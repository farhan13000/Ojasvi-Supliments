import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Testimonials from '../components/Testimonials'
import CTASection from '../components/CTASection'
import { getFeaturedProduct } from '../data/products'
import { buildProductJsonLd } from '../lib/seoData'

export default function Home() {
  const bestseller = getFeaturedProduct()

  return (
    <>
      <SEO
        title="Ojashvi Supplements | Stamina Booster for Adults – 100% Natural Ayurvedic Supplement"
        description="Ojashvi Strength+ is a 100% natural Ayurvedic stamina booster for adults, crafted with Ashwagandha, Safed Musli, Shilajit, Gokshura & Kesar to support stamina, strength, energy and vitality. Order now on WhatsApp."
        path="/"
        jsonLd={[buildProductJsonLd(bestseller)]}
      />

      <Hero bestseller={bestseller} />
      <Testimonials />
      <CTASection />
    </>
  )
}
