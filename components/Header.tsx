'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { HiMenu, HiX, HiPhone } from 'react-icons/hi'
import { Button } from '@/components/ui/button'
import TopBanner from '@/components/TopBanner'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const phoneNumber = '+977-9823645664' 
  const whatsappNumber = '+977-9823645664'

  return (
    <>
      <TopBanner />
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/80 border-b border-gray-200/50 shadow-sm">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2"><Image src="/logo2.png" alt="Ramro Home Tuition" width={46} height={46} className="flex-shrink-0" priority={true} /><span className="text-base font-semibold text-gray-900 whitespace-nowrap leading-tight">Ramro Home Tuition</span></Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              <Link 
                href="/" 
                className="px-3 py-2 text-sm text-gray-700 hover:text-primary-600 hover:bg-primary-50/50 font-normal rounded-lg transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="px-3 py-2 text-sm text-gray-700 hover:text-primary-600 hover:bg-primary-50/50 font-normal rounded-lg transition-colors"
              >
                About
              </Link>
              <Link 
                href="/services" 
                className="px-3 py-2 text-sm text-gray-700 hover:text-primary-600 hover:bg-primary-50/50 font-normal rounded-lg transition-colors"
              >
                Services
              </Link>
              <Link 
                href="/why-choose-us" 
                className="px-3 py-2 text-sm text-gray-700 hover:text-primary-600 hover:bg-primary-50/50 font-normal rounded-lg transition-colors"
              >
                Why Us
              </Link>
              <Link 
                href="/contact" 
                className="px-3 py-2 text-sm text-gray-700 hover:text-primary-600 hover:bg-primary-50/50 font-normal rounded-lg transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Phone Number - Desktop */}
            <div className="hidden lg:flex items-center space-x-2">
              <Button asChild size="sm" variant="outline" className="shadow-md">
                <a href={`tel:${phoneNumber}`}>
                  <HiPhone className="w-4 h-4" />
                  {phoneNumber}
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-700 hover:text-primary-600 hover:bg-gray-100/50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <HiX className="w-5 h-5" />
              ) : (
                <HiMenu className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              <nav className="flex flex-col space-y-1">
                <Link 
                  href="/" 
                  className="px-4 py-2 text-sm text-gray-700 hover:text-primary-600 hover:bg-primary-50/50 font-normal rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  className="px-4 py-2 text-sm text-gray-700 hover:text-primary-600 hover:bg-primary-50/50 font-normal rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link 
                  href="/services" 
                  className="px-4 py-2 text-sm text-gray-700 hover:text-primary-600 hover:bg-primary-50/50 font-normal rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Services
                </Link>
                <Link 
                  href="/why-choose-us" 
                  className="px-4 py-2 text-sm text-gray-700 hover:text-primary-600 hover:bg-primary-50/50 font-normal rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Why Choose Us
                </Link>
                <Link 
                  href="/contact" 
                  className="px-4 py-2 text-sm text-gray-700 hover:text-primary-600 hover:bg-primary-50/50 font-normal rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
                <Button asChild size="sm" variant="default" className="mt-2 shadow-md" onClick={() => setIsMenuOpen(false)}>
                  <a href={`tel:${phoneNumber}`}>
                    <HiPhone className="w-4 h-4" />
                    {phoneNumber}
                  </a>
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  )
}