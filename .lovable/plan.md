
# Swap in the real Q&T Web Co. logo

Replace the placeholder gradient "Q&T" wordmark with the uploaded logo across the site.

## Steps

1. Upload `qt_logo.png` to Lovable Assets via the CLI so it serves from CDN (not bundled into the repo). Save the pointer to `src/assets/qt-logo.png.asset.json`.
2. Update `src/components/site/Logo.tsx` to render the uploaded logo image instead of the placeholder gradient tile + styled text. Two size variants via a prop so it can render compactly in the nav and larger in the footer if needed.
3. Keep the existing usages in `Nav.tsx` and `Footer.tsx` working with no API changes (just the visual swap). Ensure the logo sits cleanly against both light and the dark CTA section backgrounds.
4. Add the logo as a favicon and `og:image` in `__root.tsx` so browser tabs and link previews use the real brand mark.

## Notes

- The uploaded logo has a white background. For the nav (which sits over a light/translucent surface) this is fine. No edits to the image needed.
- I'll keep the visible "Q&T Web Co." text as part of the image — no separate text wordmark next to it, since the logo already includes the wordmark.
