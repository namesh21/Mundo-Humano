// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Troque pela URL definitiva do site antes de publicar.
export default defineConfig({
  site: 'https://www.mundohumano.com.br',
  trailingSlash: 'always',
  // O blog fica fora do sitemap enquanto não houver posts publicados.
  integrations: [sitemap({ filter: (page) => !page.includes('/blog/') })],
});
