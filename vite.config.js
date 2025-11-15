// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/soumyashrenee1.github.io/", // <-- replace with your repo name
  plugins: [react()],
});
