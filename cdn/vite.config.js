import { defineConfig } from "vite";

export default defineConfig({
  plugins: [],
  server: {
    open: true,
    port: 4000,
    host: '127.0.0.1',
  },
  build: {
    chunkSizeWarningLimit: 1500,
    outDir: "dist",
  },
});
