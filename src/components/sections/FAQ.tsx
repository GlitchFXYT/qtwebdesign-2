import { useState } from "react";
import { Plus } from "lucide-react";
import { SectionHeader } from "@/components/site/Reveal";

const faqs = [
  { q: "How long does a typical project take?", a: "Most sites launch in 4–6 weeks from kickoff. Larger projects with custom integrations run 8–12 weeks." },
  { q: "Will I be able to edit the site myself?", a: "Yes. We hand over a friendly CMS so you can update text, images and blog posts without touching code." },
  { q: "Do you handle hosting?", a: "We host on a fast global edge network and handle SSL, backups and uptime monitoring as part of every care plan." },
  { q: "What about SEO?", a: "Every site ships with technical SEO baked in: clean markup, fast load times, structured data, sitemaps and per-page metadata." },
  { q: "Can you redesign my existing site?", a: "Absolutely. Redesigns are about 70% of our work. We'll audit your current site and recommend the right scope." },
  { q: "Do you offer payment plans?", a: "Yes. Most projects split 50% to start and 50% at launch. Care plans are billed monthly or annually." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title={<>Frequent <span className="text-gradient">questions</span></>}
        />

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-hairline overflow-hidden rounded-2xl border border-hairline bg-card">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-ink">{f.q}</span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all ${
                      isOpen ? "rotate-45 bg-gradient-brand text-white" : "bg-secondary text-ink-soft"
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-relaxed text-ink-soft">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
