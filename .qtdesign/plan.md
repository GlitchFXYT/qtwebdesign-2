## Problem

In `src/components/sections/Industries.tsx`, the sticky tab bar highlights the "active" industry using an IntersectionObserver with `threshold: [0.25, 0.5]`. Each industry block is much taller than the viewport, so those ratios are rarely reached and the highlighted pill doesn't reliably update to match the section currently in view.

## Fix

Rework the active-section tracking in `Industries.tsx` so the highlighted pill always matches the block under the sticky bar:

- Replace the ratio-based IntersectionObserver with one that uses a `rootMargin` defining a thin "trigger line" just below the sticky nav (e.g. `rootMargin: "-120px 0px -70% 0px"`, threshold `0`).
- Whenever a block intersects that line, set it as active. This gives a stable highlight as the user scrolls through tall sections.
- Also auto-scroll the active pill into view inside the horizontally-scrollable tab bar (using `scrollIntoView({ inline: "center", block: "nearest" })`) so on narrow screens the active industry is always visible.
- Keep clicking a pill working as today (anchor jump via `#id` with existing `scroll-mt-32`).

No other files need changes.
