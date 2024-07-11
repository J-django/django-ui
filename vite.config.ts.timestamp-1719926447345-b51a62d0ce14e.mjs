// vite.config.ts
import { defineConfig } from "file:///Users/jiangkainan/Documents/Code/django-ui/node_modules/.pnpm/vite@5.0.11_@types+node@20.11.0_less@4.2.0/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/jiangkainan/Documents/Code/django-ui/node_modules/.pnpm/@vitejs+plugin-vue@4.6.2_vite@5.0.11_vue@3.4.10/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueSetupExtend from "file:///Users/jiangkainan/Documents/Code/django-ui/node_modules/.pnpm/vite-plugin-vue-setup-extend@0.4.0_vite@5.0.11/node_modules/vite-plugin-vue-setup-extend/dist/index.mjs";
import postcssRem from "file:///Users/jiangkainan/Documents/Code/django-ui/node_modules/.pnpm/postcss-rem@3.0.0/node_modules/postcss-rem/index.js";
import path from "path";
var __vite_injected_original_dirname = "/Users/jiangkainan/Documents/Code/django-ui";
var vite_config_default = defineConfig({
  plugins: [vue(), vueSetupExtend()],
  server: {
    host: true,
    open: true
  },
  build: {
    outDir: "django-ui",
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "./src/index.ts"),
      name: "django-ui",
      fileName: (format) => `django-ui.${format}.js`
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
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
        })
      ]
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvamlhbmdrYWluYW4vRG9jdW1lbnRzL0NvZGUvZGphbmdvLXVpXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvamlhbmdrYWluYW4vRG9jdW1lbnRzL0NvZGUvZGphbmdvLXVpL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9qaWFuZ2thaW5hbi9Eb2N1bWVudHMvQ29kZS9kamFuZ28tdWkvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgdnVlU2V0dXBFeHRlbmQgZnJvbSAndml0ZS1wbHVnaW4tdnVlLXNldHVwLWV4dGVuZCdcbmltcG9ydCBwb3N0Y3NzUmVtIGZyb20gJ3Bvc3Rjc3MtcmVtJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3Z1ZSgpLCB2dWVTZXR1cEV4dGVuZCgpXSxcbiAgc2VydmVyOiB7XG4gICAgaG9zdDogdHJ1ZSxcbiAgICBvcGVuOiB0cnVlXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgb3V0RGlyOiBcImRqYW5nby11aVwiLFxuICAgIGxpYjoge1xuICAgICAgZW50cnk6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmMvaW5kZXgudHNcIiksXG4gICAgICBuYW1lOiBcImRqYW5nby11aVwiLFxuICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IGBkamFuZ28tdWkuJHtmb3JtYXR9LmpzYFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFtcInZ1ZVwiXSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgdnVlOiBcIlZ1ZVwiLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBjc3M6IHtcbiAgICBwb3N0Y3NzOiB7XG4gICAgICBwbHVnaW5zOiBbXG4gICAgICAgIHBvc3Rjc3NSZW0oe1xuICAgICAgICAgIG5hbWU6IFwicmVtXCIsXG4gICAgICAgICAgcHJlY2lzaW9uOiA2XG4gICAgICAgIH0pLFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIilcbiAgICB9XG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1ULFNBQVMsb0JBQW9CO0FBQ2hWLE9BQU8sU0FBUztBQUNoQixPQUFPLG9CQUFvQjtBQUMzQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLFVBQVU7QUFKakIsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLElBQUksR0FBRyxlQUFlLENBQUM7QUFBQSxFQUNqQyxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsS0FBSztBQUFBLE1BQ0gsT0FBTyxLQUFLLFFBQVEsa0NBQVcsZ0JBQWdCO0FBQUEsTUFDL0MsTUFBTTtBQUFBLE1BQ04sVUFBVSxDQUFDLFdBQVcsYUFBYSxNQUFNO0FBQUEsSUFDM0M7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxLQUFLO0FBQUEsTUFDaEIsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLFVBQ1AsS0FBSztBQUFBLFFBQ1A7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILFNBQVM7QUFBQSxNQUNQLFNBQVM7QUFBQSxRQUNQLFdBQVc7QUFBQSxVQUNULE1BQU07QUFBQSxVQUNOLFdBQVc7QUFBQSxRQUNiLENBQUM7QUFBQSxNQUNIO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQSxJQUNwQztBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
