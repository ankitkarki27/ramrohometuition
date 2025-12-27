import Link from 'next/link'
import { HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  const phoneNumber = '+977-9823645664'
  const whatsappNumber = '+977-9823645664'

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Ramro Home Tuition</h3>
            <p className="text-sm leading-relaxed">
              Quality home tuition service for Class 1 to 10 in Kathmandu Valley. 
              We provide experienced teachers, flexible timing, and affordable fees.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/why-choose-us" className="hover:text-white transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <HiLocationMarker className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Service Areas:</p>
                  <p>Kathmandu, Bhaktapur, Lalitpur</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <HiPhone className="w-5 h-5 flex-shrink-0" />
                <a 
                  href={`tel:${phoneNumber}`}
                  className="hover:text-white transition-colors font-semibold"
                >
                  {phoneNumber}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaWhatsapp className="w-5 h-5 flex-shrink-0" />
                <a 
                  href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors font-semibold"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Ramro Home Tuition. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
