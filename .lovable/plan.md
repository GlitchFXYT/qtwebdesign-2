## Goal

Make the contact form actually deliver. On submit it will:
1. Save the submission to the database (so nothing is lost).
2. Email **qtwebsitedesign@gmail.com** with the submission details.
3. Send the visitor a confirmation email thanking them and recapping what they sent.

## Prerequisites (one-time setup)

These must happen before email can send. They're quick but require your input:

1. **Enable Lovable Cloud** — provides the database, secure backend, and the built-in email system. I'll trigger this; no account creation on your end.
2. **Set up an email sender domain** — emails need to come from a domain you own (e.g. `notify@qtwebdesign.org`). I'll open the setup dialog; you'll add a couple of DNS records at your domain registrar. Until DNS verifies, emails queue up and start flowing automatically once it passes.

   - If you'd prefer the emails come *from* Gmail directly instead of your domain, that's a different path (Gmail connector) — let me know and I'll adjust. Sending from your own domain is recommended for deliverability and branding.

## What I'll build

### Database
- `contact_submissions` table with: `id`, `name`, `email`, `phone`, `subject`, `preferred_date`, `message`, `created_at`.
- RLS enabled. No public read access. Inserts happen server-side via service role (the form posts to a server route, not directly to the DB), so the form works for anonymous visitors without exposing the table.

### Email templates (React Email, brand-styled)
- `contact-notification.tsx` — sent to qtwebsitedesign@gmail.com with all submission fields.
- `contact-confirmation.tsx` — sent to the visitor, thanking them and confirming we'll respond within one business day.

### Server route
- `POST /api/public/contact` — public endpoint (no auth required, since this is a public form):
  1. Validate input with Zod (required fields, email format, length limits).
  2. Insert into `contact_submissions`.
  3. Enqueue notification email to you.
  4. Enqueue confirmation email to the visitor.
  5. Return success.
- Uses idempotency keys derived from the submission ID so retries don't double-send.

### Frontend (`ContactBlock.tsx`)
- Wire form fields to React state (Name, Phone, Email, Subject, Preferred Date, Message).
- On submit: POST to `/api/public/contact`, show success state on 200, show inline error on failure.
- Keeps the existing "Message sent — we'll be in touch" confirmation UI.

## What you'll see in the inbox

**To you (qtwebsitedesign@gmail.com):**
> Subject: New contact form submission from [Name]
> Name, email, phone, subject, preferred date, message — all formatted cleanly.

**To the visitor:**
> Subject: We received your message
> Thanks for reaching out. Brand-styled confirmation with a recap.

## Out of scope (ask if you want any of these)

- Spam protection (hCaptcha/Turnstile) — recommended once live if you start seeing junk.
- Admin dashboard to view submissions in-app — currently you'd query the DB directly via Lovable Cloud.
- Auto-reply scheduling, CRM forwarding, Slack notifications.

Ready to start with enabling Lovable Cloud and the email domain setup when you approve.