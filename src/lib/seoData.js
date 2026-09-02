import { brand } from '../data/brand'
import { getAvailableProducts } from '../data/products'
import { faqs } from '../data/faq'

const SITE_URL = 'https://ojashvisupplements.vercel.app'

export function buildProductJsonLd(product) {
  const cheapest = [...product.packs].sort((a, b) => a.price - b.price)[0]
  const priciest = [...product.packs].sort((a, b) => b.price - a.price)[0]

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.shortDescription,
    image: product.images?.src ? `${SITE_URL}${product.images.src}` : undefined,
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
      url: `${SITE_URL}/products/${product.id}`,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.ratingCount,
    },
    review: {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: product.rating,
        bestRating: '5',
      },
      author: {
        '@type': 'Person',
        name: 'Verified Customer',
      },
    },
  }
}

export function buildOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: brand.name,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: '+91-6388-509-921',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi'],
    },
  }
}

export function buildWebSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: brand.name,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/products?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
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
      url: `${SITE_URL}/products/${p.id}`,
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

export function buildBreadcrumbJsonLd(product) {
  const itemListElement = [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Products', item: `${SITE_URL}/products` },
  ]
  if (product) {
    itemListElement.push({
      '@type': 'ListItem',
      position: 3,
      name: product.name,
      item: `${SITE_URL}/products/${product.id}`,
    })
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement,
  }
}
