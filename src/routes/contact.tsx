import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ContactBlock } from "@/components/sections/ContactBlock";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Q&T Web Co." },
      { name: "description", content: "Tell us about your project. We respond within one business day." },
      { property: "og:title", content: "Contact — Q&T Web Co." },
      { property: "og:description", content: "Tell us about your project. We respond within one business day." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <Nav />
      <main className="pt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-xs text-ink-soft">
            <Link to="/" className="hover:text-ink">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="font-medium text-ink">Contact</span>
          </nav>
        </div>
        <ContactBlock />
      </main>
      <Footer />
    </>
  );
}
