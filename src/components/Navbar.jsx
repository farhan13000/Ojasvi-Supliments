import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, ShoppingCart, X } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { brand } from '../data/brand'
import logo from '../assets/Ojasvi_Suppliments_Logo.png'

const links = [
  { href: '#products', label: 'Shop' },
  { href: '#benefits', label: 'Benefits' },
  { href: '#ingredients', label: 'Ingredients' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { totals, setCartOpen } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled ? 'bg-cream/90 shadow-md backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Primary">
        <a href="#top" className="focus-ring inline-flex items-center rounded-xl bg-forest-950 px-3 py-1.5">
          <img src={logo} alt={brand.name} className="h-9 w-auto sm:h-11" />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="focus-ring rounded text-sm font-medium tracking-wide text-forest-900/80 transition hover:text-forest-900"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setCartOpen(true)}
            className="focus-ring relative flex h-10 w-10 items-center justify-center rounded-full bg-forest-900 text-cream transition hover:bg-forest-800"
            aria-label={`Open cart, ${totals.count} item${totals.count === 1 ? '' : 's'}`}
          >
            <ShoppingCart size={18} />
            <AnimatePresence>
              {totals.count > 0 && (
                <motion.span
                  key={totals.count}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-gold-500 px-1 text-[11px] font-bold text-forest-950"
                >
                  {totals.count}
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          <button
            type="button"
            className="focus-ring flex h-10 w-10 items-center justify-center rounded-full text-forest-900 md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-forest-900/10 bg-cream/95 backdrop-blur md:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="focus-ring block rounded-lg px-2 py-2.5 text-base font-medium text-forest-900"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
