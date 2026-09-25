import { defineConfig } from 'astro/config';

// Both are supplied at build time (see .github/workflows/deploy.yml), so a
// change of host or a custom domain needs no code change. Cloudflare Pages
// serves at the domain root, so PAGES_BASE stays unset there; it exists for
// hosts that serve from a sub-path. Locally both fall back to root, which
// keeps `npm run dev` at http://localhost:4321/.
const site = process.env.SITE_URL || 'https://olimov-inc.example';
const base = process.env.PAGES_BASE || '/';

export default defineConfig({
  site,
  base,
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en', 'ru'],
    routing: { prefixDefaultLocale: false },
  },
  build: { inlineStylesheets: 'always' },
  compressHTML: true,
});
