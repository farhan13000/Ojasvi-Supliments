export const brand = {
  name: 'Ojasvi Ayurveda',
  tagline: 'Awaken Your Ojas. Naturally.',
  whatsappNumber: '919000000000', // TODO: replace with the real business WhatsApp number (country code + number, no +/spaces)
  email: 'hello@ojasviayurveda.com',
  address: 'Ojasvi Ayurveda Wellness Pvt. Ltd., Jaunpur, Uttar Pradesh, India',
  instagram: 'https://instagram.com/ojasviayurveda',
  facebook: 'https://facebook.com/ojasviayurveda',
}

export const product = {
  id: 'ojasvi-stamina-booster',
  name: 'Ojasvi Stamina Booster',
  subtitle: 'Ayurvedic Vitality Capsules for Adults',
  rating: 4.8,
  ratingCount: 2143,
  shortDescription:
    'A powerful blend of Ashwagandha, Safed Musli, Shilajit, Gokshura & Kesar — formulated to support stamina, strength, energy and everyday vitality, the traditional Ayurvedic way.',
  longDescription:
    'Ojasvi Stamina Booster is crafted for the modern adult who wants to keep up with a demanding life without compromising on natural wellness. Rooted in classical Ayurvedic formulations and made from carefully sourced herbs, each capsule is designed to help replenish Ojas — the vital energy Ayurveda considers the root of stamina, strength and immunity. No fillers, no synthetic hormones — just time-tested botanicals in a modern capsule.',
  disclaimer:
    'This product is a dietary supplement and is not intended to diagnose, treat, cure or prevent any disease. Individual results may vary. Please consult a qualified physician before use, especially if you have an existing medical condition or are on medication.',
  currency: '₹',
  images: {
    alt: 'Ojasvi Stamina Booster — Ayurvedic capsule bottle and box packaging',
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
    {
      icon: 'zap',
      title: 'Boosts Stamina & Energy',
      desc: 'Helps the body build sustained energy for an active, demanding lifestyle.',
    },
    {
      icon: 'shield',
      title: 'Supports Strength & Recovery',
      desc: 'Ashwagandha & Safed Musli traditionally support muscular strength and faster recovery.',
    },
    {
      icon: 'flame',
      title: 'Fights Everyday Fatigue',
      desc: 'A daily ritual to help reduce tiredness and keep you going stronger for longer.',
    },
    {
      icon: 'heart',
      title: 'Vitality & Confidence',
      desc: 'Kaunch Beej and Kesar are used in Ayurveda to support drive, mood and overall vitality.',
    },
    {
      icon: 'leaf',
      title: '100% Natural & Herbal',
      desc: 'No synthetic hormones, no harmful additives — just pure Ayurvedic botanicals.',
    },
    {
      icon: 'moon',
      title: 'Balances Body & Mind',
      desc: 'Adaptogenic herbs help the body adapt to stress for calmer, more balanced energy.',
    },
  ],
  howToUse: [
    { step: '1', title: 'Take Daily', desc: 'Take 2 capsules a day, or as directed by your Ayurvedic physician.' },
    { step: '2', title: 'With Warm Milk / Water', desc: 'Preferably after meals with warm milk or water for best absorption.' },
    { step: '3', title: 'Be Consistent', desc: 'Use consistently for 4–8 weeks to experience the complete Ayurvedic benefit.' },
  ],
  packs: [
    {
      id: 'pack-1',
      label: '1 Bottle',
      subLabel: '30 Capsules · 15 Day Supply',
      qtyBottles: 1,
      price: 899,
      mrp: 1199,
      badge: null,
    },
    {
      id: 'pack-2',
      label: '2 Bottles',
      subLabel: '60 Capsules · 1 Month Supply',
      qtyBottles: 2,
      price: 1599,
      mrp: 2398,
      badge: 'Most Popular',
    },
    {
      id: 'pack-3',
      label: '3 Bottles',
      subLabel: '90 Capsules · 1.5 Month Supply',
      qtyBottles: 3,
      price: 2199,
      mrp: 3597,
      badge: 'Best Value',
    },
  ],
}

export function getDefaultPack() {
  return product.packs.find((p) => p.badge === 'Most Popular') ?? product.packs[0]
}
