import { Reveal, SectionHeader } from "@/components/site/Reveal";
import { Linkedin, Twitter } from "lucide-react";

const team = [
  { name: "Quinn Tate", role: "Founder & Design Lead", initials: "QT" },
  { name: "Theo Park", role: "Engineering Lead", initials: "TP" },
  { name: "Marisol Vega", role: "Brand Director", initials: "MV" },
  { name: "Sam Okafor", role: "Client Strategy", initials: "SO" },
];

export function Team() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="The Studio"
          title={<>A small, senior team — <span className="text-gradient">no hand-offs</span></>}
          description="You'll work directly with the people designing and shipping your site. No middlemen, no juniors learning on your dime."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05}>
              <div className="group relative overflow-hidden rounded-2xl border border-hairline bg-card">
                <div className="relative aspect-square bg-gradient-brand-soft">
                  <div className="absolute inset-0 grid place-items-center font-display text-5xl font-bold text-brand-violet/70">
                    {p.initials}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-ink/90 to-transparent p-4 transition-transform duration-300 group-hover:translate-y-0">
                    <div className="flex justify-end gap-2">
                      <a className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white"><Linkedin className="h-3.5 w-3.5" /></a>
                      <a className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white"><Twitter className="h-3.5 w-3.5" /></a>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="font-semibold">{p.name}</p>
                  <p className="mt-0.5 text-xs text-ink-soft">{p.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
