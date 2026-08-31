import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Bell, Sparkles, Star } from 'lucide-react'
import { buildComingSoonInquiryMessage, getWhatsAppLink } from '../lib/whatsapp'

export const cardMotion = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export function ProductCard({ product }) {
  const cheapest = [...product.packs].sort((a, b) => a.price - b.price)[0]

  return (
    <motion.div variants={cardMotion} whileHover={{ y: -6 }}>
      <Link
        to={`/products/${product.id}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border-2 border-forest-900 bg-forest-900 p-6 text-cream shadow-card"
      >
        <span className="absolute right-5 top-5 rounded-full bg-gold-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-forest-950">
          In Stock
        </span>

        <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gold-400/15 text-gold-400 transition group-hover:scale-105">
          <Sparkles size={28} />
        </span>

        <div className="mt-5 flex-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-gold-400">{product.category}</p>
          <h3 className="font-display mt-1 text-2xl text-cream">{product.name}</h3>
          <p className="mt-1 text-sm text-cream/60">{product.subtitle}</p>

          <div className="mt-3 flex items-center gap-1.5 text-sm text-cream/70">
            <Star size={14} className="fill-gold-400 text-gold-400" />
            {product.rating} · {product.ratingCount.toLocaleString('en-IN')} reviews
          </div>

          <p className="mt-4 text-sm text-cream/50">
            From <span className="text-lg font-bold text-cream">₹{cheapest.price.toLocaleString('en-IN')}</span>
          </p>
        </div>

        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-400">
          View Product <ArrowRight size={16} className="transition group-hover:translate-x-1" />
        </span>
      </Link>
    </motion.div>
  )
}

export function ComingSoonProductCard({ product }) {
  return (
    <motion.div
      variants={cardMotion}
      className="relative flex h-full flex-col rounded-3xl border-2 border-dashed border-forest-900/15 bg-white/40 p-6"
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
