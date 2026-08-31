import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, MessageCircle, Minus, Plus, ShoppingCart, Star } from 'lucide-react'
import Product360 from './Product360'
import { useCart } from '../context/CartContext'
import { getDefaultPack } from '../data/products'
import { buildQuickOrderMessage, getWhatsAppLink } from '../lib/whatsapp'

export default function ProductShowcase({ product }) {
  const [selectedPack, setSelectedPack] = useState(getDefaultPack(product))
  const [qty, setQty] = useState(1)
  const { addToCart, justAdded } = useCart()

  const discount = Math.round(((selectedPack.mrp - selectedPack.price) / selectedPack.mrp) * 100)

  return (
    <section id="product" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2 lg:gap-10">
          <div className="lg:sticky lg:top-28 flex justify-center">
            <Product360 product={product} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-terracotta-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-terracotta-600">
              For Adult Men &amp; Women
            </span>

            <h1 className="font-display mt-3 text-3xl text-forest-950 sm:text-4xl">{product.name}</h1>
            <p className="mt-1 text-base text-forest-900/60">{product.subtitle}</p>

            <div className="mt-3 flex items-center gap-2">
              <div className="flex text-gold-500" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className={i < Math.round(product.rating) ? 'fill-gold-500' : ''} />
                ))}
              </div>
              <span className="text-sm text-forest-900/70">
                {product.rating} · {product.ratingCount.toLocaleString('en-IN')} reviews
              </span>
            </div>

            <p className="mt-5 max-w-lg leading-relaxed text-forest-900/80">{product.longDescription}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {product.badges.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-1 rounded-full border border-forest-900/15 bg-white/60 px-3 py-1 text-xs font-medium text-forest-900"
                >
                  <Check size={12} className="text-forest-700" /> {b}
                </span>
              ))}
            </div>

            {/* Pack selector */}
            <fieldset className="mt-8">
              <legend className="text-sm font-semibold text-forest-950">Choose Your Pack</legend>
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {product.packs.map((pack) => {
                  const active = pack.id === selectedPack.id
                  return (
                    <button
                      key={pack.id}
                      type="button"
                      onClick={() => setSelectedPack(pack)}
                      className={`focus-ring relative rounded-2xl border-2 p-4 text-left transition ${
                        active
                          ? 'border-forest-900 bg-forest-900 text-cream shadow-card'
                          : 'border-forest-900/15 bg-white/60 text-forest-950 hover:border-forest-900/40'
                      }`}
                      aria-pressed={active}
                    >
                      {pack.badge && (
                        <span className="absolute -top-2.5 left-3 rounded-full bg-gold-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-forest-950">
                          {pack.badge}
                        </span>
                      )}
                      <p className="font-display text-lg">{pack.label}</p>
                      <p className={`mt-0.5 text-xs ${active ? 'text-cream/70' : 'text-forest-900/60'}`}>{pack.subLabel}</p>
                      <p className="mt-2 flex items-baseline gap-1.5">
                        <span className="text-lg font-bold">
                          {product.currency}
                          {pack.price.toLocaleString('en-IN')}
                        </span>
                        <span className={`text-xs line-through ${active ? 'text-cream/50' : 'text-forest-900/40'}`}>
                          {product.currency}
                          {pack.mrp.toLocaleString('en-IN')}
                        </span>
                      </p>
                    </button>
                  )
                })}
              </div>
            </fieldset>

            {/* Quantity + actions */}
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center rounded-full border border-forest-900/20 bg-white/70">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="focus-ring flex h-11 w-11 items-center justify-center rounded-full text-forest-900 transition hover:bg-forest-900/5"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="w-8 text-center text-sm font-semibold text-forest-950" aria-live="polite">
                  {qty}
                </span>
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.min(9, q + 1))}
                  className="focus-ring flex h-11 w-11 items-center justify-center rounded-full text-forest-900 transition hover:bg-forest-900/5"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>

              <p className="text-sm text-forest-900/70">
                <span className="font-bold text-terracotta-600">{discount}% OFF</span> · You pay{' '}
                <span className="font-bold text-forest-950">
                  {product.currency}
                  {(selectedPack.price * qty).toLocaleString('en-IN')}
                </span>
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => addToCart({ ...selectedPack, productId: product.id }, qty)}
                className="focus-ring relative inline-flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-full bg-forest-900 px-6 py-4 text-sm font-semibold text-cream shadow-card transition hover:bg-forest-800 sm:text-base"
              >
                <AnimatePresence mode="wait">
                  {justAdded ? (
                    <motion.span
                      key="added"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="inline-flex items-center gap-2"
                    >
                      <Check size={18} /> Added to Cart
                    </motion.span>
                  ) : (
                    <motion.span
                      key="add"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="inline-flex items-center gap-2"
                    >
                      <ShoppingCart size={18} /> Add to Cart
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              <motion.a
                href={getWhatsAppLink(buildQuickOrderMessage(product, { ...selectedPack, qty }))}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="focus-ring inline-flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-forest-700 bg-[#25D366]/10 px-6 py-4 text-sm font-semibold text-forest-900 transition hover:bg-[#25D366]/20 sm:text-base"
              >
                <MessageCircle size={18} className="text-[#128C7E]" /> Buy Now on WhatsApp
              </motion.a>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-forest-900/50">{product.disclaimer}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
