import { useState } from "react";
import { Reveal, SectionHeader } from "@/components/site/Reveal";
import { Menu, Search, ShoppingBag } from "lucide-react";

const variants = ["Minimal", "Centered Logo", "Mega Menu", "Sidebar"] as const;
type Variant = (typeof variants)[number];

export function NavStyles() {
  const [active, setActive] = useState<Variant>("Minimal");

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Navigation"
          title={<>Pick the <span className="text-gradient">menu style</span> that fits your brand</>}
          description="Four production-ready navigation patterns. Hover, click and try them — each is fully responsive."
        />

        <div className="mt-12 flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-1 rounded-full border border-hairline bg-background p-1">
            {variants.map((v) => (
              <button
                key={v}
                onClick={() => setActive(v)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  active === v
                    ? "bg-gradient-brand text-white shadow-elegant"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="mt-10 overflow-hidden rounded-2xl border border-hairline bg-card shadow-card">
            <Preview variant={active} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Preview({ variant }: { variant: Variant }) {
  if (variant === "Minimal") {
    return (
      <div className="border-b border-hairline px-6 py-4">
        <div className="flex items-center justify-between">
          <span className="font-display text-base font-bold">[Brand Here]</span>
          <div className="hidden gap-8 md:flex">
            {["Work", "Services", "About", "Contact"].map((l) => (
              <a key={l} className="text-sm text-ink-soft hover:text-ink" href="#">{l}</a>
            ))}
          </div>
          <button className="rounded-full bg-ink px-4 py-1.5 text-xs font-semibold text-white">Get Quote</button>
        </div>
        <FakeBody />
      </div>
    );
  }
  if (variant === "Centered Logo") {
    return (
      <div className="border-b border-hairline px-6 py-4">
        <div className="grid grid-cols-3 items-center">
          <div className="hidden gap-6 md:flex">
            <a className="text-sm text-ink-soft hover:text-ink">Services</a>
            <a className="text-sm text-ink-soft hover:text-ink">Portfolio</a>
          </div>
          <span className="justify-self-center font-display text-xl font-bold tracking-wider">[Brand Here]</span>
          <div className="hidden justify-end gap-6 md:flex">
            <a className="text-sm text-ink-soft hover:text-ink">Journal</a>
            <a className="text-sm text-ink-soft hover:text-ink">Contact</a>
          </div>
        </div>
        <FakeBody />
      </div>
    );
  }
  if (variant === "Mega Menu") {
    return (
      <div className="px-6 py-4">
        <div className="flex items-center justify-between border-b border-hairline pb-4">
          <span className="font-display text-base font-bold">megaco</span>
          <div className="hidden items-center gap-6 md:flex">
            {["Solutions", "Industries", "Resources"].map((l) => (
              <span key={l} className="text-sm text-ink-soft">{l}</span>
            ))}
            <Search className="h-4 w-4 text-ink-soft" />
          </div>
        </div>
        <div className="grid gap-6 py-6 sm:grid-cols-3">
          {["Roofing", "HVAC", "Plumbing"].map((title) => (
            <div key={title} className="rounded-xl bg-surface-2 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-soft">Industry</p>
              <p className="mt-1 font-semibold">{title}</p>
              <p className="mt-1 text-xs text-ink-soft">Templates, pages and copy ready to ship.</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-[200px_1fr]">
      <aside className="border-r border-hairline bg-surface-2 p-4">
        <span className="font-display text-sm font-bold">sidebar.app</span>
        <nav className="mt-6 space-y-1">
          {["Dashboard", "Projects", "Clients", "Reports", "Settings"].map((l, i) => (
            <a key={l} className={`block rounded-md px-3 py-2 text-sm ${i === 1 ? "bg-gradient-brand text-white" : "text-ink-soft hover:bg-background"}`}>{l}</a>
          ))}
        </nav>
      </aside>
      <div className="p-6"><FakeBody /></div>
    </div>
  );
}

function FakeBody() {
  return (
    <div className="grid gap-3 pt-6 sm:grid-cols-3">
      <div className="h-24 rounded-lg bg-surface-2" />
      <div className="h-24 rounded-lg bg-surface-2" />
      <div className="h-24 rounded-lg bg-surface-2" />
    </div>
  );
}

// silence unused
void Menu; void ShoppingBag;
