import SEO from '../components/SEO'
import Breadcrumb from '../components/Breadcrumb'
import FAQ from '../components/FAQ'
import CTASection from '../components/CTASection'
import { buildFaqJsonLd } from '../lib/seoData'

export default function FAQPage() {
  return (
    <>
      <SEO
        title="FAQ | Ojashvi Supplements"
        description="Answers to common questions about Ojashvi Supplements products — usage, ordering, delivery, Cash on Delivery, and safety."
        path="/faq"
        jsonLd={[buildFaqJsonLd()]}
      />

      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'FAQ' }]} />

      <div className="pt-4 sm:pt-8">
        <FAQ />
      </div>
      <CTASection />
    </>
  )
}
