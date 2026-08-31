import { motion } from 'framer-motion'
import { Flame, Heart, Leaf, Moon, Shield, Sparkles, Zap } from 'lucide-react'

const iconMap = { zap: Zap, shield: Shield, flame: Flame, heart: Heart, leaf: Leaf, moon: Moon, sparkles: Sparkles }

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Benefits({ product }) {
  return (
    <section id="benefits" className="relative bg-forest-950 py-20 text-cream sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-noise opacity-[0.06]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">Why {product.name}</span>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl">Six Ways It Supports You</h2>
          <p className="mt-4 text-cream/70">
            Formulated on classical Ayurvedic principles for real, sustainable results — not a short-lived spike.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {product.benefits.map((b) => {
            const Icon = iconMap[b.icon] ?? Leaf
            return (
              <motion.div
                key={b.title}
                variants={item}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-cream/10 bg-cream/[0.04] p-6 transition hover:border-gold-400/30 hover:bg-cream/[0.07]"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400/15 text-gold-400 transition group-hover:scale-110 group-hover:bg-gold-400/25">
                  <Icon size={22} />
                </span>
                <h3 className="font-display mt-4 text-lg text-cream">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/65">{b.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
