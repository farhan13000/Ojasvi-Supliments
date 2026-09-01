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
- **Real product photography** with a slow, drag-or-click "turntable" rotation (a single photo can't show its own back, so it's a squeeze-and-shade illusion, not a literal 3D flip) — falls back to hand-illustrated bottle/box art for any future product without a real photo
- Pack selector (1 / 2 / 3 bottles), quantity stepper, live pricing & discount, plus a "Product Information" accordion (ingredients, how-to-use, storage & safety) right in the purchase panel
- Cart supports **items from multiple products at once** (ready for when a second product is added), persisted in `localStorage`
- **Delivery-details checkout**: the cart collects name, phone, address, city and pincode (validated, persisted so returning visitors don't retype), then **"Checkout on WhatsApp"** builds a complete pre-filled order message — no blank fields for the customer to fill in inside WhatsApp
- Floating WhatsApp chat button site-wide; Contact page form also composes a WhatsApp message (no backend needed)
- Visible breadcrumbs on every inner page, matching the `BreadcrumbList` structured data
- Route-level code-splitting (`React.lazy`) so the initial JS payload only includes the page actually being viewed
- Full SEO: per-page meta tags/canonical/robots via `react-helmet-async`, Open Graph/Twitter cards backed by a real photo-based `og-image.png`, `robots.txt`, `sitemap.xml` with `lastmod`, `site.webmanifest`, and JSON-LD (`Organization`, `WebSite`, `Product` with `image`, `FAQPage`, `BreadcrumbList`, `ItemList`)
- Fully responsive, keyboard-accessible interactive elements

## Before you launch — required edits

1. **WhatsApp number** — [`src/data/brand.js`](src/data/brand.js) → `whatsappNumber` is set to `916388509921` (+91 6388 509 921). Double-check this is the correct, WhatsApp-active business number before launch. `phoneDisplay` is just the formatted version shown on the Contact page — keep both in sync.
2. **Brand contact details** — same file: `email`, `address`, `instagram`, `facebook`, `disclaimer`.
3. **Domain** — replace `https://ojashvisupplements.vercel.app/` in [`index.html`](index.html) and `SITE_URL` in [`src/lib/seoData.js`](src/lib/seoData.js) / [`src/components/SEO.jsx`](src/components/SEO.jsx) with your real deployed domain once you know it — then regenerate `public/og-image.png` (or just edit the text) so its embedded `SITE_URL` references match.
4. **Pricing / packs / ingredients** — [`src/data/products.js`](src/data/products.js) holds every product's copy, pricing and pack details.
5. **Reviews & ratings** — the testimonials and the `rating`/`ratingCount` fields in `products.js` are illustrative placeholder content, not real customer data. Replace them with genuine reviews before launch — presenting fabricated reviews as real (especially in the `AggregateRating` structured data search engines read) can violate Google's structured-data guidelines and misrepresent the product to customers.

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
  assets/         Ojasvi_Suppliments_Logo.png (site logo), Strenght_plus_image.png (source
                   product photo) + strength-plus.webp (trimmed, compressed derivative used
                   on the site)
  pages/          Home, Products, ProductDetail, About, Contact, FAQPage, NotFound (lazy-loaded
                   except Home)
  components/     Navbar, Hero, Breadcrumb, ProductCard, ProductShowcase, ProductInfo,
                   Product360, Benefits, Ingredients, HowToUse, Testimonials, FAQ, CTASection,
                   Footer, CartDrawer, WhatsAppFloatingButton, SEO, ScrollToTop
  context/        CartContext — multi-product cart state + delivery details, both
                   persisted in localStorage
  data/           brand.js (contact info), products.js (catalog), testimonials.js, faq.js
  lib/            whatsapp.js (message builders + delivery-details validation),
                   seoData.js (JSON-LD builders)
public/           favicon.svg, og-image.png, robots.txt, sitemap.xml, site.webmanifest
```

## Notes

- There is intentionally **no backend/database** — this matches the "no backend" requirement. If you later want real order storage, payment collection, or inventory, that would need an API (e.g. Express + MongoDB) added alongside this frontend.
- `brand.disclaimer` in [`src/data/brand.js`](src/data/brand.js) is a general dietary-supplement disclaimer shown in the footer — have it (and each product's own `disclaimer` field) reviewed against your actual AYUSH/FSSAI licensing and local regulations before going live.
