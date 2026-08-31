import { brand } from '../data/brand'
import { getProductById } from '../data/products'

function formatCurrency(amount) {
  return `₹${amount.toLocaleString('en-IN')}`
}

export function buildOrderMessage(items) {
  const lines = []
  lines.push(`Hello ${brand.name}! 🌿`)
  lines.push('')
  lines.push("I'd like to place an order:")
  lines.push('')

  let total = 0
  items.forEach((item, idx) => {
    const lineTotal = item.price * item.qty
    total += lineTotal
    const productName = getProductById(item.productId)?.name ?? ''
    lines.push(`${idx + 1}. Ojasvi ${productName} — ${item.label} (${item.subLabel}) x${item.qty} — ${formatCurrency(lineTotal)}`)
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

export function buildQuickOrderMessage(product, pack) {
  return buildOrderMessage([{ ...pack, productId: product.id, qty: pack.qty ?? 1 }])
}

export function buildInquiryMessage() {
  return `Hello ${brand.name}! 🌿 I have a question before I order. Could you help me?`
}

export function buildComingSoonInquiryMessage(productName) {
  return `Hello ${brand.name}! 🌿 Please notify me when ${productName} launches.`
}

export function buildContactMessage({ name, phone, message }) {
  const lines = [`Hello ${brand.name}! 🌿`, '']
  if (name) lines.push(`Name: ${name}`)
  if (phone) lines.push(`Phone: ${phone}`)
  lines.push('')
  lines.push(message || "I'd like to get in touch.")
  return lines.join('\n')
}

export function getWhatsAppLink(message) {
  return `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(message)}`
}
