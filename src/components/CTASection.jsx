import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MessageCircle, ShoppingCart } from 'lucide-react'
import { getWhatsAppLink, buildInquiryMessage } from '../lib/whatsapp'

export default function CTASection({
  heading = (
    <>
      Ready to Feel the <span className="text-gradient-gold">Ojasvi</span> Difference?
    </>
  ),
  subheading = 'Join thousands who trust Ojasvi for natural, Ayurvedic wellness. Order today and pay on delivery.',
  primaryHref = '/products',
  primaryLabel = 'Shop Now',
}) {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-forest-900 px-6 py-14 text-center shadow-card sm:px-14"
        >
          <div aria-hidden="true" className="animate-blob absolute -left-10 -top-10 h-40 w-40 bg-gold-400/20 blur-2xl" />
          <div aria-hidden="true" className="animate-blob absolute -bottom-10 -right-10 h-40 w-40 bg-forest-500/30 blur-2xl [animation-delay:2s]" />

          <h2 className="font-display relative text-3xl text-cream sm:text-4xl">{heading}</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-cream/70">{subheading}</p>

          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                to={primaryHref}
                className="focus-ring inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-forest-950 shadow-lg transition hover:bg-gold-400 sm:text-base"
              >
                <ShoppingCart size={18} /> {primaryLabel}
              </Link>
            </motion.div>
            <motion.a
              href={getWhatsAppLink(buildInquiryMessage())}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="focus-ring inline-flex items-center gap-2 rounded-full border-2 border-cream/30 px-7 py-3.5 text-sm font-semibold text-cream transition hover:border-cream/60 sm:text-base"
            >
              <MessageCircle size={18} /> Ask on WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
