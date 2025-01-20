import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build",
    assetsDir: "",
    rollupOptions: {
      input: "./src/index.jsx",
    },
  },
});
