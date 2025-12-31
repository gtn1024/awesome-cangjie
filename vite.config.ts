import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { VitePluginRadar } from 'vite-plugin-radar'

export default defineConfig({
  plugins: [
    vue(),
    VitePluginRadar({
      analytics: {
        id: 'G-FJ2JVMY164',
      },
    }),
  ],
})
