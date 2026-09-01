import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Bell, Check, Leaf, MessageCircle, ShieldCheck, Star, Truck } from 'lucide-react'
import SEO from '../components/SEO'
import Breadcrumb from '../components/Breadcrumb'
import { ProductCard, ComingSoonProductCard } from '../components/ProductCard'
import { products } from '../data/products'
import { buildItemListJsonLd, buildBreadcrumbJsonLd } from '../lib/seoData'
import { buildComingSoonInquiryMessage, buildInquiryMessage, getWhatsAppLink } from '../lib/whatsapp'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const trustPoints = [
  { icon: Leaf, title: '100% Herbal', desc: 'No synthetic hormones or fillers — just Ayurvedic botanicals.' },
  { icon: ShieldCheck, title: 'AYUSH Compliant', desc: 'Formulated and labelled to AYUSH standards.' },
  { icon: Truck, title: 'Pan-India Delivery', desc: 'Cash on Delivery available in most serviceable pin codes.' },
  { icon: MessageCircle, title: 'WhatsApp Support', desc: 'Real answers from our team, not a chatbot.' },
]

export default function Products() {
  const available = products.filter((p) => p.status === 'available')
  const comingSoon = products.filter((p) => p.status === 'coming-soon')
  const featured = available.length === 1 ? available[0] : null
  const cheapest = featured ? [...featured.packs].sort((a, b) => a.price - b.price)[0] : null

  return (
    <>
      <SEO
        title="Shop Strength+ | Ojashvi Supplements"
        description="Shop Ojashvi Strength+ — a 100% natural Ayurvedic stamina booster made from 17 powerful herbs. AYUSH compliant, GMP certified, delivered pan-India with Cash on Delivery."
        path="/products"
        jsonLd={[buildItemListJsonLd(), buildBreadcrumbJsonLd()]}
      />

      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Products' }]} />

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
              Every Ojashvi formulation is built on classical Ayurvedic principles — 100% natural, no fillers, no
              synthetic shortcuts.
            </p>
          </motion.div>

          {featured ? (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative mt-14 overflow-hidden rounded-3xl border-2 border-forest-900 bg-forest-900 shadow-card"
            >
              <div className="grid grid-cols-1 items-center gap-8 p-6 sm:p-10 lg:grid-cols-2 lg:gap-4">
                <Link to={`/products/${featured.id}`} className="focus-ring group flex justify-center">
                  {featured.images?.src ? (
                    <motion.img
                      src={featured.images.src}
                      alt={featured.images.alt}
                      className="h-72 object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.35)] sm:h-96"
                      whileHover={{ scale: 1.04 }}
                      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                    />
                  ) : (
                    <div className="flex h-72 w-full items-center justify-center rounded-2xl bg-cream/5 sm:h-96" />
                  )}
                </Link>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-400">{featured.category}</p>
                  <h2 className="font-display mt-1 text-3xl text-cream sm:text-4xl">{featured.name}</h2>
                  <p className="mt-1 text-base text-cream/60">{featured.subtitle}</p>

                  <div className="mt-3 flex items-center gap-1.5 text-sm text-cream/70">
                    <Star size={14} className="fill-gold-400 text-gold-400" />
                    {featured.rating} · {featured.ratingCount.toLocaleString('en-IN')} reviews
                  </div>

                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-cream/70">{featured.shortDescription}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {featured.badges.map((b) => (
                      <span
                        key={b}
                        className="inline-flex items-center gap-1 rounded-full border border-cream/15 bg-cream/5 px-3 py-1 text-xs font-medium text-cream/80"
                      >
                        <Check size={12} className="text-gold-400" /> {b}
                      </span>
                    ))}
                  </div>

                  <p className="mt-5 text-sm text-cream/60">
                    From{' '}
                    <span className="text-2xl font-bold text-cream">
                      {featured.currency}
                      {cheapest.price.toLocaleString('en-IN')}
                    </span>{' '}
                    <span className="text-cream/40 line-through">
                      {featured.currency}
                      {cheapest.mrp.toLocaleString('en-IN')}
                    </span>
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      to={`/products/${featured.id}`}
                      className="focus-ring inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-sm font-semibold text-forest-950 shadow-lg transition hover:bg-gold-400"
                    >
                      View Full Details &amp; Buy <ArrowRight size={16} />
                    </Link>
                    <a
                      href={getWhatsAppLink(buildInquiryMessage())}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring inline-flex items-center gap-2 rounded-full border-2 border-cream/30 px-6 py-3.5 text-sm font-semibold text-cream transition hover:border-cream/60"
                    >
                      <MessageCircle size={16} /> Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {available.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </motion.div>
          )}

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {trustPoints.map((t) => {
              const Icon = t.icon
              return (
                <motion.div
                  key={t.title}
                  variants={fadeUp}
                  className="rounded-2xl border border-forest-900/10 bg-white/50 p-5"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest-900 text-gold-400">
                    <Icon size={18} />
                  </span>
                  <p className="mt-3 text-sm font-semibold text-forest-950">{t.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-forest-900/60">{t.desc}</p>
                </motion.div>
              )
            })}
          </motion.div>

          {comingSoon.length > 0 && (
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {comingSoon.map((p) => (
                <ComingSoonProductCard key={p.id} product={p} />
              ))}
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="mt-14 flex flex-col items-center gap-3 rounded-2xl border border-dashed border-forest-900/15 bg-white/40 px-6 py-8 text-center"
          >
            <p className="font-display text-lg text-forest-950">More Ayurvedic Formulations, Coming Soon</p>
            <p className="max-w-md text-sm text-forest-900/60">
              We're building out the Ojashvi range one carefully formulated product at a time. Want to know when the
              next one launches?
            </p>
            <a
              href={getWhatsAppLink(buildComingSoonInquiryMessage('your next formulation'))}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-900 transition hover:text-forest-700"
            >
              <Bell size={15} /> Notify Me on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
