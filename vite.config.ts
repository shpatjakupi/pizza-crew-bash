import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// Removed the componentTagger from lovable-tagger

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      // Add this proxy configuration
      '/api': {
        target: 'http://localhost:3001', // Your backend server port
        changeOrigin: true,
        secure: false,
      }
    }
  },
  plugins: [
    react(),
    // Removed the lovable-tagger plugin here
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));