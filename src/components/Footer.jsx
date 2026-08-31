import { Mail, MapPin, MessageCircle } from 'lucide-react'
import { brand } from '../data/brand'
import { getFeaturedProduct } from '../data/products'
import { getWhatsAppLink, buildInquiryMessage } from '../lib/whatsapp'
import logo from '../assets/Ojasvi_Suppliments_Logo.png'

const product = getFeaturedProduct()

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M13.5 22v-8.4h2.8l.4-3.3h-3.2V8.1c0-.95.26-1.6 1.63-1.6h1.74V3.5C16.53 3.4 15.6 3.3 14.5 3.3c-2.9 0-4.9 1.77-4.9 5v2H6.8v3.3h2.8V22h3.9Z" />
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-forest-950 pt-16 text-cream/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#top" className="inline-block">
              <img src={logo} alt={brand.name} className="h-16 w-auto" />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">{brand.tagline}</p>
            <div className="mt-5 flex gap-3">
              <a
                href={brand.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ojasvi Ayurveda on Instagram"
                className="focus-ring flex h-9 w-9 items-center justify-center rounded-full bg-cream/10 transition hover:bg-gold-400 hover:text-forest-950"
              >
                <InstagramIcon />
              </a>
              <a
                href={brand.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ojasvi Ayurveda on Facebook"
                className="focus-ring flex h-9 w-9 items-center justify-center rounded-full bg-cream/10 transition hover:bg-gold-400 hover:text-forest-950"
              >
                <FacebookIcon />
              </a>
              <a
                href={getWhatsAppLink(buildInquiryMessage())}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Ojasvi Ayurveda on WhatsApp"
                className="focus-ring flex h-9 w-9 items-center justify-center rounded-full bg-cream/10 transition hover:bg-gold-400 hover:text-forest-950"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-cream">Explore</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="#products" className="transition hover:text-gold-400">Our Products</a></li>
              <li><a href="#product" className="transition hover:text-gold-400">Shop {product.name}</a></li>
              <li><a href="#benefits" className="transition hover:text-gold-400">Benefits</a></li>
              <li><a href="#ingredients" className="transition hover:text-gold-400">Ingredients</a></li>
              <li><a href="#reviews" className="transition hover:text-gold-400">Customer Reviews</a></li>
              <li><a href="#faq" className="transition hover:text-gold-400">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-cream">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold-400" />
                <address className="not-italic">{brand.address}</address>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-gold-400" />
                <a href={`mailto:${brand.email}`} className="transition hover:text-gold-400">{brand.email}</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={16} className="shrink-0 text-gold-400" />
                <a
                  href={getWhatsAppLink(buildInquiryMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-gold-400"
                >
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-cream">Disclaimer</h3>
            <p className="mt-4 text-xs leading-relaxed text-cream/50">{product.disclaimer}</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-cream/10 py-6 text-xs text-cream/50 sm:flex-row">
          <p>&copy; {year} {brand.name}. All rights reserved.</p>
          <p>Made with care, rooted in Ayurveda 🌿</p>
        </div>
      </div>
    </footer>
  )
}
