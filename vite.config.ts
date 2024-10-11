import path from "node:path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

const getAbsolutePath = (relativePath: string) =>
	path.resolve(path.dirname(path.resolve("package.json")), relativePath);

// https://vitejs.dev/config/
export default defineConfig({
	base: "https://cdn.example.com/",
	build: {
		manifest: true,
		lib: {
			entry: getAbsolutePath("src/main.tsx"),
			formats: ["umd"],
			name: "ViteReact",
		},
		rollupOptions: {
			external: ["react", "react-dom"],
		},
	},
	plugins: [react()],
});
