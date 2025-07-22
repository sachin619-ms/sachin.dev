// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://sachindev.github.io",
  base: "/sachin.dev/",
  vite: {
    plugins: [tailwindcss()],
  },
});
