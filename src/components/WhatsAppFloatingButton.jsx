import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { getWhatsAppLink, buildInquiryMessage } from '../lib/whatsapp'

export default function WhatsAppFloatingButton() {
  return (
    <motion.a
      href={getWhatsAppLink(buildInquiryMessage())}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className="focus-ring fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl sm:bottom-6 sm:right-6"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="animate-pulse-ring absolute inset-0 rounded-full bg-[#25D366]" aria-hidden="true" />
      <MessageCircle size={26} className="relative" />
    </motion.a>
  )
}
