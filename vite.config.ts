import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables
  loadEnv(mode, process.cwd(), '');
  
  return {
    root: "./sunsip/client",
    publicDir: "public",
    server: {
      host: "0.0.0.0",
      port: 8080,
      open: true,
      strictPort: true,
      fs: {
        allow: [".."]
      },
      hmr: {
        clientPort: 8080
      },
      proxy: {
        // Proxy API requests to the Express server
        '/api': {
          target: 'http://localhost:5050',
          changeOrigin: true,
          secure: false,
          ws: true,
          // Don't rewrite the /api prefix
          // rewrite: (path) => path.replace(/^\/api/, ''),
          configure: (proxy, _options) => {
            proxy.on('error', (err, _req, _res) => {
              console.log('proxy error', err);
            });
            proxy.on('proxyReq', (proxyReq, req: any, _res) => {
              console.log('Sending Request to the Target:', {
                method: req.method,
                url: req.url,
                headers: req.headers,
                body: req.body
              });
            });
            proxy.on('proxyRes', (proxyRes, req: any, _res) => {
              console.log('Received Response from the Target:', {
                method: req.method,
                url: req.url,
                statusCode: proxyRes.statusCode,
                statusMessage: proxyRes.statusMessage,
                headers: proxyRes.headers
              });
            });
          }
        }
      }
    },
    build: {
      outDir: "../../dist",
      emptyOutDir: true,
      rollupOptions: {
        input: "./sunsip/client/index.html",
        output: {
          manualChunks: {
            react: ['react', 'react-dom', 'react-router-dom'],
            vendor: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
          },
        },
      },
      sourcemap: true,
    },
    plugins: [
      react(),
      // Visualize bundle size (only in development)
      mode === 'analyze' && visualizer({
        open: true,
        filename: 'dist/stats.html',
        gzipSize: true,
        brotliSize: true,
      })
    ].filter(Boolean),
    resolve: {
      alias: [
        {
          find: "@",
          replacement: path.resolve(__dirname, "./sunsip/client")
        },
        {
          find: "@shared",
          replacement: path.resolve(__dirname, "./sunsip/shared")
        }
      ]
    }
  };
});
