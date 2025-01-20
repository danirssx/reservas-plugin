import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build",
    assetsDir: "", // Prevents creating an assets subdirectory
    rollupOptions: {
      input: "./src/index.jsx", // Entry point for your React app
      output: {
        entryFileNames: "index.[hash].js", // Ensures hashed filename for the main JS file
        assetFileNames: (assetInfo) => {
          // Ensures hashed filenames for CSS files
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return "index.[hash][extname]";
          }
          return "[name].[hash][extname]";
        },
      },
    },
  },
});
