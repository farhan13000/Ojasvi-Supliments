import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import { ProductCard, ComingSoonProductCard } from '../components/ProductCard'
import { products } from '../data/products'
import { buildItemListJsonLd } from '../lib/seoData'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

export default function Products() {
  return (
    <>
      <SEO
        title="Our Products | Ojasvi Ayurveda"
        description="Shop Ojasvi Strength+ — a 100% natural Ayurvedic stamina booster made from time-tested botanicals."
        path="/products"
        jsonLd={[buildItemListJsonLd()]}
      />

      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-600">Our Range</span>
            <h1 className="font-display mt-3 text-4xl text-forest-950 sm:text-5xl">Our Products</h1>
            <p className="mt-4 text-forest-900/70">
              Every Ojasvi formulation is built on classical Ayurvedic principles — 100% natural, no fillers, no
              synthetic shortcuts.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {products.map((p) =>
              p.status === 'available' ? <ProductCard key={p.id} product={p} /> : <ComingSoonProductCard key={p.id} product={p} />,
            )}
          </motion.div>
        </div>
      </section>
    </>
  )
}
