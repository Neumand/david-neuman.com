import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    preact(),
  ],
  output: 'hybrid',
  adapter: node({
    mode: 'middleware',
  }),
});
