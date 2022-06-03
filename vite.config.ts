import { defineConfig } from "vite";
import createVuePlugin from "@vitejs/plugin-vue";

// https://vitejs.dev/config/

export default defineConfig(async () => {
  return {
    resolve: {
      alias: {
        "#src": "./src",
      },
    },
    plugins: [createVuePlugin()],
  };
});
