// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';


import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  vite: {
 plugins: [tailwindcss()],

},

  image: {
    domains: ['mistyrose-squirrel-580231.hostingersite.com'],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "coffeshop.local"
      },
      {
        protocol: "https",
        hostname: "panther.panther-black-dev.me"
      },
      {
        protocol: "https",
        hostname: "mistyrose-squirrel-580231.hostingersite.com",
        pathname: "/wp-content/uploads/**"
      },
    ],
  },

  adapter: netlify(),
});