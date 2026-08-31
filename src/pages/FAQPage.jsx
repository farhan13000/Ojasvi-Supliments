import SEO from '../components/SEO'
import FAQ from '../components/FAQ'
import CTASection from '../components/CTASection'
import { buildFaqJsonLd } from '../lib/seoData'

export default function FAQPage() {
  return (
    <>
      <SEO
        title="FAQ | Ojasvi Ayurveda"
        description="Answers to common questions about Ojasvi Ayurveda products — usage, ordering, delivery, Cash on Delivery, and safety."
        path="/faq"
        jsonLd={[buildFaqJsonLd()]}
      />

      <div className="pt-4 sm:pt-8">
        <FAQ />
      </div>
      <CTASection />
    </>
  )
}
