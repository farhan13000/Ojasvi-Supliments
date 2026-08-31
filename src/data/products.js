// Product catalog. Every entry here is a complete, purchasable product —
// add more by copying this shape; the /products grid, product detail
// pages, cart and structured data all pick new entries up automatically.

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
      'A powerful blend of Ashwagandha, Safed Musli, Shilajit, Gokshura & Kesar — formulated to support stamina, strength, energy and everyday vitality, the traditional Ayurvedic way.',
    longDescription:
      'Ojasvi Strength+ is crafted for the modern adult who wants to keep up with a demanding life without compromising on natural wellness. Rooted in classical Ayurvedic formulations and made from carefully sourced herbs, each capsule is designed to help replenish Ojas — the vital energy Ayurveda considers the root of stamina, strength and immunity. No fillers, no synthetic hormones — just time-tested botanicals in a modern capsule.',
    disclaimer:
      'This product is a dietary supplement and is not intended to diagnose, treat, cure or prevent any disease. Individual results may vary. Please consult a qualified physician before use, especially if you have an existing medical condition or are on medication.',
    currency: '₹',
    images: {
      alt: 'Ojasvi Strength+ — Ayurvedic capsule bottle and box packaging',
    },
    badges: ['100% Ayurvedic', 'No Side Effects Reported', 'GMP Certified Facility', 'AYUSH Compliant Labelling'],
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
  {
    id: 'focus-plus',
    status: 'available',
    name: 'Focus+',
    subtitle: 'Ayurvedic Clarity & Calm Focus',
    category: 'Mind & Clarity',
    rating: 4.7,
    ratingCount: 856,
    shortDescription:
      'Brahmi, Shankhpushpi, Jyotishmati & Jatamansi — a calming, non-stimulant Ayurvedic blend to support sustained focus and mental clarity through the day.',
    longDescription:
      'Ojasvi Focus+ is built for minds that are always "on" — long work hours, constant screens, endless decisions. Rather than a caffeine-style jolt, it leans on classical Medhya Rasayana herbs traditionally used in Ayurveda to support memory, concentration and a calm, clear state of mind. No stimulants, no jitters, no crash — just steady mental clarity, capsule by capsule.',
    disclaimer:
      'This product is a dietary supplement and is not intended to diagnose, treat, cure or prevent any disease. Individual results may vary. Please consult a qualified physician before use, especially if you have an existing medical condition or are on medication.',
    currency: '₹',
    images: {
      alt: 'Ojasvi Focus+ — Ayurvedic capsule bottle and box packaging',
    },
    badges: ['100% Ayurvedic', 'Non-Stimulant', 'GMP Certified Facility', 'AYUSH Compliant Labelling'],
    highlights: [
      { label: 'Brahmi', desc: 'Classical herb for memory & mental clarity' },
      { label: 'Shankhpushpi', desc: 'Traditionally used to support calm focus' },
      { label: 'Jyotishmati', desc: 'Supports concentration & cognitive stamina' },
      { label: 'Jatamansi', desc: 'Calms the mind, eases mental fatigue' },
      { label: 'Vacha', desc: 'Supports clarity of thought' },
      { label: 'Ashwagandha', desc: 'Adaptogen for stress resilience' },
    ],
    benefits: [
      { icon: 'sparkles', title: 'Sharper Mental Clarity', desc: 'Brahmi & Vacha are classically used to support clear, focused thinking.' },
      { icon: 'shield', title: 'Calm Under Pressure', desc: 'Jatamansi & Ashwagandha help the mind stay steady through demanding days.' },
      { icon: 'flame', title: 'Fights Mental Fatigue', desc: 'A daily ritual to help reduce brain fog through long work stretches.' },
      { icon: 'heart', title: 'Supports Memory', desc: 'Shankhpushpi and Jyotishmati are traditionally used to support recall and concentration.' },
      { icon: 'leaf', title: '100% Natural, Non-Stimulant', desc: 'No caffeine, no synthetic nootropics — just Ayurvedic botanicals.' },
      { icon: 'moon', title: 'Calm, Not Wired', desc: 'Formulated for steady focus without the jitters or crash of stimulants.' },
    ],
    howToUse: [
      { step: '1', title: 'Take Daily', desc: 'Take 2 capsules a day, or as directed by your Ayurvedic physician.' },
      { step: '2', title: 'Morning & Evening', desc: 'Preferably with warm water or milk, once after breakfast and once after dinner.' },
      { step: '3', title: 'Be Consistent', desc: 'Use consistently for 4–8 weeks to experience the complete Ayurvedic benefit.' },
    ],
    packs: [
      { id: 'focus-1', label: '1 Bottle', subLabel: '30 Capsules · 15 Day Supply', qtyBottles: 1, price: 749, mrp: 999, badge: null },
      { id: 'focus-2', label: '2 Bottles', subLabel: '60 Capsules · 1 Month Supply', qtyBottles: 2, price: 1349, mrp: 1998, badge: 'Most Popular' },
      { id: 'focus-3', label: '3 Bottles', subLabel: '90 Capsules · 1.5 Month Supply', qtyBottles: 3, price: 1899, mrp: 2997, badge: 'Best Value' },
    ],
  },
  {
    id: 'immunity-plus',
    status: 'available',
    name: 'Immunity+',
    subtitle: 'Ayurvedic Daily Immunity Support',
    category: 'Immunity',
    rating: 4.6,
    ratingCount: 1024,
    shortDescription:
      'Giloy, Amla, Tulsi & Turmeric — a daily Ayurvedic blend to support your body’s natural defenses through changing seasons and busy schedules.',
    longDescription:
      'Ojasvi Immunity+ brings together the herbs Ayurveda has relied on for generations to support the body’s natural resilience — Giloy for daily defense, Amla for antioxidant support, Tulsi for respiratory wellness, and Turmeric with black pepper for absorption. Built as a simple daily ritual, not a when-you’re-sick fix, so your body stays prepared through the year.',
    disclaimer:
      'This product is a dietary supplement and is not intended to diagnose, treat, cure or prevent any disease. Individual results may vary. Please consult a qualified physician before use, especially if you have an existing medical condition or are on medication.',
    currency: '₹',
    images: {
      alt: 'Ojasvi Immunity+ — Ayurvedic capsule bottle and box packaging',
    },
    badges: ['100% Ayurvedic', 'No Side Effects Reported', 'GMP Certified Facility', 'AYUSH Compliant Labelling'],
    highlights: [
      { label: 'Giloy (Guduchi)', desc: 'Classical herb for daily immune support' },
      { label: 'Amla', desc: 'Natural Vitamin C & antioxidant support' },
      { label: 'Tulsi', desc: 'Supports respiratory & seasonal wellness' },
      { label: 'Turmeric + Piperine', desc: 'Curcumin with black pepper for absorption' },
      { label: 'Mulethi', desc: 'Soothes the throat, supports wellness' },
      { label: 'Ashwagandha', desc: 'Adaptogen for overall resilience' },
    ],
    benefits: [
      { icon: 'shield', title: 'Daily Immune Support', desc: 'Giloy and Ashwagandha are classically used to support the body’s natural defenses.' },
      { icon: 'leaf', title: 'Antioxidant Support', desc: 'Amla is a natural source of Vitamin C and antioxidants.' },
      { icon: 'sparkles', title: 'Seasonal Wellness', desc: 'Tulsi is traditionally used to support respiratory comfort through changing seasons.' },
      { icon: 'flame', title: 'Better Absorption', desc: 'Turmeric paired with Piperine for improved curcumin bioavailability.' },
      { icon: 'heart', title: 'Everyday Resilience', desc: 'A simple daily ritual designed for consistent, year-round support.' },
      { icon: 'moon', title: '100% Natural & Herbal', desc: 'No synthetic additives — just traditional Ayurvedic botanicals.' },
    ],
    howToUse: [
      { step: '1', title: 'Take Daily', desc: 'Take 2 capsules a day, or as directed by your Ayurvedic physician.' },
      { step: '2', title: 'With Warm Water', desc: 'Preferably after breakfast with warm water for best absorption.' },
      { step: '3', title: 'Be Consistent', desc: 'Use daily through the season for the complete Ayurvedic benefit.' },
    ],
    packs: [
      { id: 'immunity-1', label: '1 Bottle', subLabel: '30 Capsules · 15 Day Supply', qtyBottles: 1, price: 649, mrp: 899, badge: null },
      { id: 'immunity-2', label: '2 Bottles', subLabel: '60 Capsules · 1 Month Supply', qtyBottles: 2, price: 1199, mrp: 1798, badge: 'Most Popular' },
      { id: 'immunity-3', label: '3 Bottles', subLabel: '90 Capsules · 1.5 Month Supply', qtyBottles: 3, price: 1699, mrp: 2697, badge: 'Best Value' },
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
