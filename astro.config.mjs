// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://sachin619-ms.github.io/sachin.dev/",
  base: "/sachin.dev/",
  vite: {
    plugins: [tailwindcss()],
  },
});
