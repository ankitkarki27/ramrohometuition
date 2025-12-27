'use client'

import { useState } from 'react'
import { HiX, HiPhone, HiMail } from 'react-icons/hi'

export default function TopBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  const phoneNumber = '+977-9823645664'
  const email = 'info@ramrohometuition.com'

  return (
    <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white text-xs sm:text-sm">
      <div className="flex items-center justify-center sm:justify-between gap-2 sm:gap-4 px-3 sm:px-4 py-2 sm:py-3 flex-wrap">
        <div className="flex items-center gap-2 sm:gap-4 justify-center sm:justify-start flex-wrap">
          <a
            href={`tel:${phoneNumber}`}
            className="flex items-center gap-1 sm:gap-2 hover:text-primary-100 transition-colors whitespace-nowrap"
          >
            <HiPhone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="hidden sm:inline">{phoneNumber}</span>
            <span className="sm:hidden">+977-9823645664</span>
          </a>
          <div className="hidden sm:block w-px h-3 bg-primary-400"></div>
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-1 sm:gap-2 hover:text-primary-100 transition-colors whitespace-nowrap"
          >
            <HiMail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="hidden sm:inline">{email}</span>
            <span className="sm:hidden">Email</span>
          </a>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="p-0.5 hover:bg-primary-500 rounded transition-colors flex-shrink-0"
          aria-label="Close banner"
        >
          <HiX className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  )
}
