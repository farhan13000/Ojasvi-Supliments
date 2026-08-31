# Ojasvi Ayurveda — Strength+ Store

An Ayurvedic supplement storefront built with **React + Vite + Tailwind CSS v4 + Framer Motion**, structured as a small multi-product catalog (one product live — `Strength+` — with room to add more). No backend — the cart lives in `localStorage` and checkout hands the order off to **WhatsApp Click-to-Chat**, so orders are confirmed by your team directly in WhatsApp (no database needed).

## Features

- Animated, theme-consistent Ayurvedic design (forest green / gold / cream palette, `Marcellus` + `Poppins`), branded with the Ojasvi logo
- Homepage catalog grid ("Explore Ojasvi Ayurveda") showing the available product plus "Coming Soon" teaser cards with a WhatsApp "Notify Me" — add a new entry to `src/data/products.js` and it appears here automatically
- Custom SVG product illustration (bottle + box "whole package") that **spins a full 360° on click**, and can also be **dragged** to rotate manually, with a sparkle burst and moving light-highlight synced to rotation
- Product page with pack selector (1 / 2 / 3 bottles), quantity stepper, live pricing & discount
- Cart drawer with add/remove/update quantity, persisted in `localStorage`
- **"Checkout on WhatsApp"** — builds a pre-filled order summary message and opens `wa.me` with it, prompting the customer for delivery details
- Floating WhatsApp chat button, benefits, ingredients, how-to-use, testimonials marquee, FAQ accordion
- Full on-page SEO: meta tags, Open Graph/Twitter cards, canonical URL, `robots.txt`, `sitemap.xml`, `site.webmanifest`, and JSON-LD structured data (`Organization`, `WebSite`, `Product`, `ItemList`, `FAQPage`, `BreadcrumbList`)
- Fully responsive, keyboard-accessible interactive elements

## Before you launch — required edits

1. **WhatsApp number** — [`src/data/brand.js`](src/data/brand.js) → `whatsappNumber` is set to `916388509921` (+91 6388 509 921). Double-check this is the correct, WhatsApp-active business number before launch.
2. **Brand contact details** — same file: `email`, `address`, `instagram`, `facebook`.
3. **Domain** — replace `https://ojasviayurveda.vercel.app/` throughout [`index.html`](index.html) and [`src/lib/seoData.js`](src/lib/seoData.js) with your real deployed domain once you know it (Vercel gives you one on first deploy; you can update these after).
4. **OG share image** — [`public/og-image.svg`](public/og-image.svg) is a designed placeholder. Social platforms (Facebook/Twitter) render best with a **raster** image, so swap in a real `1200×630` PNG/JPG product photo and update the `og:image`/`twitter:image` tags in `index.html` accordingly.
5. **Pricing / packs / ingredients** — [`src/data/products.js`](src/data/products.js) holds every product's copy, pricing and pack details.

## Adding another product

1. Add a new entry to the `products` array in [`src/data/products.js`](src/data/products.js). Set `status: 'coming-soon'` with just `name`, `subtitle`, `category` and a one-line `teaser` to show it as a teaser card on the homepage catalog, or copy the full `Strength+` shape (badges, highlights, benefits, howToUse, packs, etc.) and set `status: 'available'` to make it fully purchasable.
2. Only one product can be `'available'` at a time today — [`ProductShowcase`](src/components/ProductShowcase.jsx), the 360° visual, and the cart's "featured product" all key off `getFeaturedProduct()` (the first `available` entry). Making several products simultaneously shop-able would need a product detail route per item (e.g. React Router) and a showcase/cart keyed by product id instead of a single featured one — a bigger step than this template covers today.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL. Edit files under `src/` — changes hot-reload instantly.

## Build

```bash
npm run build   # outputs to dist/
npm run preview # serve the production build locally
```

## Deploying to Vercel

This project is Vercel-ready out of the box (`vercel.json` included, Vite auto-detected).

**Option A — CLI**
```bash
npm install -g vercel
vercel        # first deploy, follow prompts
vercel --prod # promote to production
```

**Option B — Git integration**
1. Push this project to a GitHub/GitLab/Bitbucket repo.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Vite** (auto-detected). Build command `npm run build`, output directory `dist` (already set in `vercel.json`).
4. Deploy — every push to `main` will auto-deploy.

## Project structure

```
src/
  assets/         Ojasvi_Suppliments_Logo.png — the site logo (navbar + footer)
  components/     UI sections (Navbar, Hero, ProductCatalog, ProductShowcase, Product360, CartDrawer, ...)
  context/        CartContext — cart state + localStorage persistence
  data/           brand.js (contact info), products.js (catalog), testimonials.js, faq.js
  lib/            whatsapp.js (message builders), seoData.js (JSON-LD builders)
public/           favicon.svg, og-image.svg, robots.txt, sitemap.xml, site.webmanifest
```

## Notes

- There is intentionally **no backend/database** — this matches the "no backend" requirement. If you later want real order storage, payment collection, or inventory, that would need an API (e.g. Express + MongoDB) added alongside this frontend.
- The disclaimer text in each product's `disclaimer` field is a general dietary-supplement disclaimer — have it reviewed against your actual AYUSH/FSSAI licensing and local regulations before going live.
- The "Coming Soon" products (`Focus+`, `Immunity+`) are illustrative placeholders — replace or remove them once you know what's actually launching next.
