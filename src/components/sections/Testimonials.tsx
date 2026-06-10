import { Star, Quote } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/site/Reveal";

const quotes = [
  { name: "Marcus Reyes", role: "Owner, Apex Roofing", body: "Our new site books jobs in its sleep. Q&T turned the phone into a furnace.", rating: 5 },
  { name: "Dana Lee", role: "GM, BlueWave HVAC", body: "Calls up 220% in the first quarter. The before/after slider sells itself.", rating: 5 },
  { name: "Priya Shah", role: "Realtor, Summit Homes", body: "Buyers spend twice as long on listings. The design just feels expensive.", rating: 5 },
  { name: "Jordan Kim", role: "Founder, Crystal Detail", body: "I sent the link to one client. Three new bookings same day. Wild.", rating: 5 },
];

export function Testimonials() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Testimonials"
          title={<>What clients say after <span className="text-gradient">launch day</span></>}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <Reveal className="lg:row-span-2">
            <div className="relative h-full overflow-hidden rounded-2xl bg-gradient-brand p-8 text-white shadow-elegant">
              <Quote className="absolute right-6 top-6 h-16 w-16 text-white/15" />
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-white text-white" />
                ))}
              </div>
              <p className="mt-6 text-2xl font-semibold leading-snug">
                "Best investment we've made in five years. The site looks like a brand twice our size,
                and the leads have followed."
              </p>
              <div className="mt-10 flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-white/20 font-bold">EM</div>
                <div>
                  <p className="text-sm font-semibold">Elena Martínez</p>
                  <p className="text-xs text-white/80">CEO, GreenScape Co.</p>
                </div>
              </div>
            </div>
          </Reveal>

          {quotes.map((q, i) => (
            <Reveal key={q.name} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-hairline bg-card p-6 shadow-card">
                <div className="flex gap-0.5">
                  {Array.from({ length: q.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink">"{q.body}"</p>
                <div className="mt-6 flex items-center gap-3 border-t border-hairline pt-4">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-brand-soft text-xs font-bold text-brand-violet">
                    {q.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{q.name}</p>
                    <p className="text-xs text-ink-soft">{q.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
