import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwindcss from "tailwindcss";
import tailwindcssNesting from "tailwindcss/nesting";
import autoprefixer from "autoprefixer";

import * as path from "path";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    css: {
      postcss: {
        plugins: [
          tailwindcssNesting(),
          tailwindcss({
            config: path.resolve(import.meta.dirname, "tailwind.config.js"),
          }),
          autoprefixer(),
        ],
      },
    },
  },
});
