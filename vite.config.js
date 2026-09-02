import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from 'vite-plugin-sitemap'
import { defineConfig } from 'vite'

const dynamicRoutes = [
  '/products/strength-plus'
]

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Sitemap({
      hostname: 'https://ojashvisupplements.vercel.app',
      dynamicRoutes,
      exclude: ['/404']
    })
  ],
  build: {
    sourcemap: false,
  },
})
