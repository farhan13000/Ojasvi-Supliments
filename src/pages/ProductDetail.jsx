import { Link, useParams } from 'react-router-dom'
import SEO from '../components/SEO'
import ProductShowcase from '../components/ProductShowcase'
import Benefits from '../components/Benefits'
import Ingredients from '../components/Ingredients'
import HowToUse from '../components/HowToUse'
import { getProductById } from '../data/products'
import { buildProductJsonLd, buildBreadcrumbJsonLd } from '../lib/seoData'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)

  if (!product || product.status !== 'available') {
    return (
      <section className="mx-auto flex min-h-[50vh] max-w-2xl flex-col items-center justify-center px-4 py-24 text-center">
        <h1 className="font-display text-3xl text-forest-950">Product Not Found</h1>
        <p className="mt-3 text-forest-900/70">
          We couldn&apos;t find the product you&apos;re looking for. It may have moved or isn&apos;t available yet.
        </p>
        <Link
          to="/products"
          className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full bg-forest-900 px-6 py-3 text-sm font-semibold text-cream"
        >
          Browse All Products
        </Link>
      </section>
    )
  }

  return (
    <>
      <SEO
        title={`Ojasvi ${product.name} | ${product.subtitle}`}
        description={product.shortDescription}
        path={`/products/${product.id}`}
        jsonLd={[buildProductJsonLd(product), buildBreadcrumbJsonLd(product)]}
      />

      <ProductShowcase key={product.id} product={product} />
      <Benefits product={product} />
      <Ingredients product={product} />
      <HowToUse product={product} />
    </>
  )
}
