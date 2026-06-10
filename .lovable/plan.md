## Problem

Your contact form is saving submissions correctly, but all 4 emails are stuck with status `pending` in the queue. The reason: the scheduled job that processes the email queue every 5 seconds does not exist in the database (`cron.job` is empty), so nothing is actually sending the queued emails to Mailgun.

## Fix

1. Re-run the email infrastructure setup. This is idempotent — it re-creates the `process-email-queue` pg_cron job and refreshes the Vault secret used to call it, without touching your templates, tables, or submissions.
2. Wait ~10 seconds for the cron tick, then re-check `email_send_log`. The 4 currently-pending emails should flip to `sent` (auth-email TTL is 15 min, app-email TTL is 60 min — the older `quinny bear` test from 23:19 is borderline and may expire to DLQ; the 23:24 ones will go through).
3. Submit one fresh test from the contact form and confirm the notification arrives at `qtwebsitedesign@gmail.com`.
4. After your next Publish, the same setup runs against the Live backend so production also has the cron job.

No code changes required.