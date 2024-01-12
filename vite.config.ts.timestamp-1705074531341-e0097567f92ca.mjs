// vite.config.ts
import { defineConfig } from "file:///Users/jiangkainan/Documents/Code/django-ui/node_modules/.pnpm/vite@5.0.11_@types+node@20.11.0_less@4.2.0/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/jiangkainan/Documents/Code/django-ui/node_modules/.pnpm/@vitejs+plugin-vue@4.6.2_vite@5.0.11_vue@3.4.10/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueSetupExtend from "file:///Users/jiangkainan/Documents/Code/django-ui/node_modules/.pnpm/vite-plugin-vue-setup-extend@0.4.0_vite@5.0.11/node_modules/vite-plugin-vue-setup-extend/dist/index.mjs";
import postcssRem from "file:///Users/jiangkainan/Documents/Code/django-ui/node_modules/.pnpm/postcss-rem@3.0.0/node_modules/postcss-rem/index.js";
import path from "path";
var __vite_injected_original_dirname = "/Users/jiangkainan/Documents/Code/django-ui";
var vite_config_default = defineConfig({
  plugins: [vue(), vueSetupExtend()],
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
      plugins: [postcssRem]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvamlhbmdrYWluYW4vRG9jdW1lbnRzL0NvZGUvZGphbmdvLXVpXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvamlhbmdrYWluYW4vRG9jdW1lbnRzL0NvZGUvZGphbmdvLXVpL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9qaWFuZ2thaW5hbi9Eb2N1bWVudHMvQ29kZS9kamFuZ28tdWkvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgdnVlU2V0dXBFeHRlbmQgZnJvbSAndml0ZS1wbHVnaW4tdnVlLXNldHVwLWV4dGVuZCdcbmltcG9ydCBwb3N0Y3NzUmVtIGZyb20gJ3Bvc3Rjc3MtcmVtJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3Z1ZSgpLCB2dWVTZXR1cEV4dGVuZCgpXSxcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6IFwiZGphbmdvLXVpXCIsXG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy9pbmRleC50c1wiKSxcbiAgICAgIG5hbWU6IFwiZGphbmdvLXVpXCIsXG4gICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYGRqYW5nby11aS4ke2Zvcm1hdH0uanNgXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBleHRlcm5hbDogW1widnVlXCJdLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICB2dWU6IFwiVnVlXCIsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGNzczoge1xuICAgIHBvc3Rjc3M6IHtcbiAgICAgIHBsdWdpbnM6IFtwb3N0Y3NzUmVtXVxuICAgIH1cbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBbVQsU0FBUyxvQkFBb0I7QUFDaFYsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sb0JBQW9CO0FBQzNCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sVUFBVTtBQUpqQixJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsSUFBSSxHQUFHLGVBQWUsQ0FBQztBQUFBLEVBQ2pDLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLEtBQUs7QUFBQSxNQUNILE9BQU8sS0FBSyxRQUFRLGtDQUFXLGdCQUFnQjtBQUFBLE1BQy9DLE1BQU07QUFBQSxNQUNOLFVBQVUsQ0FBQyxXQUFXLGFBQWEsTUFBTTtBQUFBLElBQzNDO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsS0FBSztBQUFBLE1BQ2hCLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxVQUNQLEtBQUs7QUFBQSxRQUNQO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxTQUFTO0FBQUEsTUFDUCxTQUFTLENBQUMsVUFBVTtBQUFBLElBQ3RCO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
