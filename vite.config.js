import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/portafolio/" : "/",
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve("index.html"),
        about: resolve("aboutme.html"),
        contact: resolve("contact.html"),
      },
    },
  },
}));
