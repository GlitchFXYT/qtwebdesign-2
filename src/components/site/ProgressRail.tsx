import { useEffect, useState } from "react";

interface Section {
  id: string;
  label: string;
}

export function ProgressRail({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState(sections[0]?.id);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);

      let current = sections[0]?.id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top < 200) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);

  return (
    <>
      {/* mobile top progress bar */}
      <div className="fixed inset-x-0 top-16 z-40 h-0.5 bg-hairline/50 lg:hidden">
        <div
          className="h-full bg-gradient-brand transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* desktop rail */}
      <div className="pointer-events-none fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
        <div className="pointer-events-auto relative flex flex-col gap-3 rounded-full border border-hairline bg-background/70 px-2 py-4 backdrop-blur-md">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="group relative flex items-center justify-end gap-3"
            >
              <span
                className={`pointer-events-none absolute right-7 whitespace-nowrap rounded-md bg-ink px-2 py-1 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100`}
              >
                {s.label}
              </span>
              <span
                className={`h-2 w-2 rounded-full transition-all ${
                  active === s.id
                    ? "scale-150 bg-gradient-brand"
                    : "bg-hairline group-hover:bg-ink-soft"
                }`}
              />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
