import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import { ProductCard } from '../components/ProductCard'
import Testimonials from '../components/Testimonials'
import CTASection from '../components/CTASection'
import { getFeaturedProduct, getAvailableProducts } from '../data/products'
import { buildItemListJsonLd } from '../lib/seoData'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

export default function Home() {
  const bestseller = getFeaturedProduct()
  const products = getAvailableProducts()

  return (
    <>
      <SEO
        title="Ojasvi Ayurveda | Natural Ayurvedic Supplements"
        description="Ojasvi Ayurveda is a range of 100% natural Ayurvedic supplements — stamina, focus, immunity and more — crafted from time-tested botanicals. Order now on WhatsApp."
        path="/"
        jsonLd={[buildItemListJsonLd()]}
      />

      <Hero bestseller={bestseller} />

      <section id="products" className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-600">Our Range</span>
            <h2 className="font-display mt-3 text-3xl text-forest-950 sm:text-4xl">Explore Ojasvi Ayurveda</h2>
            <p className="mt-4 text-forest-900/70">
              Natural Ayurvedic formulations for stamina, focus and immunity — pick what your body needs.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </motion.div>

          <div className="mt-10 text-center">
            <Link
              to="/products"
              className="focus-ring inline-flex items-center gap-1.5 text-sm font-semibold text-forest-900 hover:text-forest-700"
            >
              View All Products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
      <CTASection />
    </>
  )
}
