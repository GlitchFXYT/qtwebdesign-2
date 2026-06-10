import { Check } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/site/Reveal";

const tiers = [
  {
    name: "Starter",
    price: 119,
    desc: "Perfect for new businesses that need to look the part fast.",
    features: ["5 pages", "Mobile-first design", "Contact form", "Basic SEO", "30-day support"],
  },
  {
    name: "Growth",
    price: 279,
    desc: "For service businesses ready to convert traffic into bookings.",
    features: ["12 pages", "CMS & blog", "Booking integration", "Advanced SEO + analytics", "90-day support", "Performance optimisation"],
    featured: true,
  },
  {
    name: "Scale",
    price: 599,
    desc: "Bespoke design and engineering for serious operators.",
    features: ["Unlimited pages", "Custom integrations", "Multi-location support", "A/B testing setup", "Dedicated PM", "12-month support"],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Pricing"
          title={<>Transparent care plans — <span className="text-gradient">start, scale, switch</span></>}
          description="One-time builds available too. Care plans bundle hosting, edits and improvements."
        />

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
                  <span className="font-display text-5xl font-bold tracking-tight">${t.price}</span>
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

