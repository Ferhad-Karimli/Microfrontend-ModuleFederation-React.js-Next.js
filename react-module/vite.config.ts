import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      name: 'react_app',
      filename: 'remoteEntry.js',
      exposes: {
        './ReactApp': './src/App.tsx',
      },
      shared: ['react', 'react-dom'],
    }),

  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  css: {
    postcss: './postcss.config.cjs', // PostCSS konfiqurasiya faylı yolunu göstərin
  }
})
