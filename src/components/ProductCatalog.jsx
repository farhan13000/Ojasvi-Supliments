import { motion } from 'framer-motion'
import { ArrowRight, Bell, Sparkles, Star } from 'lucide-react'
import { products } from '../data/products'
import { buildComingSoonInquiryMessage, getWhatsAppLink } from '../lib/whatsapp'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function AvailableCard({ product }) {
  const cheapest = [...product.packs].sort((a, b) => a.price - b.price)[0]

  return (
    <motion.a
      href="#product"
      variants={item}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border-2 border-forest-900 bg-forest-900 p-6 text-cream shadow-card sm:col-span-2 sm:flex-row sm:items-center sm:gap-8 lg:col-span-1 lg:flex-col lg:items-start"
    >
      <span className="absolute right-5 top-5 rounded-full bg-gold-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-forest-950">
        In Stock
      </span>

      <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gold-400/15 text-gold-400 transition group-hover:scale-105">
        <Sparkles size={28} />
      </span>

      <div className="mt-5 flex-1 sm:mt-0 lg:mt-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-gold-400">{product.category}</p>
        <h3 className="font-display mt-1 text-2xl text-cream">{product.name}</h3>
        <p className="mt-1 text-sm text-cream/60">{product.subtitle}</p>

        <div className="mt-3 flex items-center gap-1.5 text-sm text-cream/70">
          <Star size={14} className="fill-gold-400 text-gold-400" />
          {product.rating} · {product.ratingCount.toLocaleString('en-IN')} reviews
        </div>

        <p className="mt-4 text-sm text-cream/50">
          From <span className="text-lg font-bold text-cream">{product.currency}{cheapest.price.toLocaleString('en-IN')}</span>
        </p>

        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-400">
          View Product <ArrowRight size={16} className="transition group-hover:translate-x-1" />
        </span>
      </div>
    </motion.a>
  )
}

function ComingSoonCard({ product }) {
  return (
    <motion.div
      variants={item}
      className="relative flex flex-col rounded-3xl border-2 border-dashed border-forest-900/15 bg-white/40 p-6"
    >
      <span className="absolute right-5 top-5 rounded-full bg-forest-900/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-forest-900/60">
        Coming Soon
      </span>

      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-forest-900/5 text-forest-900/40">
        <Sparkles size={28} />
      </span>

      <div className="mt-5 flex-1">
        <p className="text-xs font-semibold uppercase tracking-wide text-forest-900/40">{product.category}</p>
        <h3 className="font-display mt-1 text-2xl text-forest-900/70">{product.name}</h3>
        <p className="mt-1 text-sm text-forest-900/50">{product.subtitle}</p>
        <p className="mt-4 text-sm leading-relaxed text-forest-900/50">{product.teaser}</p>
      </div>

      <a
        href={getWhatsAppLink(buildComingSoonInquiryMessage(product.name))}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-ring mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-900/70 transition hover:text-forest-900"
      >
        <Bell size={15} /> Notify Me on WhatsApp
      </a>
    </motion.div>
  )
}

export default function ProductCatalog() {
  return (
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
            One formulation live today — more Ojasvi Ayurveda products are on the way. Get notified the moment they launch.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {products.map((p) =>
            p.status === 'available' ? <AvailableCard key={p.id} product={p} /> : <ComingSoonCard key={p.id} product={p} />,
          )}
        </motion.div>
      </div>
    </section>
  )
}
