
# Q&T Web Co. — Showcase Website Plan

A flagship demo site for a web design agency. Visitors land, instantly understand what's possible, and can browse curated demonstrations of layouts, interactions, and industry-specific website concepts — all wrapped in one cohesive, premium visual identity.

## Visual identity

- **Palette:** clean off-white background (`#FAFAFB`), deep ink text (`#0B0B14`), signature blue→purple gradient (`#3B82F6 → #8B5CF6 → #A855F7`) used sparingly on accents, CTAs, headlines, and key UI.
- **Typography:** display headings in a refined geometric sans (Sora or Space Grotesk), body in Inter — generous line-height, tight tracking on display.
- **Surfaces:** soft cards with 1px hairline borders, large radii (16–24px), layered subtle shadows, occasional gradient mesh blobs behind hero sections.
- **Motion:** smooth scroll, scroll-triggered fade/slide-up reveals, gradient shimmer on primary buttons, magnetic hover on cards, animated section progress bar fixed to viewport edge.
- **Logo:** placeholder gradient "Q&T" mark + wordmark until your file lands; swap is a one-line replace.

## Site architecture

Single primary route with deep section anchors + 1 secondary route for the full industry showcase grid. Everything is server-rendered via TanStack Start routes with proper per-route metadata.

```text
/                  → Home / master showcase (all sections)
/showcase          → Industries index (inline previews stacked)
/contact           → Standalone contact page (also embedded on home)
```

Hash anchors are used for in-page section jumps within the long showcase pages, not as the primary nav between pages.

## Navigation & wayfinding (the "never feel lost" layer)

1. **Sticky top nav** — gradient logo, primary links (Showcase, Industries, Features, Pricing, Contact), gradient CTA "Start a Project".
2. **Floating section progress rail** — thin vertical gradient bar on the right with labeled dots for each major section; click to jump, fills as you scroll.
3. **Breadcrumbs** on `/showcase` and industry deep-link anchors.
4. **"Start Here" panel** directly under the hero — 3 guided entry cards: *"Looking for a service business site?"*, *"Want industry-specific examples?"*, *"Explore interactive features"* — each scrolls/links to the right place.
5. **Inline guidance prompts** between major section groups ("Next up: see how galleries and before/after sliders work →").
6. **Back-to-top + jump menu** floating bottom-right after scroll.

## Sections (curated, in order)

Grouped so the page reads as a guided tour, not a feature dump.

**Opening**
1. Hero — gradient mesh background, animated headline, dual CTA, trust strip.
2. Start Here guide (3 entry cards).
3. Logo cloud / "as featured in" style strip.

**Layout & structure**
4. Multiple nav menu styles demo (4 variants: minimal, mega-menu, centered-logo, sidebar) in a tabbed switcher.
5. Section style gallery (split, asymmetric, full-bleed, bento) as live previews.
6. Professional card layouts (3 variants).

**Content & social proof**
7. Stats / metrics counter strip (animated on scroll).
8. Testimonial layouts — 3 variants (carousel, masonry quotes, featured + grid).
9. Review examples (Google-style star cards).
10. Team section.

**Interactive demonstrations**
11. Interactive image gallery (filterable + lightbox).
12. Before-and-after slider (drag handle).
13. FAQ accordion.
14. Process / timeline section (vertical animated).

**Commercial**
15. Pricing examples (3-tier with toggle monthly/annual).
16. Service page example block.
17. CTA section variants (2 styles).

**Industry showcase (inline previews — your choice)**
18. For each of the 8 industries (Roofing, Landscaping, Pressure Washing, HVAC, Mobile Detailing, Plumbing, Real Estate, Construction): a rich preview "site-in-a-section" with:
   - Industry-tailored mini hero (brand color tint + gradient accent)
   - Services strip (3–4 cards)
   - Gallery/portfolio row
   - Testimonial
   - CTA
   - Each anchored, jumpable from a sticky industry tab bar at the top of the showcase block.

**Closing**
19. Contact form example (modern multi-step-style single form with inline validation visuals).
20. Google Maps embed example (styled map iframe).
21. Modern footer (4-column with newsletter, gradient top border, social, legal).

## Technical approach

- TanStack Start file-based routes under `src/routes/`. Index page composes section components from `src/components/sections/*`. Each industry preview is `src/components/industries/<name>.tsx` rendered into a shared `<IndustryShowcase>` wrapper.
- Design tokens defined in `src/styles.css` via `@theme` (gradient stops, surfaces, shadows, radii). No hardcoded colors in components.
- Animations: Tailwind utilities + `framer-motion` for scroll reveals, progress rail, and slider interactions. Smooth scroll via CSS `scroll-behavior` + offset for sticky nav.
- Before/after slider, gallery lightbox, tabbed nav-style switcher, accordion, pricing toggle, animated counters: all built as small isolated client components.
- Imagery: generated via the image tool, stored under `src/assets/` with industry-appropriate, realistic photography (roofs, lawns, HVAC units, kitchens, listings, etc.). Each industry gets 2–3 hero/gallery images.
- Per-route `head()` metadata: distinct title, description, og:title, og:description on `/`, `/showcase`, `/contact`. og:image only on leaf routes.
- Fully responsive — mobile-first grids, sticky progress rail collapses to a top progress bar on mobile, nav becomes a slide-in sheet.
- Contact form is a visual example (no backend wired); fields validate client-side and show a success state. If you later want it to actually send, that's a follow-up to enable Lovable Cloud.

## What's intentionally out of scope (for now)

- Real backend (form submissions, CMS, auth) — purely a visual showcase build. Easy to add later.
- Per-industry dedicated routes — you picked inline previews.
- Real Google Maps API key — uses the standard embed iframe (no key needed).

## Deliverable

A polished, cohesive, scroll-driven showcase site that feels like a real agency's flagship — every section demonstrating a different capability, with guided navigation so visitors always know where they are and what to look at next.
