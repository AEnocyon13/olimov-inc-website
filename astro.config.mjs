import { defineConfig } from 'astro/config';

// GitHub Pages fills these in at build time (see .github/workflows/deploy.yml),
// so the repo can be renamed or moved to a custom domain without touching code.
// Locally both fall back to root, which keeps `npm run dev` at http://localhost:4321/.
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
