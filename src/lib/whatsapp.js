import { brand } from '../data/brand'
import { getProductById } from '../data/products'

function formatCurrency(amount) {
  return `₹${amount.toLocaleString('en-IN')}`
}

export function validateCustomerDetails(details) {
  const errors = {}
  const digits = (details.phone ?? '').replace(/\D/g, '')

  if (!details.name?.trim()) errors.name = 'Please enter your name'
  if (!digits) errors.phone = 'Please enter your phone number'
  else if (digits.slice(-10).length < 10 || !/^[6-9]/.test(digits.slice(-10))) {
    errors.phone = 'Enter a valid 10-digit mobile number'
  }
  if (!details.address?.trim()) errors.address = 'Please enter your delivery address'
  if (!details.city?.trim()) errors.city = 'Please enter your city'
  if (!details.pincode?.trim()) errors.pincode = 'Please enter your pincode'
  else if (!/^\d{6}$/.test(details.pincode.trim())) errors.pincode = 'Enter a valid 6-digit pincode'

  return { valid: Object.keys(errors).length === 0, errors }
}

export function buildOrderMessage(items, details) {
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
    lines.push(`${idx + 1}. ${brand.shortName} ${productName} — ${item.label} (${item.subLabel}) x${item.qty} — ${formatCurrency(lineTotal)}`)
  })

  lines.push('')
  lines.push(`*Total: ${formatCurrency(total)}*`)
  lines.push('')
  lines.push('📍 Delivery Details:')
  lines.push(`Name: ${details.name}`)
  lines.push(`Phone: ${details.phone}`)
  lines.push(`Address: ${details.address}`)
  lines.push(`City: ${details.city}`)
  lines.push(`Pincode: ${details.pincode}`)
  lines.push('')
  lines.push('Please confirm availability, delivery timeline & Cash on Delivery for my location. Thank you!')

  return lines.join('\n')
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
