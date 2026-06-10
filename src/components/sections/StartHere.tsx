import { Briefcase, Layers, MousePointerClick, ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/site/Reveal";

const cards = [
  {
    icon: Briefcase,
    title: "Have a service to offer?",
    body: "See realistic concepts for roofers, plumbers, HVAC and more — booking-ready and conversion-tuned.",
    href: "#industries",
    cta: "Browse industries",
  },
  {
    icon: Layers,
    title: "Want to see layouts & sections?",
    body: "Headers, hero styles, pricing tables, team grids — copy the structure of any block you love.",
    href: "#features",
    cta: "Explore layouts",
  },
  {
    icon: MousePointerClick,
    title: "Explore interactive features",
    body: "Filterable galleries, before/after sliders, FAQ sections and contact forms — try them all.",
    href: "#interactive",
    cta: "Try the demos",
  },
];

export function StartHere() {
  return (
    <section id="start-here" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Start Here"
          title={<>What do you <span className="text-gradient">envision</span> in your website?</>}
          description={"This site is a guided gallery, think of it like a menu. \nEvery feature you see here is a possibility for your own website."}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <a
                href={c.href}
                className="group relative block h-full overflow-hidden rounded-2xl border border-hairline bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-elegant"
              >
                <div className="absolute inset-0 bg-gradient-brand-soft opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-white shadow-elegant">
                    <c.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{c.body}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gradient">
                    {c.cta}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
