import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/anythings10.github.io/",
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
