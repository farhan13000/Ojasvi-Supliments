import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Leaf, ListChecks, ShieldAlert } from 'lucide-react'

function getSections(product) {
  return [
    {
      id: 'ingredients',
      title: 'Ingredients',
      icon: Leaf,
      content: (
        <div>
          {product.ingredientsNote && (
            <p className="mb-3 text-sm leading-relaxed text-forest-900/70">{product.ingredientsNote}</p>
          )}
          <ul className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
            {product.highlights.map((h) => (
              <li key={h.label} className="flex items-start gap-2 text-sm text-forest-900/80">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                <span>
                  <strong className="font-semibold text-forest-950">{h.label}</strong> — {h.desc}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      id: 'usage',
      title: 'How to Use',
      icon: ListChecks,
      content: (
        <ol className="space-y-2.5">
          {product.howToUse.map((s) => (
            <li key={s.step} className="flex gap-2.5 text-sm text-forest-900/80">
              <span className="font-display shrink-0 text-forest-950">{s.step}.</span>
              <span>
                <strong className="font-semibold text-forest-950">{s.title}:</strong> {s.desc}
              </span>
            </li>
          ))}
        </ol>
      ),
    },
    {
      id: 'safety',
      title: 'Storage & Safety Information',
      icon: ShieldAlert,
      content: (
        <div className="space-y-2 text-sm leading-relaxed text-forest-900/70">
          {product.netQuantity && (
            <p>
              <strong className="font-semibold text-forest-950">Net Quantity:</strong> {product.netQuantity}
            </p>
          )}
          {product.storageInstructions && (
            <p>
              <strong className="font-semibold text-forest-950">Storage:</strong> {product.storageInstructions}
            </p>
          )}
          <p className="text-xs">{product.disclaimer}</p>
        </div>
      ),
    },
  ]
}

export default function ProductInfo({ product }) {
  const sections = getSections(product)
  const [openId, setOpenId] = useState('ingredients')

  return (
    <div className="mt-8 divide-y divide-forest-900/10 rounded-2xl border border-forest-900/10 bg-white/50">
      {sections.map((s) => {
        const isOpen = s.id === openId
        const Icon = s.icon
        return (
          <div key={s.id}>
            <h3>
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : s.id)}
                aria-expanded={isOpen}
                className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="inline-flex items-center gap-2.5 text-sm font-semibold text-forest-950">
                  <Icon size={16} className="text-forest-700" /> {s.title}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="shrink-0 text-forest-700"
                >
                  <ChevronDown size={16} />
                </motion.span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5">{s.content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
