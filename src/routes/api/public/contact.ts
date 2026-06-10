import * as React from 'react'
import { render } from '@react-email/components'
import { createClient } from '@supabase/supabase-js'
import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'
import { TEMPLATES } from '@/lib/email-templates/registry'

const SITE_NAME = 'qtwebdesign'
const SENDER_DOMAIN = 'notify.www.qtwebdesign.org'
const FROM_DOMAIN = 'www.qtwebdesign.org'

const ContactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100),
  email: z.string().trim().email('Invalid email').max(255),
  phone: z.string().trim().max(40).optional().or(z.literal('')),
  subject: z.string().trim().max(150).optional().or(z.literal('')),
  preferredDate: z.string().trim().max(40).optional().or(z.literal('')),
  message: z.string().trim().min(1, 'Message is required').max(4000),
})

function generateToken(): string {
  const bytes = new Uint8Array(32)
  crypto.getRandomValues(bytes)
  return Array.from(bytes).map((b) => b.toString(16).padStart(2, '0')).join('')
}

async function enqueueEmail(
  supabase: ReturnType<typeof createClient>,
  templateName: string,
  recipient: string,
  templateData: Record<string, unknown>,
  idempotencyKey: string,
) {
  const template = TEMPLATES[templateName]
  if (!template) throw new Error(`Template ${templateName} missing`)
  const effectiveRecipient = template.to || recipient
  const normalized = effectiveRecipient.toLowerCase()

  // Suppression check
  const { data: suppressed } = await supabase
    .from('suppressed_emails')
    .select('id')
    .eq('email', normalized)
    .maybeSingle()
  if (suppressed) return { skipped: 'suppressed' as const }

  // Unsubscribe token (reuse if present)
  let unsubscribeToken: string
  const { data: existingToken } = await supabase
    .from('email_unsubscribe_tokens')
    .select('token, used_at')
    .eq('email', normalized)
    .maybeSingle()

  if (existingToken && !existingToken.used_at) {
    unsubscribeToken = existingToken.token as string
  } else {
    unsubscribeToken = generateToken()
    await supabase
      .from('email_unsubscribe_tokens')
      .upsert(
        { token: unsubscribeToken, email: normalized },
        { onConflict: 'email', ignoreDuplicates: true },
      )
    const { data: stored } = await supabase
      .from('email_unsubscribe_tokens')
      .select('token')
      .eq('email', normalized)
      .maybeSingle()
    if (stored?.token) unsubscribeToken = stored.token as string
  }

  // Render
  const element = React.createElement(template.component, templateData)
  const html = await render(element)
  const text = await render(element, { plainText: true })
  const subject =
    typeof template.subject === 'function' ? template.subject(templateData) : template.subject

  const messageId = crypto.randomUUID()

  await supabase.from('email_send_log').insert({
    message_id: messageId,
    template_name: templateName,
    recipient_email: effectiveRecipient,
    status: 'pending',
  })

  const { error: enqueueError } = await supabase.rpc('enqueue_email', {
    queue_name: 'transactional_emails',
    payload: {
      message_id: messageId,
      to: effectiveRecipient,
      from: `${SITE_NAME} <noreply@${FROM_DOMAIN}>`,
      sender_domain: SENDER_DOMAIN,
      subject,
      html,
      text,
      purpose: 'transactional',
      label: templateName,
      idempotency_key: idempotencyKey,
      unsubscribe_token: unsubscribeToken,
      queued_at: new Date().toISOString(),
    },
  })

  if (enqueueError) {
    await supabase.from('email_send_log').insert({
      message_id: messageId,
      template_name: templateName,
      recipient_email: effectiveRecipient,
      status: 'failed',
      error_message: 'Failed to enqueue email',
    })
    throw enqueueError
  }
  return { queued: true as const }
}

export const Route = createFileRoute('/api/public/contact')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
        const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
        if (!supabaseUrl || !serviceKey) {
          return Response.json({ error: 'Server misconfigured' }, { status: 500 })
        }

        let payload: z.infer<typeof ContactSchema>
        try {
          const body = await request.json()
          payload = ContactSchema.parse(body)
        } catch (err) {
          const message =
            err instanceof z.ZodError
              ? err.errors.map((e) => e.message).join(', ')
              : 'Invalid request'
          return Response.json({ error: message }, { status: 400 })
        }

        const supabase = createClient(supabaseUrl, serviceKey)

        // 1. Save submission
        const { data: inserted, error: insertError } = await supabase
          .from('contact_submissions')
          .insert({
            name: payload.name,
            email: payload.email,
            phone: payload.phone || null,
            subject: payload.subject || null,
            preferred_date: payload.preferredDate ? payload.preferredDate : null,
            message: payload.message,
          })
          .select('id')
          .single()

        if (insertError || !inserted) {
          console.error('Failed to save contact submission', insertError)
          return Response.json({ error: 'Could not save submission' }, { status: 500 })
        }

        const submissionId = inserted.id as string

        // 2. Notify site owner
        try {
          await enqueueEmail(
            supabase,
            'contact-notification',
            payload.email,
            {
              name: payload.name,
              email: payload.email,
              phone: payload.phone || undefined,
              subject: payload.subject || undefined,
              preferredDate: payload.preferredDate || undefined,
              message: payload.message,
            },
            `contact-notify-${submissionId}`,
          )
        } catch (err) {
          console.error('Owner notification email failed', err)
          // Still return success — submission is saved.
        }

        // 3. Send confirmation to visitor
        try {
          await enqueueEmail(
            supabase,
            'contact-confirmation',
            payload.email,
            {
              name: payload.name,
              subject: payload.subject || undefined,
              message: payload.message,
            },
            `contact-confirm-${submissionId}`,
          )
        } catch (err) {
          console.error('Visitor confirmation email failed', err)
        }

        return Response.json({ success: true })
      },
    },
  },
})
