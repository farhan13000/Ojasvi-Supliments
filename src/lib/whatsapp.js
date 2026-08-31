import { brand, product } from '../data/product'

function formatCurrency(amount) {
  return `${product.currency}${amount.toLocaleString('en-IN')}`
}

export function buildOrderMessage(items) {
  const lines = []
  lines.push(`Hello ${brand.name}! 🌿`)
  lines.push('')
  lines.push("I'd like to place an order for Ojasvi Stamina Booster:")
  lines.push('')

  let total = 0
  items.forEach((item, idx) => {
    const lineTotal = item.price * item.qty
    total += lineTotal
    lines.push(`${idx + 1}. ${item.label} (${item.subLabel}) x${item.qty} — ${formatCurrency(lineTotal)}`)
  })

  lines.push('')
  lines.push(`*Total: ${formatCurrency(total)}*`)
  lines.push('')
  lines.push('📍 Please share your delivery details:')
  lines.push('Name: ')
  lines.push('Full Address: ')
  lines.push('City & Pincode: ')
  lines.push('Phone Number: ')
  lines.push('')
  lines.push('Please confirm availability, delivery timeline & Cash on Delivery for my location. Thank you!')

  return lines.join('\n')
}

export function buildQuickOrderMessage(pack) {
  return buildOrderMessage([{ ...pack, qty: 1 }])
}

export function buildInquiryMessage() {
  return `Hello ${brand.name}! 🌿 I have a question about the Ojasvi Stamina Booster before I order. Could you help me?`
}

export function getWhatsAppLink(message) {
  return `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(message)}`
}
