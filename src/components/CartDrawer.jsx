import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Minus, MessageCircle, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { getProductById } from '../data/products'
import { buildOrderMessage, getWhatsAppLink, validateCustomerDetails } from '../lib/whatsapp'

const fields = [
  { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name', autoComplete: 'name' },
  { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '10-digit mobile number', autoComplete: 'tel' },
  { name: 'address', label: 'Full Address', type: 'textarea', placeholder: 'House no., street, area, landmark', autoComplete: 'street-address' },
]

export default function CartDrawer() {
  const { items, totals, isCartOpen, setCartOpen, updateQty, removeFromCart, customerDetails, updateCustomerDetails } = useCart()
  const [errors, setErrors] = useState({})
  const fieldRefs = useRef({})

  const handleCheckout = () => {
    const { valid, errors: nextErrors } = validateCustomerDetails(customerDetails)
    setErrors(nextErrors)
    if (!valid) {
      const firstInvalid = Object.keys(nextErrors)[0]
      fieldRefs.current[firstInvalid]?.focus()
      return
    }
    const link = getWhatsAppLink(buildOrderMessage(items, customerDetails))
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  const handleFieldChange = (name, value) => {
    updateCustomerDetails({ [name]: value })
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 z-50 bg-forest-950/50 backdrop-blur-sm"
            aria-hidden="true"
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 34 }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-cream shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart"
          >
            <div className="flex shrink-0 items-center justify-between border-b border-forest-900/10 px-5 py-4">
              <h2 className="font-display flex items-center gap-2 text-xl text-forest-950">
                <ShoppingBag size={20} /> Your Cart
              </h2>
              <button
                type="button"
                onClick={() => setCartOpen(false)}
                className="focus-ring flex h-9 w-9 items-center justify-center rounded-full text-forest-900 transition hover:bg-forest-900/5"
                aria-label="Close cart"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-forest-900/5 text-forest-900/40">
                    <ShoppingBag size={28} />
                  </span>
                  <p className="mt-4 font-display text-lg text-forest-950">Your cart is empty</p>
                  <p className="mt-1 text-sm text-forest-900/60">Explore our range to get started.</p>
                  <Link
                    to="/products"
                    onClick={() => setCartOpen(false)}
                    className="focus-ring mt-5 rounded-full bg-forest-900 px-5 py-2.5 text-sm font-semibold text-cream"
                  >
                    Shop Products
                  </Link>
                </div>
              ) : (
                <>
                  <ul className="space-y-4">
                    <AnimatePresence initial={false}>
                      {items.map((item) => (
                        <motion.li
                          key={item.id}
                          layout
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, x: 40 }}
                          transition={{ duration: 0.25 }}
                          className="flex gap-3 rounded-2xl border border-forest-900/10 bg-white/60 p-3"
                        >
                          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-forest-900 text-gold-400">
                            <span className="font-display text-xs">OJ</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-semibold text-forest-950">{getProductById(item.productId)?.name ?? 'Product'}</p>
                            <p className="text-xs text-forest-900/60">{item.label} · {item.subLabel}</p>
                            <div className="mt-2 flex items-center justify-between">
                              <div className="inline-flex items-center rounded-full border border-forest-900/15 bg-white">
                                <button
                                  type="button"
                                  onClick={() => updateQty(item.id, item.qty - 1)}
                                  className="focus-ring flex h-7 w-7 items-center justify-center rounded-full text-forest-900"
                                  aria-label={`Decrease quantity of ${item.label}`}
                                >
                                  <Minus size={12} />
                                </button>
                                <span className="w-6 text-center text-xs font-semibold">{item.qty}</span>
                                <button
                                  type="button"
                                  onClick={() => updateQty(item.id, item.qty + 1)}
                                  className="focus-ring flex h-7 w-7 items-center justify-center rounded-full text-forest-900"
                                  aria-label={`Increase quantity of ${item.label}`}
                                >
                                  <Plus size={12} />
                                </button>
                              </div>
                              <p className="text-sm font-bold text-forest-950">
                                ₹{(item.price * item.qty).toLocaleString('en-IN')}
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="focus-ring self-start text-forest-900/30 transition hover:text-maroon-600"
                            aria-label={`Remove ${item.label} from cart`}
                          >
                            <Trash2 size={16} />
                          </button>
                        </motion.li>
                      ))}
                    </AnimatePresence>
                  </ul>

                  <div className="mt-6 border-t border-forest-900/10 pt-5">
                    <h3 className="text-sm font-semibold text-forest-950">Delivery Details</h3>
                    <p className="mt-1 text-xs text-forest-900/50">
                      So we can confirm availability and get your order to the right address.
                    </p>

                    <div className="mt-4 space-y-3">
                      {fields.map((f) => (
                        <div key={f.name}>
                          <label htmlFor={`cart-${f.name}`} className="text-xs font-medium text-forest-900/70">
                            {f.label}
                          </label>
                          {f.type === 'textarea' ? (
                            <textarea
                              id={`cart-${f.name}`}
                              ref={(el) => (fieldRefs.current[f.name] = el)}
                              value={customerDetails[f.name]}
                              onChange={(e) => handleFieldChange(f.name, e.target.value)}
                              placeholder={f.placeholder}
                              autoComplete={f.autoComplete}
                              rows={2}
                              aria-invalid={Boolean(errors[f.name])}
                              className={`focus-ring mt-1 w-full resize-none rounded-xl border bg-white px-3 py-2 text-sm text-forest-950 placeholder:text-forest-900/30 ${
                                errors[f.name] ? 'border-maroon-500' : 'border-forest-900/15'
                              }`}
                            />
                          ) : (
                            <input
                              id={`cart-${f.name}`}
                              ref={(el) => (fieldRefs.current[f.name] = el)}
                              type={f.type}
                              value={customerDetails[f.name]}
                              onChange={(e) => handleFieldChange(f.name, e.target.value)}
                              placeholder={f.placeholder}
                              autoComplete={f.autoComplete}
                              aria-invalid={Boolean(errors[f.name])}
                              className={`focus-ring mt-1 w-full rounded-xl border bg-white px-3 py-2 text-sm text-forest-950 placeholder:text-forest-900/30 ${
                                errors[f.name] ? 'border-maroon-500' : 'border-forest-900/15'
                              }`}
                            />
                          )}
                          {errors[f.name] && <p className="mt-1 text-xs text-maroon-600">{errors[f.name]}</p>}
                        </div>
                      ))}

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label htmlFor="cart-city" className="text-xs font-medium text-forest-900/70">
                            City
                          </label>
                          <input
                            id="cart-city"
                            ref={(el) => (fieldRefs.current.city = el)}
                            type="text"
                            value={customerDetails.city}
                            onChange={(e) => handleFieldChange('city', e.target.value)}
                            placeholder="City"
                            autoComplete="address-level2"
                            aria-invalid={Boolean(errors.city)}
                            className={`focus-ring mt-1 w-full rounded-xl border bg-white px-3 py-2 text-sm text-forest-950 placeholder:text-forest-900/30 ${
                              errors.city ? 'border-maroon-500' : 'border-forest-900/15'
                            }`}
                          />
                          {errors.city && <p className="mt-1 text-xs text-maroon-600">{errors.city}</p>}
                        </div>
                        <div>
                          <label htmlFor="cart-pincode" className="text-xs font-medium text-forest-900/70">
                            Pincode
                          </label>
                          <input
                            id="cart-pincode"
                            ref={(el) => (fieldRefs.current.pincode = el)}
                            type="text"
                            inputMode="numeric"
                            maxLength={6}
                            value={customerDetails.pincode}
                            onChange={(e) => handleFieldChange('pincode', e.target.value.replace(/\D/g, ''))}
                            placeholder="6-digit"
                            autoComplete="postal-code"
                            aria-invalid={Boolean(errors.pincode)}
                            className={`focus-ring mt-1 w-full rounded-xl border bg-white px-3 py-2 text-sm text-forest-950 placeholder:text-forest-900/30 ${
                              errors.pincode ? 'border-maroon-500' : 'border-forest-900/15'
                            }`}
                          />
                          {errors.pincode && <p className="mt-1 text-xs text-maroon-600">{errors.pincode}</p>}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {items.length > 0 && (
              <div className="shrink-0 border-t border-forest-900/10 px-5 py-5">
                <div className="flex items-center justify-between text-sm text-forest-900/70">
                  <span>You save</span>
                  <span className="font-semibold text-terracotta-600">
                    ₹{totals.savings.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="mt-1 flex items-center justify-between text-base font-bold text-forest-950">
                  <span>Subtotal</span>
                  <span>₹{totals.subtotal.toLocaleString('en-IN')}</span>
                </div>
                <p className="mt-1 text-xs text-forest-900/50">Shipping & COD confirmed on WhatsApp.</p>

                <motion.button
                  type="button"
                  onClick={handleCheckout}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="focus-ring mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-sm font-semibold text-white shadow-card transition hover:bg-[#1ebe57] sm:text-base"
                >
                  <MessageCircle size={18} /> Checkout on WhatsApp
                </motion.button>
                <button
                  type="button"
                  onClick={() => setCartOpen(false)}
                  className="focus-ring mt-2 w-full rounded-full py-2.5 text-sm font-medium text-forest-900/70 transition hover:text-forest-900"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
