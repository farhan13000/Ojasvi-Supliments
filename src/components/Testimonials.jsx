import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { testimonials } from '../data/testimonials'

function Card({ t }) {
  return (
    <div className="mx-3 flex w-[300px] shrink-0 flex-col rounded-2xl border border-forest-900/10 bg-white/70 p-6 shadow-card sm:w-[340px]">
      <Quote size={22} className="text-gold-500/70" />
      <div className="mt-3 flex text-gold-500" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={14} className={i < t.rating ? 'fill-gold-500' : 'text-forest-900/15'} />
        ))}
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-forest-900/80">&ldquo;{t.text}&rdquo;</p>
      <div className="mt-4 border-t border-forest-900/10 pt-3">
        <p className="text-sm font-semibold text-forest-950">{t.name}</p>
        <p className="text-xs text-forest-900/50">{t.location}</p>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const loop = [...testimonials, ...testimonials]

  return (
    <section id="reviews" className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-700">Loved Across India</span>
          <h2 className="font-display mt-3 text-3xl text-forest-950 sm:text-4xl">What Our Customers Say</h2>
        </motion.div>
      </div>

      <div className="relative mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-cream to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-cream to-transparent sm:w-32" />
        <div className="animate-marquee flex w-max hover:[animation-play-state:paused]">
          {loop.map((t, idx) => (
            <Card key={`${t.name}-${idx}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
