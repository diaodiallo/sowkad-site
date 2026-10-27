// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Adresse principale du site (les autres variantes sont redirigées vers elle dans public/.htaccess).
export default defineConfig({
  site: 'https://www.sowkad.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [
    // Les liens entre versions FR et EN sont déclarés dans chaque page (balises hreflang).
    sitemap({ filter: (page) => !page.includes('/404') }),
  ],
});
