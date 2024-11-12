import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postcssRem from 'postcss-rem'
import UnoCSS from 'unocss/vite'
import path from 'path'

export default defineConfig({
  plugins: [vue(), UnoCSS()],
  server: {
    host: true,
    open: true
  },
  build: {
    outDir: "django-ui",
    lib: {
      entry: path.resolve(__dirname, "./src/index.ts"),
      name: "django-ui",
      fileName: (format) => `django-ui.${format}.js`
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        }
      }
    }
  },
  css: {
    postcss: {
      plugins: [
        postcssRem({
          name: "rem",
          precision: 6
        }),
      ]
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  }
})
