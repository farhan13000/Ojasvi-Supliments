import { Helmet } from 'react-helmet-async'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductShowcase from './components/ProductShowcase'
import Benefits from './components/Benefits'
import Ingredients from './components/Ingredients'
import HowToUse from './components/HowToUse'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton'
import { buildProductJsonLd, buildFaqJsonLd, buildBreadcrumbJsonLd } from './lib/seoData'

export default function App() {
  return (
    <CartProvider>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(buildProductJsonLd())}</script>
        <script type="application/ld+json">{JSON.stringify(buildFaqJsonLd())}</script>
        <script type="application/ld+json">{JSON.stringify(buildBreadcrumbJsonLd())}</script>
      </Helmet>

      <Navbar />
      <main>
        <Hero />
        <ProductShowcase />
        <Benefits />
        <Ingredients />
        <HowToUse />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
      <CartDrawer />
      <WhatsAppFloatingButton />
    </CartProvider>
  )
}
