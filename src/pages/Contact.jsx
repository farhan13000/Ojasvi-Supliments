import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import SEO from '../components/SEO'
import { brand } from '../data/brand'
import { buildContactMessage, getWhatsAppLink } from '../lib/whatsapp'

const infoCards = [
  { icon: MapPin, label: 'Address', value: brand.address },
  { icon: Mail, label: 'Email', value: brand.email, href: `mailto:${brand.email}` },
  { icon: Phone, label: 'WhatsApp / Phone', value: brand.phoneDisplay, href: getWhatsAppLink('Hello Ojasvi Ayurveda! 🌿') },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [touched, setTouched] = useState(false)

  const isValid = form.name.trim().length > 0 && form.message.trim().length > 0

  const handleSubmit = (e) => {
    e.preventDefault()
    setTouched(true)
    if (!isValid) return

    const link = getWhatsAppLink(buildContactMessage(form))
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <SEO
        title="Contact Us | Ojasvi Ayurveda"
        description="Get in touch with Ojasvi Ayurveda — ask a question, check delivery to your city, or place an order. We reply fastest on WhatsApp."
        path="/contact"
      />

      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-600">Get In Touch</span>
            <h1 className="font-display mt-3 text-4xl text-forest-950 sm:text-5xl">Contact Us</h1>
            <p className="mt-4 text-forest-900/70">
              Questions about a product, an order, or delivery to your city? We reply fastest on WhatsApp.
            </p>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="space-y-4 lg:col-span-2"
            >
              {infoCards.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href ? '_blank' : undefined}
                  rel={c.href ? 'noopener noreferrer' : undefined}
                  className="focus-ring flex items-start gap-4 rounded-2xl border border-forest-900/10 bg-white/60 p-5 shadow-card transition hover:border-forest-900/25"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest-900 text-gold-400">
                    <c.icon size={18} />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-forest-900/50">{c.label}</span>
                    <span className="mt-0.5 block text-sm text-forest-900">{c.value}</span>
                  </span>
                </a>
              ))}

              <a
                href={getWhatsAppLink('Hello Ojasvi Ayurveda! 🌿')}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-sm font-semibold text-white shadow-card transition hover:bg-[#1ebe57]"
              >
                <MessageCircle size={18} /> Chat on WhatsApp Now
              </a>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              onSubmit={handleSubmit}
              noValidate
              className="space-y-4 rounded-3xl border border-forest-900/10 bg-white/60 p-6 shadow-card lg:col-span-3 sm:p-8"
            >
              <div>
                <label htmlFor="name" className="text-sm font-semibold text-forest-950">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="focus-ring mt-1.5 w-full rounded-xl border border-forest-900/15 bg-white px-4 py-3 text-sm text-forest-950"
                  placeholder="Your name"
                />
                {touched && !form.name.trim() && <p className="mt-1 text-xs text-maroon-600">Please enter your name.</p>}
              </div>

              <div>
                <label htmlFor="phone" className="text-sm font-semibold text-forest-950">
                  Phone (optional)
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  className="focus-ring mt-1.5 w-full rounded-xl border border-forest-900/15 bg-white px-4 py-3 text-sm text-forest-950"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-semibold text-forest-950">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="focus-ring mt-1.5 w-full resize-none rounded-xl border border-forest-900/15 bg-white px-4 py-3 text-sm text-forest-950"
                  placeholder="How can we help?"
                />
                {touched && !form.message.trim() && <p className="mt-1 text-xs text-maroon-600">Please enter a message.</p>}
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest-900 px-6 py-4 text-sm font-semibold text-cream shadow-card transition hover:bg-forest-800 sm:text-base"
              >
                <Send size={18} /> Send via WhatsApp
              </motion.button>
              <p className="text-center text-xs text-forest-900/50">
                We don&apos;t run a live chat here — this opens WhatsApp with your message pre-filled.
              </p>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  )
}
