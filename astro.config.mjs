// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";
import swup from "@swup/astro";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  site: "https://sultanonline.app",

  integrations: [
    svelte(),
    sitemap(),
    swup({ theme: false, animationClass: false }),
  ],
});
