import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Testimonials from '../components/Testimonials'
import CTASection from '../components/CTASection'
import { getFeaturedProduct } from '../data/products'
import { buildProductJsonLd, buildOrganizationJsonLd, buildWebSiteJsonLd } from '../lib/seoData'

export default function Home() {
  const bestseller = getFeaturedProduct()

  return (
    <>
      <SEO
        title="Ojashvi Supplements | Ayurvedic Stamina Booster & Vitality"
        description="Ojashvi Strength+ is a 100% natural Ayurvedic stamina booster for adults, crafted with Ashwagandha, Safed Musli, Shilajit, Gokshura & Kesar. Order now on WhatsApp."
        path="/"
        jsonLd={[buildProductJsonLd(bestseller), buildOrganizationJsonLd(), buildWebSiteJsonLd()]}
      />

      <Hero bestseller={bestseller} />
      <Testimonials />
      <CTASection />
    </>
  )
}
