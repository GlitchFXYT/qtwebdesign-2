import { useState } from "react";
import { X } from "lucide-react";
import { SectionHeader } from "@/components/site/Reveal";
import roof from "@/assets/industry-roofing.jpg";
import lawn from "@/assets/industry-landscaping.jpg";
import pressure from "@/assets/industry-pressure.jpg";
import hvac from "@/assets/industry-hvac.jpg";
import detail from "@/assets/industry-detailing.jpg";
import plumb from "@/assets/industry-plumbing.jpg";
import re from "@/assets/industry-realestate.jpg";
import con from "@/assets/industry-construction.jpg";

const items = [
  { src: roof, tag: "Roofing", title: "Sunset shingle replacement" },
  { src: lawn, tag: "Landscaping", title: "Estate lawn refresh" },
  { src: pressure, tag: "Pressure Washing", title: "Driveway transformation" },
  { src: hvac, tag: "HVAC", title: "Heat-pump install" },
  { src: detail, tag: "Detailing", title: "Mobile paint correction" },
  { src: plumb, tag: "Plumbing", title: "Kitchen fixture upgrade" },
  { src: re, tag: "Real Estate", title: "Twilight listing photoshoot" },
  { src: con, tag: "Construction", title: "Mid-rise residential build" },
];

const tags = ["All", ...Array.from(new Set(items.map((i) => i.tag)))];

export function Gallery() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState<number | null>(null);

  const filtered = filter === "All" ? items : items.filter((i) => i.tag === filter);

  return (
    <section id="interactive" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Interactive Gallery"
          title={<>Filterable portfolio with <span className="text-gradient">lightbox</span></>}
          description="Tap any image. The whole gallery is keyboard-navigable and lazy-loaded."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                filter === t
                  ? "bg-gradient-brand text-white shadow-elegant"
                  : "border border-hairline bg-background text-ink-soft hover:text-ink"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((it, i) => (
            <button
              key={it.title}
              onClick={() => setOpen(items.indexOf(it))}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-hairline bg-surface-2"
            >
              <img
                src={it.src}
                alt={it.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 translate-y-4 p-4 text-left text-white opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-white/80">{it.tag}</p>
                <p className="text-sm font-semibold">{it.title}</p>
              </div>
              <span className="sr-only">{it.title}</span>
              {/* unused i suppression */}
              <span className="hidden">{i}</span>
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-ink/90 p-4 backdrop-blur-sm"
          onClick={() => setOpen(null)}
        >
          <button
            onClick={() => setOpen(null)}
            className="absolute right-6 top-6 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={items[open].src}
            alt={items[open].title}
            className="max-h-[85vh] max-w-[90vw] rounded-2xl shadow-elegant"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
