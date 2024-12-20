import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: "/website-portfolio/",
	assetsInclude: [
		"**/*.png",
		"**/*.PNG",
		"**/*.jpg",
		"**/*.jpeg",
		"**/*.svg",
	], // Add image formats here
});
