import {
  LayoutGrid, Image as ImageIcon, MessagesSquare, ListChecks,
  Tag, Users, Activity, Workflow, Map, Send,
} from "lucide-react";
import { Reveal, SectionHeader } from "@/components/site/Reveal";

const features = [
  { icon: LayoutGrid, title: "Section Styles", body: "Split, asymmetric, bento, full-bleed — composable building blocks." },
  { icon: ImageIcon, title: "Image Galleries", body: "Filterable grids with elegant lightbox & keyboard nav." },
  { icon: MessagesSquare, title: "Testimonials", body: "Carousel, masonry, featured-quote and review card variants." },
  { icon: ListChecks, title: "FAQ Accordions", body: "Animated disclosure with deep-link support." },
  { icon: Tag, title: "Pricing Tables", body: "3-tier comparison with monthly / annual toggle." },
  { icon: Users, title: "Team Layouts", body: "Cards, mosaic, leadership-first — pick your tone." },
  { icon: Activity, title: "Stats & Metrics", body: "Scroll-triggered counters that build trust fast." },
  { icon: Workflow, title: "Process Timelines", body: "Vertical animated steps your prospects can follow." },
  { icon: Map, title: "Maps & Locations", body: "Embedded map blocks with custom-styled markers." },
  { icon: Send, title: "Contact Forms", body: "Inline validation, success states, spam-protected." },
];

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Feature Library"
          title={<>Every block you'd want, <span className="text-gradient">already designed</span>.</>}
          description="Mix and match these proven patterns. We tune each one to your brand and content."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.04} className={i === 0 ? "lg:row-span-2" : ""}>
              <div
                className={`group relative h-full overflow-hidden rounded-2xl border border-hairline bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-card ${
                  i === 0 ? "bg-gradient-brand text-white" : ""
                }`}
              >
                <div
                  className={`grid h-10 w-10 place-items-center rounded-lg ${
                    i === 0 ? "bg-white/15 text-white" : "bg-gradient-brand-soft text-brand-violet"
                  }`}
                >
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className={`mt-4 text-base font-semibold ${i === 0 ? "text-white" : ""}`}>
                  {f.title}
                </h3>
                <p className={`mt-2 text-sm ${i === 0 ? "text-white/85" : "text-ink-soft"}`}>
                  {f.body}
                </p>
                {i === 0 && (
                  <p className="mt-8 text-xs uppercase tracking-widest text-white/70">
                    20+ patterns in our library
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
