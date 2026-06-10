const logos = ["[Insert Logo]", "[Insert Logo]", "[Insert Logo]", "[Insert Logo]", "[Insert Logo]", "[Insert Logo]", "[Insert Logo]", "[Insert Logo]"];

export function LogoCloud() {
  return (
    <section className="border-y border-hairline bg-surface-2/40 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-ink-soft">
          {"\n"}
        </p>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-8">
          {logos.map((l) => (
            <div
              key={l}
              className="text-center font-display text-sm font-semibold text-ink-soft/70 transition-colors hover:text-ink"
            >
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
