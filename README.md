# Ojashvi Supplements — Strength+ Store

An Ayurvedic supplement storefront built with **React + Vite + Tailwind CSS v4 + Framer Motion + React Router**, currently selling one product — `Strength+` — on a real multi-page site. The product catalog is array-based ([`src/data/products.js`](src/data/products.js)), so more products can be added later without restructuring anything. No backend — the cart lives in `localStorage` and checkout/contact hand off to **WhatsApp Click-to-Chat**, so orders and messages are confirmed by your team directly in WhatsApp (no database needed).

## Pages

- **Home** (`/`) — brand hero featuring Strength+, testimonials, CTA
- **Products** (`/products`) — catalog grid (currently one product)
- **Product detail** (`/products/strength-plus`) — 360° visual, pack selector, benefits, ingredients, how-to-use, add to cart / buy on WhatsApp
- **About Us** (`/about`) — brand story, values, stats
- **Contact Us** (`/contact`) — contact info + a form that opens WhatsApp with the message pre-filled
- **FAQ** (`/faq`) — accordion, shared across the whole site

Navbar matches: **Home · Products · Contact us · About us · FAQ**.

## Features

- Animated, theme-consistent Ayurvedic design (forest green / gold / cream palette, `Marcellus` + `Poppins`), branded with the Ojashvi Supplements logo
- **360° rotating bottle + box visual** for Strength+ (spins on click, drag-to-rotate, sparkle burst, moving highlight), with the product's name rendered on the label/box art
- Pack selector (1 / 2 / 3 bottles), quantity stepper, live pricing & discount
- Cart supports **items from multiple products at once** (ready for when a second product is added), persisted in `localStorage`; the WhatsApp order message lists each item under its correct product name
- **"Checkout on WhatsApp"** — builds a pre-filled order summary and opens `wa.me` with it, prompting the customer for delivery details
- Floating WhatsApp chat button site-wide; Contact page form also composes a WhatsApp message (no backend needed)
- Full SEO: per-page meta tags/canonical via `react-helmet-async`, Open Graph/Twitter cards, `robots.txt`, `sitemap.xml`, `site.webmanifest`, and JSON-LD (`Organization`, `WebSite`, `Product`, `FAQPage`, `BreadcrumbList`)
- Fully responsive, keyboard-accessible interactive elements

## Before you launch — required edits

1. **WhatsApp number** — [`src/data/brand.js`](src/data/brand.js) → `whatsappNumber` is set to `916388509921` (+91 6388 509 921). Double-check this is the correct, WhatsApp-active business number before launch. `phoneDisplay` is just the formatted version shown on the Contact page — keep both in sync.
2. **Brand contact details** — same file: `email`, `address`, `instagram`, `facebook`, `disclaimer`.
3. **Domain** — replace `https://ojashvisupplements.vercel.app/` in [`index.html`](index.html) and `SITE_URL` in [`src/lib/seoData.js`](src/lib/seoData.js) / [`src/components/SEO.jsx`](src/components/SEO.jsx) with your real deployed domain once you know it.
4. **OG share image** — [`public/og-image.svg`](public/og-image.svg) is a designed placeholder. Social platforms (Facebook/Twitter) render best with a **raster** image, so swap in a real `1200×630` PNG/JPG and update the `og:image`/`twitter:image` tags in `index.html`.
5. **Pricing / packs / ingredients** — [`src/data/products.js`](src/data/products.js) holds every product's copy, pricing and pack details.

## Adding another product

Add a new entry to the `products` array in [`src/data/products.js`](src/data/products.js):

- **Fully purchasable**: copy the shape of the `strength-plus` entry (badges, highlights, benefits, howToUse, packs, etc.), set `status: 'available'`, and give every pack a unique `id` (prefixed per product, e.g. `focus-1`) — pack ids must be unique across the whole catalog since the cart keys off them.
- **Teaser only**: set `status: 'coming-soon'` with just `name`, `subtitle`, `category` and a one-line `teaser` — it renders as a "Coming Soon" card with a WhatsApp "Notify Me" button instead of a buy flow.

It automatically appears in the `/products` grid and gets its own `/products/:id` detail page with structured data — no other wiring needed. If you want it featured on the homepage hero too, revisit [`src/pages/Home.jsx`](src/pages/Home.jsx) and [`src/components/Hero.jsx`](src/components/Hero.jsx), which currently spotlight a single product.

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

This project is Vercel-ready out of the box (`vercel.json` included, Vite auto-detected, with a SPA rewrite so client-side routes like `/products/strength-plus` work on refresh/direct link).

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
  pages/          Home, Products, ProductDetail, About, Contact, FAQPage, NotFound
  components/     Navbar, Hero, ProductCard, ProductShowcase, Product360, Benefits,
                   Ingredients, HowToUse, Testimonials, FAQ, CTASection, Footer,
                   CartDrawer, WhatsAppFloatingButton, SEO, ScrollToTop
  context/        CartContext — multi-product cart state + localStorage persistence
  data/           brand.js (contact info), products.js (catalog), testimonials.js, faq.js
  lib/            whatsapp.js (message builders), seoData.js (JSON-LD builders)
public/           favicon.svg, og-image.svg, robots.txt, sitemap.xml, site.webmanifest
```

## Notes

- There is intentionally **no backend/database** — this matches the "no backend" requirement. If you later want real order storage, payment collection, or inventory, that would need an API (e.g. Express + MongoDB) added alongside this frontend.
- `brand.disclaimer` in [`src/data/brand.js`](src/data/brand.js) is a general dietary-supplement disclaimer shown in the footer — have it (and each product's own `disclaimer` field) reviewed against your actual AYUSH/FSSAI licensing and local regulations before going live.
