import { ArrowRight, Sparkles, Play } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Mesh blobs */}
      <div className="mesh-blob -top-32 -left-20 h-96 w-96 bg-brand-blue/40 animate-float" />
      <div
        className="mesh-blob top-20 right-0 h-[480px] w-[480px] bg-brand-purple/30 animate-float"
        style={{ animationDelay: "-3s" }}
      />
      <div
        className="mesh-blob -bottom-40 left-1/3 h-[400px] w-[400px] bg-brand-violet/30 animate-float"
        style={{ animationDelay: "-6s" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-background/60 px-4 py-1.5 text-xs font-medium text-ink-soft backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-brand-violet" />
              A living showcase of what your website could be
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 text-balance font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              Websites that <span className="text-gradient">win</span> work
              <br className="hidden sm:block" /> for your business.
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-ink-soft sm:text-xl">
              Explore a curated gallery of layouts, interactions and industry-ready concepts —
              every section is a real capability we can build for you.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#start-here"
                className="group inline-flex items-center gap-2 rounded-full btn-shimmer px-6 py-3 text-sm font-semibold text-white shadow-elegant transition-transform hover:scale-[1.03]"
              >
                Start exploring
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#industries"
                className="inline-flex items-center gap-2 rounded-full border border-hairline bg-background/80 px-6 py-3 text-sm font-semibold text-ink backdrop-blur transition-colors hover:bg-background"
              >
                <Play className="h-3.5 w-3.5" />
                See industry examples
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xs font-medium uppercase tracking-wider text-ink-soft/80">
              <span>Modern Frameworks</span>
              <span className="h-1 w-1 rounded-full bg-hairline" />
              <span>SEO-Ready</span>
              <span className="h-1 w-1 rounded-full bg-hairline" />
              <span>Mobile-First</span>
              <span className="h-1 w-1 rounded-full bg-hairline" />
              <span>Conversion-Focused</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
