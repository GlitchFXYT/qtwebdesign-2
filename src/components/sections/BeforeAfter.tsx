import { useRef, useState } from "react";
import { SectionHeader } from "@/components/site/Reveal";
import before from "@/assets/before.jpg";
import after from "@/assets/after.jpg";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromEvent = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(r.width, clientX - r.left));
    setPos((x / r.width) * 100);
  };

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Before & After"
          title={<>Drag to reveal the <span className="text-gradient">transformation</span></>}
          description="Perfect for service businesses that need to show off their craft."
        />

        <div className="mt-12">
          <div
            ref={ref}
            className="relative mx-auto aspect-[3/2] max-w-4xl overflow-hidden rounded-2xl border border-hairline shadow-card select-none"
            onMouseDown={(e) => { dragging.current = true; updateFromEvent(e.clientX); }}
            onMouseMove={(e) => dragging.current && updateFromEvent(e.clientX)}
            onMouseUp={() => (dragging.current = false)}
            onMouseLeave={() => (dragging.current = false)}
            onTouchStart={(e) => { dragging.current = true; updateFromEvent(e.touches[0].clientX); }}
            onTouchMove={(e) => updateFromEvent(e.touches[0].clientX)}
          >
            <img src={after} alt="After" className="h-full w-full object-cover" />
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${pos}%` }}
            >
              <img
                src={before}
                alt="Before"
                className="h-full object-cover"
                style={{ width: ref.current?.getBoundingClientRect().width ?? 800, maxWidth: "none" }}
              />
            </div>
            <span className="absolute left-4 top-4 rounded-full bg-ink/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur">Before</span>
            <span className="absolute right-4 top-4 rounded-full bg-gradient-brand px-3 py-1 text-xs font-semibold text-white">After</span>

            <div
              className="absolute inset-y-0 z-10 w-1 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.05)]"
              style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
            >
              <div className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white shadow-elegant">
                <div className="flex gap-0.5">
                  <span className="h-3 w-0.5 rounded bg-ink" />
                  <span className="h-3 w-0.5 rounded bg-ink" />
                </div>
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-ink-soft">Tip: click & drag the slider</p>
        </div>
      </div>
    </section>
  );
}
