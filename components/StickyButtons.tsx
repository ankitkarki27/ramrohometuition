'use client'

import { HiPhone } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'
import { Button } from '@/components/ui/button'

export default function StickyButtons() {
  const phoneNumber = '+977-9823645664'
  const whatsappNumber = '+977-9823645664'

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col space-y-3">
      <Button
        asChild
        size="icon"
        variant="default"
        className="rounded-full shadow-lg hover:shadow-xl h-12 w-12"
      >
        <a href={`tel:${phoneNumber}`} aria-label="Call Now">
          <HiPhone className="w-2 h-2" />
        </a>
      </Button>
      <Button
        asChild
        size="icon"
        variant="secondary"
        className="rounded-full shadow-lg hover:shadow-xl h-12 w-12"
      >
        <a
          href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Us"
        >
          <FaWhatsapp className="w-12 h-12" />
        </a>
      </Button>
    </div>
  )
}
