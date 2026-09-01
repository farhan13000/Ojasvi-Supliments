import { motion } from 'framer-motion'
import { Award, Leaf, ShieldCheck, Sparkles } from 'lucide-react'
import SEO from '../components/SEO'
import CTASection from '../components/CTASection'
import { brand } from '../data/brand'

const values = [
  {
    icon: Leaf,
    title: 'Purity',
    desc: 'No fillers, no synthetic hormones, no shortcuts — every capsule is built from real, sourced botanicals.',
  },
  {
    icon: Sparkles,
    title: 'Tradition',
    desc: 'Formulations rooted in classical Ayurvedic texts, not trend-chasing pseudoscience.',
  },
  {
    icon: ShieldCheck,
    title: 'Transparency',
    desc: 'Every ingredient, every dosage, every claim — clearly listed, nothing hidden behind "proprietary blends".',
  },
  {
    icon: Award,
    title: 'Consistency',
    desc: 'Manufactured in a GMP-certified facility, batch after batch, so what works once works every time.',
  },
]

const stats = [
  { value: '10,000+', label: 'Happy Customers' },
  { value: '100%', label: 'Natural Herbs' },
  { value: '4.8★', label: 'Average Rating' },
]

export default function About() {
  return (
    <>
      <SEO
        title="About Us | Ojashvi Supplements"
        description="Ojashvi Supplements crafts natural Ayurvedic supplements rooted in classical formulations — no fillers, no synthetic shortcuts. Learn about our mission and values."
        path="/about"
      />

      <section className="relative overflow-hidden py-16 sm:py-24">
        <div aria-hidden="true" className="animate-blob absolute -left-24 -top-24 h-72 w-72 bg-forest-600/15 blur-3xl" />
        <div aria-hidden="true" className="animate-blob absolute -right-16 top-24 h-64 w-64 bg-gold-400/25 blur-3xl [animation-delay:3s]" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">About Us</span>
            <h1 className="font-display mt-3 text-4xl text-forest-950 sm:text-5xl">
              Awaken Your <span className="text-gradient-gold">Ojas</span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-forest-900/75 sm:text-lg">
              In Ayurveda, Ojas is the vital essence behind stamina, immunity and clarity of mind — the reserve of
              energy that keeps the body resilient. {brand.name} was built around a simple idea: modern life
              depletes that reserve faster than ever, and the answer isn&apos;t another synthetic stimulant — it&apos;s
              going back to the herbs Ayurveda has trusted for centuries, formulated for how people actually live
              today.
            </p>
            <p className="mt-4 text-base leading-relaxed text-forest-900/75 sm:text-lg">
              Every Ojashvi formulation starts from classical Ayurvedic references, not marketing trends — sourced
              botanicals, honest dosing, and zero synthetic hormones or fillers. What you read on the label is what
              is actually inside the capsule.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-forest-950 py-20 text-cream sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">What We Stand For</span>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl">Our Values</h2>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, idx) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-cream/10 bg-cream/[0.04] p-6"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400/15 text-gold-400">
                  <v.icon size={22} />
                </span>
                <h3 className="font-display mt-4 text-lg text-cream">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/65">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl text-forest-950 sm:text-4xl">{s.value}</dd>
                <dd className="mt-1 text-xs text-forest-900/60 sm:text-sm">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CTASection />
    </>
  )
}
