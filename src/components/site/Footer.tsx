import { Logo } from "./Logo";
import { Github, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-hairline bg-surface-2">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-brand" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-ink-soft">
              Premium websites that turn visitors into customers. Designed and built in-house.
            </p>
            <div className="mt-6 flex gap-3">
              {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full border border-hairline bg-background text-ink-soft transition-colors hover:border-transparent hover:bg-gradient-brand hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title="Company"
            items={[
              { label: "About", href: "#" },
              { label: "Process", href: "/#process" },
              
              { label: "Careers", href: "/#team" },
            ]}
          />
          <FooterCol
            title="Showcase"
            items={[
              { label: "Industries", href: "/#industries" },
              { label: "Features", href: "/#features" },
              { label: "FAQ", href: "/#faq" },
            ]}
          />

          <div>
            <h4 className="text-sm font-semibold text-ink">Stay in the loop</h4>
            <p className="mt-2 text-sm text-ink-soft">
              Monthly design notes. No fluff.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex overflow-hidden rounded-full border border-hairline bg-background"
            >
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-ink-soft/70"
              />
              <button className="inline-flex items-center justify-center bg-gradient-brand px-4 py-2 text-sm font-semibold leading-none text-white">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-hairline pt-8 text-xs text-ink-soft sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Q&amp;T Web Co. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ink">Privacy</a>
            <a href="#" className="hover:text-ink">Terms</a>
            <a href="#" className="hover:text-ink">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-ink">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {items.map((i) => (
          <li key={i.label}>
            <a href={i.href} className="text-sm text-ink-soft transition-colors hover:text-ink">
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
