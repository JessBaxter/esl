import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@': '/src', // Point '@' to the 'src' directory
      },
    },
  },
  // base: '.', // Set a path prefix.
  site: "https://jess.foo/", // Use to generate your sitemap and canonical URLs in your final build.
  trailingSlash: "ignore", // Use to always append '/' at end of url
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: "catppuccin-mocha",
    },
  },
  integrations: [react(), tailwind({}), sitemap(), robotsTxt()],
});
