import { brand } from '../data/brand'
import { getAvailableProducts, getFeaturedProduct } from '../data/products'
import { faqs } from '../data/faq'

const product = getFeaturedProduct()

export function buildProductJsonLd() {
  const cheapest = [...product.packs].sort((a, b) => a.price - b.price)[0]
  const priciest = [...product.packs].sort((a, b) => b.price - a.price)[0]

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.shortDescription,
    brand: {
      '@type': 'Brand',
      name: brand.name,
    },
    category: 'Ayurvedic Dietary Supplement',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: cheapest.price,
      highPrice: priciest.price,
      offerCount: product.packs.length,
      availability: 'https://schema.org/InStock',
      url: 'https://ojasviayurveda.vercel.app/#product',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.ratingCount,
    },
  }
}

export function buildItemListJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${brand.name} Product Range`,
    itemListElement: getAvailableProducts().map((p, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: p.name,
      url: 'https://ojasviayurveda.vercel.app/#product',
    })),
  }
}

export function buildFaqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  }
}

export function buildBreadcrumbJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://ojasviayurveda.vercel.app/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: product.name,
        item: 'https://ojasviayurveda.vercel.app/#product',
      },
    ],
  }
}
