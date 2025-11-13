import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@avatar': fileURLToPath(new URL('./src/assets/images/avatar', import.meta.url)),
      '@carousel': fileURLToPath(new URL('./src/assets/images/carousel', import.meta.url)),
      '@images': fileURLToPath(new URL('./src/assets/images', import.meta.url)),
      '@photos': fileURLToPath(new URL('./src/assets/images/photos', import.meta.url)),

    },
  },
  // base: '/<仓库名>/',
  base: '/',
})
