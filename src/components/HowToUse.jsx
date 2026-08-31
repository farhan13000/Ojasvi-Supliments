import { motion } from 'framer-motion'
import { getFeaturedProduct } from '../data/products'

const product = getFeaturedProduct()

export default function HowToUse() {
  return (
    <section className="relative bg-cream-soft py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-700">Simple Ritual</span>
          <h2 className="font-display mt-3 text-3xl text-forest-950 sm:text-4xl">How to Use Ojasvi</h2>
        </motion.div>

        <div className="relative mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div aria-hidden="true" className="absolute left-0 right-0 top-8 hidden h-0.5 bg-forest-900/10 sm:block" />
          {product.howToUse.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="relative flex flex-col items-center text-center"
            >
              <span className="font-display relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-cream-soft bg-forest-900 text-xl text-gold-400 shadow-card">
                {step.step}
              </span>
              <h3 className="font-display mt-4 text-lg text-forest-950">{step.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-forest-900/70">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
