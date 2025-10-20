import { defineConfig } from "vite";
import path from "path";

// Server build configuration
export default defineConfig({
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    'process.env': {},
    'global': 'globalThis'
  },
  build: {
    outDir: "dist/server",
    lib: {
      entry: path.resolve(__dirname, "sunsip/server/index.ts"),
      name: "server",
      fileName: "server",
      formats: ["es"],
    },
    target: "node22",
    ssr: true,
    rollupOptions: {
      external: [
        // Node.js built-ins
        'node:path',
        'node:url',
        'node:fs',
        'node:http',
        'node:https',
        'node:os',
        'node:crypto',
        'node:stream',
        'node:util',
        'node:events',
        'node:buffer',
        'node:querystring',
        'node:child_process',
        // External dependencies
        'express',
        'cors',
        'dotenv',
        'stripe',
        '@stripe/stripe-js',
      ],
      output: {
        format: 'es',
        entryFileNames: '[name].mjs',
      },
    },
    minify: false,
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
});
