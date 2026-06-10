import { useEffect, useState } from "react";
import { ArrowRight, Phone, Star, MapPin } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/site/Reveal";
import roof from "@/assets/industry-roofing.jpg";
import lawn from "@/assets/industry-landscaping.jpg";
import pressure from "@/assets/industry-pressure.jpg";
import hvac from "@/assets/industry-hvac.jpg";
import detail from "@/assets/industry-detailing.jpg";
import plumb from "@/assets/industry-plumbing.jpg";
import re from "@/assets/industry-realestate.jpg";
import con from "@/assets/industry-construction.jpg";

interface Industry {
  id: string;
  name: string;
  brand: string;
  tagline: string;
  cta: string;
  hue: string; // gradient hue
  img: string;
  services: string[];
  review: { who: string; text: string };
}

export const industries: Industry[] = [
  { id: "roofing", name: "Roofing", brand: "Roofing", tagline: "Roofs that outlast the weather.", cta: "Schedule free inspection", hue: "from-orange-500 to-red-500", img: roof, services: ["Asphalt Shingles", "Metal Roofing", "Storm Damage", "Inspections"], review: { who: "Mark, Atlanta GA", text: "Crew finished a full re-roof in 2 days. Cleaner than we left the yard." } },
  { id: "landscaping", name: "Landscaping", brand: "Landscaping", tagline: "Yards the whole street notices.", cta: "Get free design quote", hue: "from-emerald-500 to-teal-500", img: lawn, services: ["Lawn Care", "Hardscaping", "Garden Design", "Tree Service"], review: { who: "Linda, Chicago IL", text: "They turned a patch of dirt into the nicest yard on our block." } },
  { id: "pressure", name: "Pressure Washing", brand: "Pressure Washing", tagline: "Restore what time and weather took.", cta: "Book a wash", hue: "from-sky-500 to-blue-600", img: pressure, services: ["Driveways", "House Soft Wash", "Decks & Patios", "Commercial"], review: { who: "Diane, Tampa FL", text: "The driveway looks brand new. Wish I'd called them years ago." } },
  { id: "hvac", name: "HVAC", brand: "HVAC", tagline: "Comfort, on call. 24/7.", cta: "Request service today", hue: "from-blue-500 to-indigo-600", img: hvac, services: ["AC Repair", "Heating", "Heat Pumps", "Maintenance Plans"], review: { who: "Carlos, Phoenix AZ", text: "Same-day install in 105° heat. Lifesavers." } },
  { id: "detailing", name: "Mobile Detailing", brand: "Car Detailing", tagline: "Showroom shine — in your driveway.", cta: "Book mobile detail", hue: "from-zinc-700 to-zinc-900", img: detail, services: ["Full Detail", "Paint Correction", "Ceramic Coating", "Interior Deep Clean"], review: { who: "Jamie, Austin TX", text: "Car hasn't looked this good since I drove it off the lot." } },
  { id: "plumbing", name: "Plumbing", brand: "Plumbing", tagline: "Fix it once. Fix it right.", cta: "Get a plumber out", hue: "from-cyan-500 to-blue-600", img: plumb, services: ["Emergency Repair", "Water Heaters", "Drain Cleaning", "Remodels"], review: { who: "Sarah, Denver CO", text: "Showed up in 40 min on a Sunday. Fair price. Done." } },
  { id: "realestate", name: "Real Estate", brand: "Real Estate Showcase", tagline: "Find the home. Make the move.", cta: "Browse listings", hue: "from-amber-500 to-pink-600", img: re, services: ["Listings", "Home Valuation", "Buyer Services", "Investment"], review: { who: "Aaron & Mia, Seattle WA", text: "Closed in 32 days, over asking. They made it look easy." } },
  { id: "construction", name: "Construction", brand: "Contractors & Construction", tagline: "Build to last. Build on time.", cta: "Request project quote", hue: "from-orange-500 to-amber-600", img: con, services: ["New Builds", "Renovations", "Commercial", "Design-Build"], review: { who: "Westside Dental", text: "Came in under budget on a 6,000 sq ft buildout. Refreshing." } },
];

export function Industries() {
  const [active, setActive] = useState(industries[0].id);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive((visible.target as HTMLElement).id);
      },
      { threshold: [0.25, 0.5] }
    );
    industries.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <section id="industries" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Industry Showcase"
          title={<>Eight industries. <span className="text-gradient">Eight realistic site concepts</span>.</>}
          description="Each block is a mini-website tuned for that industry — hero, services, gallery, reviews and CTA."
        />

        {/* breadcrumb-style sticky industry tab bar */}
        <div className="sticky top-16 z-30 -mx-4 mt-12 border-y border-hairline bg-background/85 px-4 py-3 backdrop-blur-xl sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto">
            <span className="shrink-0 text-xs text-ink-soft">Industries /</span>
            {industries.map((ind) => (
              <a
                key={ind.id}
                href={`#${ind.id}`}
                className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition ${
                  active === ind.id
                    ? "bg-gradient-brand text-white shadow-elegant"
                    : "text-ink-soft hover:bg-secondary hover:text-ink"
                }`}
              >
                {ind.name}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 space-y-20">
          {industries.map((ind) => (
            <IndustryBlock key={ind.id} data={ind} />
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustryBlock({ data }: { data: Industry }) {
  return (
    <Reveal>
      <article id={data.id} className="scroll-mt-32 overflow-hidden rounded-3xl border border-hairline bg-card shadow-card">
        {/* Hero */}
        <div className={`relative bg-gradient-to-br ${data.hue} p-8 text-white sm:p-12`}>
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest backdrop-blur">
                {data.name}
              </span>
              <h3 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">{data.brand}</h3>
              <p className="mt-3 text-lg text-white/90">{data.tagline}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink shadow-elegant transition hover:scale-[1.03]">
                  {data.cta} <ArrowRight className="h-4 w-4" />
                </button>
                <button className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold backdrop-blur">
                  <Phone className="h-3.5 w-3.5" /> (555) 010-2200
                </button>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/20 shadow-elegant">
              <img src={data.img} alt={data.brand} loading="lazy" className="aspect-[4/3] w-full object-cover" />
            </div>
          </div>
        </div>

        {/* Services + review */}
        <div className="grid gap-8 p-8 md:grid-cols-3 sm:p-12">
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-ink-soft">Services</h4>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {data.services.map((s) => (
                <div key={s} className="rounded-xl border border-hairline bg-background p-4">
                  <p className="font-semibold">{s}</p>
                  <p className="mt-1 text-xs text-ink-soft">Industry-standard pricing, transparent quotes.</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-ink-soft">
              <MapPin className="h-4 w-4" /> Serving the metro area + 30 mi radius
            </div>
          </div>
          <div className="rounded-xl bg-surface-2 p-6">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="mt-3 text-sm italic text-ink">"{data.review.text}"</p>
            <p className="mt-3 text-xs font-semibold text-ink-soft">— {data.review.who}</p>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
