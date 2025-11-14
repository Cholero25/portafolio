import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/portafolio/", // 👈 asegúrate que coincida EXACTO con el nombre del repo
  plugins: [
    tailwindcss(),
  ],
});
