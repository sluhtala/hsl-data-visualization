// @ts-check
import { defineConfig, envField } from "astro/config";

import react from "@astrojs/react";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: "server",
  env: {
    schema: {
      API_URI: envField.string({ access: "public", context: "server" }),
      API_KEY: envField.string({ access: "secret", context: "server" }),
    },
  },
  vite: {
    ssr: {
      noExternal: ["execa", "is-stream", "npm-run-path"],
    },
  },
  adapter: node({
    mode: "standalone",
  }),
});
