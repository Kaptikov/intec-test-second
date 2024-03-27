// vite.config.js
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { defineConfig } from 'vite'

export default defineConfig(() => {
  return {
    base: '/intec-test-second/',

    plugins: [
      ViteImageOptimizer({
        jpg: {
          quality: 100,
        },
        jpeg: {
          quality: 100,
        },
        png: {
          quality: 100,
        },
        webp: {
          lossless: true,
        },
      }),
    ],
  }
})
