import { defineConfig } from "vite";
import sass from "vite-plugin-sass";

export default defineConfig({
  plugins: [sass()],
  build: {
    target: "esnext", // Use ES modules for better compatibility
    outDir: "dist", // Output directory for built files
    cssCodeSplit: false, // Combine CSS into one file for simplicity
  },
  server: {
    port: 3000, // Development server port
  },
});
