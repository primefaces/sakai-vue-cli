import { defineConfig } from 'vite'
import createVuePlugin from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/

export default defineConfig(async () => {
  return {
    resolve: {
      alias: {
        '#src': path.resolve('./src')
      }
    },
    plugins: [createVuePlugin()]
  }
})
