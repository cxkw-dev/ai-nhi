// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://cxkw-dev.github.io',
  base: '/ai-nhi',
  integrations: [react()],
});
