import { motion } from 'framer-motion'
import { Leaf, ShieldCheck, Sparkles, Star } from 'lucide-react'
import Product360 from './Product360'
import { product } from '../data/product'
import { getWhatsAppLink, buildInquiryMessage } from '../lib/whatsapp'

const stats = [
  { value: '10,000+', label: 'Happy Customers' },
  { value: '100%', label: 'Natural Herbs' },
  { value: '4.8★', label: 'Average Rating' },
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-10 pb-20 sm:pt-16 sm:pb-28">
      {/* decorative blobs */}
      <div
        aria-hidden="true"
        className="animate-blob absolute -left-24 -top-24 h-72 w-72 bg-forest-600/15 blur-3xl sm:h-96 sm:w-96"
      />
      <div
        aria-hidden="true"
        className="animate-blob absolute -right-16 top-24 h-64 w-64 bg-gold-400/25 blur-3xl [animation-delay:3s] sm:h-80 sm:w-80"
      />
      <div aria-hidden="true" className="bg-noise absolute inset-0 opacity-[0.35]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-forest-900">
            <Sparkles size={14} className="text-gold-600" />
            Ancient Ayurveda, Modern Vitality
          </span>

          <h1 className="font-display mt-5 text-4xl leading-[1.1] text-forest-950 sm:text-5xl lg:text-6xl">
            Reclaim Your <span className="text-gradient-gold">Stamina</span>, the Ayurvedic Way
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-forest-900/75 sm:text-lg">
            {product.shortDescription}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <motion.a
              href="#product"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-forest-900 px-7 py-3.5 text-sm font-semibold text-cream shadow-card transition hover:bg-forest-800 sm:text-base"
            >
              Shop Ojasvi Now
            </motion.a>
            <motion.a
              href={getWhatsAppLink(buildInquiryMessage())}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="focus-ring inline-flex items-center gap-2 rounded-full border-2 border-forest-900/20 bg-white/60 px-7 py-3.5 text-sm font-semibold text-forest-900 backdrop-blur transition hover:border-forest-900/40 sm:text-base"
            >
              Chat on WhatsApp
            </motion.a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-forest-900/70">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-forest-700" /> AYUSH Compliant
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Leaf size={16} className="text-forest-700" /> 100% Herbal
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Star size={16} className="fill-gold-500 text-gold-500" /> {product.rating} ({product.ratingCount.toLocaleString('en-IN')} reviews)
            </span>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-forest-900/10 pt-6">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl text-forest-950 sm:text-3xl">{s.value}</dd>
                <dd className="mt-1 text-xs text-forest-900/60 sm:text-sm">{s.label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="flex justify-center lg:justify-end"
        >
          <Product360 />
        </motion.div>
      </div>
    </section>
  )
}
