import { useEffect, useState } from 'react'
import { createFileRoute, useSearch } from '@tanstack/react-router'
import { z } from 'zod'

const searchSchema = z.object({
  token: z.string().optional(),
})

export const Route = createFileRoute('/unsubscribe')({
  validateSearch: searchSchema,
  component: UnsubscribePage,
})

type Status = 'loading' | 'ready' | 'already' | 'invalid' | 'done' | 'error'

function UnsubscribePage() {
  const { token } = useSearch({ from: '/unsubscribe' })
  const [status, setStatus] = useState<Status>('loading')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (!token) {
      setStatus('invalid')
      return
    }
    fetch(`/email/unsubscribe?token=${encodeURIComponent(token)}`)
      .then((r) => r.json())
      .then((data) => {
        if (data?.valid) setStatus('ready')
        else if (data?.reason === 'already_unsubscribed') setStatus('already')
        else setStatus('invalid')
      })
      .catch(() => setStatus('error'))
  }, [token])

  const handleConfirm = async () => {
    if (!token) return
    setSubmitting(true)
    try {
      const res = await fetch('/email/unsubscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      })
      const data = await res.json()
      if (data?.success) setStatus('done')
      else if (data?.reason === 'already_unsubscribed') setStatus('already')
      else setStatus('error')
    } catch {
      setStatus('error')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen grid place-items-center bg-background px-4 py-16">
      <div className="w-full max-w-md rounded-2xl border border-hairline bg-card p-8 shadow-card">
        <h1 className="text-2xl font-bold text-ink">Unsubscribe</h1>

        {status === 'loading' && (
          <p className="mt-4 text-ink-soft">Checking your link…</p>
        )}

        {status === 'ready' && (
          <>
            <p className="mt-4 text-ink-soft">
              Click below to unsubscribe from emails from qtwebdesign.org.
            </p>
            <button
              onClick={handleConfirm}
              disabled={submitting}
              className="mt-6 w-full rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-elegant transition-transform hover:scale-[1.02] disabled:opacity-60"
            >
              {submitting ? 'Unsubscribing…' : 'Confirm unsubscribe'}
            </button>
          </>
        )}

        {status === 'done' && (
          <p className="mt-4 text-ink-soft">
            You've been unsubscribed. You won't receive further emails from us.
          </p>
        )}

        {status === 'already' && (
          <p className="mt-4 text-ink-soft">
            This email is already unsubscribed. No further action needed.
          </p>
        )}

        {status === 'invalid' && (
          <p className="mt-4 text-ink-soft">
            This unsubscribe link is invalid or has expired.
          </p>
        )}

        {status === 'error' && (
          <p className="mt-4 text-destructive">
            Something went wrong. Please try again later.
          </p>
        )}
      </div>
    </main>
  )
}
