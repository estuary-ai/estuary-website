import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@images": path.resolve(import.meta.dirname, "client", "src", "assets", "images"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
  // Use root base path for custom domain
  base: '/',
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
