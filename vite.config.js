import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from 'vite-plugin-sitemap'
import prerender from '@prerenderer/rollup-plugin'
import puppeteer from '@prerenderer/renderer-puppeteer'
import { defineConfig } from 'vite'

const dynamicRoutes = [
  '/products/strength-plus'
]

const staticRoutes = ['/', '/products', '/about', '/contact', '/faq']
const allRoutes = [...staticRoutes, ...dynamicRoutes]

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Sitemap({
      hostname: 'https://ojashvisupplements.vercel.app',
      dynamicRoutes,
      exclude: ['/404']
    }),
    prerender({
      routes: allRoutes,
      renderer: '@prerenderer/renderer-puppeteer',
      server: {
        port: 3000,
      }
    })
  ],
  build: {
    sourcemap: false,
  },
})
