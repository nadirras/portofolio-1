import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // other build configurations...
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },

  // Configure the HTML template
  base: "/",
  // Include font link tags in the HTML template
  html: {
    inject: {
      injectData: {
        fonts: [
          // Add your font link tags here
          '<link rel="preconnect" href="https://fonts.googleapis.com" />',
          '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap">',

          ' <link rel="preconnect" href="https://fonts.googleapis.com" />',
          ' <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />',
          ' <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,700;1,700&display=swap" rel="stylesheet"/>',
          '<link href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@1,700&display=swap" rel="stylesheet"/>',
        ],
      },
    },
  },
});
