// Product catalog. Every entry here is a complete, purchasable product —
// add more by copying this shape; the /products grid, product detail
// pages, cart and structured data all pick new entries up automatically.

import strengthPlusImage from '../assets/strength-plus.webp'

export const products = [
  {
    id: 'strength-plus',
    status: 'available',
    name: 'Strength+',
    subtitle: 'Ayurvedic Stamina Booster for Adults',
    category: 'Stamina & Vitality',
    rating: 4.8,
    ratingCount: 2143,
    shortDescription:
      'A proprietary blend of 17 powerful Ayurvedic herbs — including Ashwagandha, Safed Musli, Shilajit, Gokshura & Kesar — formulated to support stamina, strength, energy and everyday vitality, the traditional Ayurvedic way.',
    longDescription:
      'Ojashvi Strength+ is crafted for the modern adult who wants to keep up with a demanding life without compromising on natural wellness. Built on 17 powerful Ayurvedic herbs and rooted in classical formulations, each capsule is designed to help replenish Ojas — the vital energy Ayurveda considers the root of stamina, strength and immunity. No fillers, no synthetic hormones — just time-tested botanicals in a modern capsule.',
    disclaimer:
      'This product is a dietary supplement and is not intended to diagnose, treat, cure or prevent any disease. Individual results may vary. Please consult a qualified physician before use, especially if you have an existing medical condition or are on medication.',
    currency: '₹',
    netQuantity: '30 Capsules per bottle (Nutraceutical)',
    storageInstructions: 'Store in a cool, dry place away from direct sunlight. Keep out of reach of children.',
    images: {
      src: strengthPlusImage,
      alt: 'Ojashvi Strength+ — Ayurvedic stamina booster capsule bottle, 30 capsules, 17 powerful herbs',
    },
    badges: ['17 Powerful Herbs', 'AYUSH Compliant', '100% Herbal', 'GMP Certified Facility'],
    ingredientsNote: 'Featured herbs from our proprietary blend of 17 Ayurvedic botanicals:',
    highlights: [
      { label: 'Ashwagandha', desc: 'Root extract for strength & stress resilience' },
      { label: 'Safed Musli', desc: 'Traditional herb for stamina & recovery' },
      { label: 'Shilajit', desc: 'Himalayan mineral resin for energy' },
      { label: 'Gokshura', desc: 'Supports endurance & drive' },
      { label: 'Kesar (Saffron)', desc: 'Mood & vitality support' },
      { label: 'Kaunch Beej', desc: 'Mucuna Pruriens for confidence & vigor' },
    ],
    benefits: [
      { icon: 'zap', title: 'Boosts Stamina & Energy', desc: 'Helps the body build sustained energy for an active, demanding lifestyle.' },
      { icon: 'shield', title: 'Supports Strength & Recovery', desc: 'Ashwagandha & Safed Musli traditionally support muscular strength and faster recovery.' },
      { icon: 'flame', title: 'Fights Everyday Fatigue', desc: 'A daily ritual to help reduce tiredness and keep you going stronger for longer.' },
      { icon: 'heart', title: 'Vitality & Confidence', desc: 'Kaunch Beej and Kesar are used in Ayurveda to support drive, mood and overall vitality.' },
      { icon: 'leaf', title: '100% Natural & Herbal', desc: 'No synthetic hormones, no harmful additives — just pure Ayurvedic botanicals.' },
      { icon: 'moon', title: 'Balances Body & Mind', desc: 'Adaptogenic herbs help the body adapt to stress for calmer, more balanced energy.' },
    ],
    howToUse: [
      { step: '1', title: 'Take Daily', desc: 'Take 2 capsules a day, or as directed by your Ayurvedic physician.' },
      { step: '2', title: 'With Warm Milk / Water', desc: 'Preferably after meals with warm milk or water for best absorption.' },
      { step: '3', title: 'Be Consistent', desc: 'Use consistently for 4–8 weeks to experience the complete Ayurvedic benefit.' },
    ],
    packs: [
      { id: 'strength-1', label: '1 Bottle', subLabel: '30 Capsules · 15 Day Supply', qtyBottles: 1, price: 899, mrp: 1199, badge: null },
      { id: 'strength-2', label: '2 Bottles', subLabel: '60 Capsules · 1 Month Supply', qtyBottles: 2, price: 1599, mrp: 2398, badge: 'Most Popular' },
      { id: 'strength-3', label: '3 Bottles', subLabel: '90 Capsules · 1.5 Month Supply', qtyBottles: 3, price: 2199, mrp: 3597, badge: 'Best Value' },
    ],
  },
]

export function getFeaturedProduct() {
  return products.find((p) => p.status === 'available') ?? products[0]
}

export function getAvailableProducts() {
  return products.filter((p) => p.status === 'available')
}

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getDefaultPack(product) {
  return product.packs.find((p) => p.badge === 'Most Popular') ?? product.packs[0]
}
