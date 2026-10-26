// @ts-check
import { defineConfig } from 'astro/config';

// URL définitive du site : à mettre à jour quand le nom de domaine sera réservé.
export default defineConfig({
  site: 'https://www.sowkad.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
