import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ProgressRail } from "@/components/site/ProgressRail";
import { Hero } from "@/components/sections/Hero";
import { StartHere } from "@/components/sections/StartHere";
import { LogoCloud } from "@/components/sections/LogoCloud";
import { NavStyles } from "@/components/sections/NavStyles";
import { Features } from "@/components/sections/Features";
import { Stats } from "@/components/sections/Stats";
import { Gallery } from "@/components/sections/Gallery";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Testimonials } from "@/components/sections/Testimonials";
import { Team } from "@/components/sections/Team";
import { Process } from "@/components/sections/Process";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { Industries } from "@/components/sections/Industries";
import { CTAStrip } from "@/components/sections/CTAStrip";
import { ContactBlock } from "@/components/sections/ContactBlock";
import { BackToTop } from "@/components/sections/BackToTop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Q&T Web Co. — Premium Websites for Service Businesses" },
      { name: "description", content: "Explore a curated showcase of modern web design — layouts, interactions, industry-tailored concepts and pricing." },
      { property: "og:title", content: "Q&T Web Co. — Premium Websites for Service Businesses" },
      { property: "og:description", content: "Explore a curated showcase of modern web design — layouts, interactions, industry-tailored concepts and pricing." },
    ],
  }),
  component: Index,
});

const railSections = [
  { id: "top", label: "Top" },
  { id: "start-here", label: "Start Here" },
  { id: "features", label: "Features" },
  { id: "interactive", label: "Interactive" },
  { id: "industries", label: "Industries" },
  { id: "pricing", label: "Pricing" },
  { id: "contact", label: "Contact" },
];

function Index() {
  return (
    <>
      <Nav />
      <ProgressRail sections={railSections} />
      <BackToTop />
      <main>
        <Hero />
        <StartHere />
        <LogoCloud />
        <NavStyles />
        <Features />
        <Stats />
        <Gallery />
        <BeforeAfter />
        <Testimonials />
        <Process />
        <Team />
        <Pricing />
        <FAQ />
        <Industries />
        <CTAStrip />
        <ContactBlock />
      </main>
      <Footer />
    </>
  );
}
