import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Check } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/site/Reveal";

export function ContactBlock() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Get in Touch"
          title={<>Schedule an <span className="text-gradient">Appointment</span></>}
          description="The more we know, the more useful our first reply will be. We respond inside one business day."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Info */}
          <Reveal>
            <div className="space-y-6 rounded-2xl border border-hairline bg-card p-8 shadow-card">
              <ContactRow icon={Mail} label="Email" value="hello@qtwebco.com" />
              <ContactRow icon={Phone} label="Phone" value="(555) 010-2200" />
              <ContactRow icon={MapPin} label="Studio" value="Charlotte, NC · Remote-first" />

              <div className="mt-6 overflow-hidden rounded-xl border border-hairline">
                <iframe
                  title="Map"
                  loading="lazy"
                  className="h-56 w-full"
                  src="https://www.google.com/maps?q=Charlotte%2C+NC&output=embed"
                />
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.05}>
            <form
              onSubmit={onSubmit}
              className="grid gap-5 rounded-2xl border border-hairline bg-card p-8 shadow-card"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" placeholder="Alex Rivera" />
                <Field label="PHONE NUMBER" placeholder="555-010-2200" />
              </div>
              <Field label="Email" type="email" placeholder="alex@apex.com" />
              <div className="grid gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-ink-soft">SUBJECT</label>
                <select className="rounded-xl border border-hairline bg-background px-4 py-2.5 text-sm outline-none focus:border-brand-violet">
                  <option>New website build</option>
                  <option>Redesign of existing site</option>
                  <option>Landing page</option>
                  <option>Ongoing care plan</option>
                </select>
              </div>
              <div className="grid gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-ink-soft">What can we help you with?</label>
                <textarea
                  rows={4}
                  placeholder="Goals, timeline, anything we should know…"
                  className="resize-none rounded-xl border border-hairline bg-background px-4 py-2.5 text-sm outline-none focus:border-brand-violet"
                />
              </div>

              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-elegant transition-transform hover:scale-[1.02]"
              >
                {sent ? (
                  <>
                    <Check className="h-4 w-4" /> Message sent — we'll be in touch
                  </>
                ) : (
                  "Send message"
                )}
              </button>
              <p className="text-center text-xs text-ink-soft">
                This is a demo form. No data is stored.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, type = "text", placeholder }: { label: string; type?: string; placeholder?: string }) {
  return (
    <div className="grid gap-2">
      <label className="text-xs font-semibold uppercase tracking-wider text-ink-soft">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="rounded-xl border border-hairline bg-background px-4 py-2.5 text-sm outline-none transition focus:border-brand-violet"
      />
    </div>
  );
}

function ContactRow({ icon: Icon, label, value }: { icon: typeof Mail; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-brand text-white shadow-elegant">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-ink-soft">{label}</p>
        <p className="mt-0.5 font-semibold">{value}</p>
      </div>
    </div>
  );
}
