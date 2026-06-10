import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 240, suffix: "+", label: "Sites Launched" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 3.2, suffix: "x", label: "Avg. Conversion Lift" },
  { value: 12, suffix: " yrs", label: "Building on the Web" },
];

export function Stats() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 bg-gradient-brand-soft" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          const dur = 1400;
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(value * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  const display = value % 1 === 0 ? Math.round(n).toString() : n.toFixed(1);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        <span className="text-gradient">{display}</span>
        <span className="text-ink">{suffix}</span>
      </div>
      <p className="mt-2 text-sm font-medium text-ink-soft">{label}</p>
    </div>
  );
}
