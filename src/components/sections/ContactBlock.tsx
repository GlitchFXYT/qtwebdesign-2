import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Check, CalendarIcon, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { Reveal, SectionHeader } from "@/components/site/Reveal";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export function ContactBlock() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState<Date | undefined>();
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/public/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          subject,
          preferredDate: date ? format(date, "yyyy-MM-dd") : "",
          message,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.success) {
        setErrorMsg(data?.error || "Could not send. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("sent");
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
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
          <Reveal>
            <div className="space-y-6 rounded-2xl border border-hairline bg-card p-8 shadow-card">
              <ContactRow icon={Mail} label="Email" value="[Email goes here]" />
              <ContactRow icon={Phone} label="Phone" value="(123) 456-7890" />
              <ContactRow icon={MapPin} label="ADDRESS" value="[Where are you located?]" />

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

          <Reveal delay={0.05}>
            <form
              onSubmit={onSubmit}
              className="grid gap-5 rounded-2xl border border-hairline bg-card p-8 shadow-card"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" placeholder="Alex Rivera" value={name} onChange={setName} required />
                <Field label="PHONE NUMBER" placeholder="555-010-2200" value={phone} onChange={setPhone} />
              </div>
              <Field label="Email" type="email" placeholder="alex@apex.com" value={email} onChange={setEmail} required />
              <div className="grid gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-ink-soft">SUBJECT</label>
                <input
                  type="text"
                  placeholder="What's this about?"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="rounded-xl border border-hairline bg-background px-4 py-2.5 text-sm outline-none transition focus:border-brand-violet"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-ink-soft">Preferred Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className={cn(
                        "inline-flex items-center gap-2 rounded-xl border border-hairline bg-background px-4 py-2.5 text-left text-sm outline-none transition focus:border-brand-violet",
                        !date && "text-ink-soft",
                      )}
                    >
                      <CalendarIcon className="h-4 w-4" />
                      {date ? format(date, "PPP") : "Pick a date"}
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus className={cn("p-3 pointer-events-auto")} />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="grid gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-ink-soft">What can we help you with?</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Requests, Times, Details…"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="resize-none rounded-xl border border-hairline bg-background px-4 py-2.5 text-sm outline-none focus:border-brand-violet"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting" || status === "sent"}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-elegant transition-transform hover:scale-[1.02] disabled:opacity-70"
              >
                {status === "submitting" ? (
                  <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
                ) : status === "sent" ? (
                  <><Check className="h-4 w-4" /> Message sent — we'll be in touch</>
                ) : (
                  "Send message"
                )}
              </button>
              {status === "error" && (
                <p className="text-center text-xs text-destructive">{errorMsg}</p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div className="grid gap-2">
      <label className="text-xs font-semibold uppercase tracking-wider text-ink-soft">{label}</label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
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
