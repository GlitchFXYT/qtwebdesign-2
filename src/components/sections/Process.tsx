import { Reveal, SectionHeader } from "@/components/site/Reveal";
import { Search, Pencil, Code, Rocket, LifeBuoy } from "lucide-react";

const steps = [
  { icon: Search, title: "Discovery", body: "30-minute call. We learn your business, audience and what success looks like." },
  { icon: Pencil, title: "Design", body: "Two directions in ~7 days. You pick one, we refine it to perfection." },
  { icon: Code, title: "Build", body: "Pixel-perfect development with performance, SEO and accessibility baked in." },
  { icon: Rocket, title: "Launch", body: "We deploy, verify everything, train you on edits and hand over the keys." },
  { icon: LifeBuoy, title: "Support", body: "Ongoing care plans keep your site fast, safe and improving over time." },
];

export function Process() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Process"
          title={<>From kickoff to launch in <span className="text-gradient">4–6 weeks</span></>}
        />

        <div className="relative mt-16 mx-auto max-w-3xl">
          <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-brand-blue via-brand-violet to-brand-purple" />
          <ol className="space-y-10">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <li className="relative pl-20">
                  <div className="absolute left-0 top-0 grid h-12 w-12 place-items-center rounded-full bg-background ring-4 ring-background">
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-brand text-white shadow-elegant">
                      <s.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="rounded-2xl border border-hairline bg-card p-6 shadow-card">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold uppercase tracking-widest text-ink-soft">
                        Step {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-1 text-xl font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm text-ink-soft">{s.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
