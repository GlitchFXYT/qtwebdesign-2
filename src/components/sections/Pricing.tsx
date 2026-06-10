import { useState } from "react";
import { Check } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/site/Reveal";

const tiers = [
  {
    name: "Starter",
    monthly: 149,
    annual: 119,
    desc: "Perfect for new businesses that need to look the part fast.",
    features: ["5 pages", "Mobile-first design", "Contact form", "Basic SEO", "30-day support"],
  },
  {
    name: "Growth",
    monthly: 349,
    annual: 279,
    desc: "For service businesses ready to convert traffic into bookings.",
    features: ["12 pages", "CMS & blog", "Booking integration", "Advanced SEO + analytics", "90-day support", "Performance optimisation"],
    featured: true,
  },
  {
    name: "Scale",
    monthly: 749,
    annual: 599,
    desc: "Bespoke design and engineering for serious operators.",
    features: ["Unlimited pages", "Custom integrations", "Multi-location support", "A/B testing setup", "Dedicated PM", "12-month support"],
  },
];

export function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Pricing"
          title={<>Transparent care plans — <span className="text-gradient">start, scale, switch</span></>}
          description="One-time builds available too. Care plans bundle hosting, edits and improvements."
        />

        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-full border border-hairline bg-background p-1 text-sm">
            <button
              onClick={() => setAnnual(false)}
              className={`rounded-full px-4 py-1.5 font-medium transition ${!annual ? "bg-ink text-white" : "text-ink-soft"}`}
            >Monthly</button>
            <button
              onClick={() => setAnnual(true)}
              className={`rounded-full px-4 py-1.5 font-medium transition ${annual ? "bg-gradient-brand text-white" : "text-ink-soft"}`}
            >Annual <span className="ml-1 text-[10px] opacity-90">save 20%</span></button>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <div
                className={`relative h-full rounded-2xl p-8 ${
                  t.featured
                    ? "border border-transparent bg-ink text-white shadow-elegant"
                    : "border border-hairline bg-card"
                }`}
              >
                {t.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-brand px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                    Most Popular
                  </div>
                )}
                <p className={`text-sm font-semibold ${t.featured ? "text-white/80" : "text-ink-soft"}`}>{t.name}</p>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-bold tracking-tight">${annual ? t.annual : t.monthly}</span>
                  <span className={`text-sm ${t.featured ? "text-white/70" : "text-ink-soft"}`}>/mo</span>
                </div>
                <p className={`mt-3 text-sm ${t.featured ? "text-white/80" : "text-ink-soft"}`}>{t.desc}</p>
                <a
                  href="/contact"
                  className={`mt-6 block rounded-full px-4 py-2.5 text-center text-sm font-semibold transition ${
                    t.featured
                      ? "bg-gradient-brand text-white hover:scale-[1.02]"
                      : "border border-hairline bg-background text-ink hover:bg-secondary"
                  }`}
                >
                  Get started
                </a>
                <ul className="mt-8 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${t.featured ? "text-brand-purple" : "text-brand-violet"}`} />
                      <span className={t.featured ? "text-white/90" : "text-ink"}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
