import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // resolve: {
  // alias: {
  // // Add aliases for Firebase and Firestore modules
  // "firebase/firestore": "@firebase/firestore",
  // "firebase/app": "@firebase/app",
  // "firebase/analytics": "@firebase/analytics",
  // },
  // },
});
