// ============= Full file contents =============

// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import path from "node:path";

const entitiesRoot = path.resolve(process.cwd(), "node_modules/entities");

// When building on Netlify (NETLIFY=true is set automatically in their build env),
// switch the nitro preset so the output is a Netlify-compatible bundle.
// On Lovable's own infrastructure this branch is skipped and the default
// cloudflare-module preset is used (so Lovable preview/publish keeps working).
const isNetlify = process.env.NETLIFY === "true";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  ...(isNetlify ? { nitro: { preset: "netlify" } } : {}),
  vite: {
    resolve: {
      alias: {
        "entities/lib/decode.js": path.join(entitiesRoot, "lib/decode.js"),
        "entities/lib/encode.js": path.join(entitiesRoot, "lib/encode.js"),
        entities: entitiesRoot,
      },
    },
  },
});
