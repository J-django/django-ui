import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueSetupExtend()
  ],
  build: {
    outDir: "django-ui",
    lib: {
      entry: path.resolve(__dirname, "./src/components/django-ui/index.ts"),
      name: "django-ui",
      fileName: "django-ui"
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        }
      }
    }
  }
})
