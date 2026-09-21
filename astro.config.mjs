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
    domains: ['panther-black-dev.me', 'darkred-hawk-567253.hostingersite.com'],
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
        hostname: "panther-black-dev.me",
        pathname: "/wp-content/uploads/**"
      },
      {
        protocol: "https",
        hostname: "darkred-hawk-567253.hostingersite.com",
        pathname: "/wp-content/uploads/**"
      },
    ],
  },

  adapter: netlify({
     devFeatures: {
      images: true,
      environmentVariables: false,
      edgeFunctions: false,
    },
  }),
});