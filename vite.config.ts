import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig(() => ({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      exclude: ["src/stories/**"],
    }),
  ],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "Monoscribe",
      fileName: (format) => `monoscribe.${format}.js`,
      formats: ["es", "cjs", "umd"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      input: {
        main: "src/index.ts",
      },
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
}));
