import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Industries } from "@/components/sections/Industries";
import { CTAStrip } from "@/components/sections/CTAStrip";

export const Route = createFileRoute("/showcase")({
  head: () => ({
    meta: [
      { title: "Industry Showcase — Q&T Web Co." },
      { name: "description", content: "Realistic website concepts for roofing, HVAC, plumbing, landscaping, real estate and more." },
      { property: "og:title", content: "Industry Showcase — Q&T Web Co." },
      { property: "og:description", content: "Realistic website concepts for roofing, HVAC, plumbing, landscaping, real estate and more." },
    ],
  }),
  component: ShowcasePage,
});

function ShowcasePage() {
  return (
    <>
      <Nav />
      <main className="pt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-xs text-ink-soft">
            <Link to="/" className="hover:text-ink">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="font-medium text-ink">Industry Showcase</span>
          </nav>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold sm:text-5xl">
            Industry <span className="text-gradient">showcase</span>
          </h1>
          <p className="mt-3 max-w-2xl text-ink-soft">
            Eight realistic website concepts you can adapt for your own business. Scroll, or jump straight to your industry below.
          </p>
        </div>
        <Industries />
        <CTAStrip />
      </main>
      <Footer />
    </>
  );
}
