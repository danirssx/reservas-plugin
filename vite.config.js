import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build",
    assetsDir: "",
    rollupOptions: {
      input: "./src/index.jsx",
      output: {
        entryFileNames: "index.[hash].js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return "index.[hash][extname]";
          }
          return "[name].[hash][extname]";
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `@import "./src/index.css";`,
      },
    },
  },
});
