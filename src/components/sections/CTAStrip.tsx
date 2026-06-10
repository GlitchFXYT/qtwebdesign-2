import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export function CTAStrip() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-ink p-10 text-white sm:p-16">
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-brand-purple/40 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-brand-blue/40 blur-3xl" />

            <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-balance font-display text-3xl font-bold sm:text-4xl md:text-5xl">
                  Ready to build a site that <span className="text-gradient">actually works</span>?
                </h2>
                <p className="mt-4 max-w-md text-white/80">
                  Tell us about your business. We'll send back a free strategy outline within 48 hours — no obligations.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-start gap-3 md:justify-end">
                <a href="/contact" className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold shadow-elegant transition-transform hover:scale-105">
                  Start a project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="#pricing" className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold backdrop-blur">
                  See pricing
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
