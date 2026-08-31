import { motion } from 'framer-motion'
import { Leaf } from 'lucide-react'

export default function Ingredients({ product }) {
  return (
    <section id="ingredients" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-600">
            Rooted in Tradition
          </span>
          <h2 className="font-display mt-3 text-3xl text-forest-950 sm:text-4xl">The Herbs Behind Ojasvi</h2>
          <p className="mt-4 text-forest-900/70">
            Every capsule is a blend of six time-tested Ayurvedic botanicals, sourced and dosed with care.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {product.highlights.map((h, idx) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.08 }}
              whileHover={{ scale: 1.03 }}
              className="relative overflow-hidden rounded-2xl border border-forest-900/10 bg-white/60 p-6 shadow-card"
            >
              <div
                aria-hidden="true"
                className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-forest-600/10 transition group-hover:scale-125"
              />
              <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-forest-900 text-gold-400">
                <Leaf size={18} />
              </span>
              <h3 className="font-display relative mt-4 text-lg text-forest-950">{h.label}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-forest-900/70">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
