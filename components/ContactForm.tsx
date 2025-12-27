'use client'

import { useState } from 'react'
import { HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function ContactForm() {
  const phoneNumber = '+977-9823645664'
  const whatsappNumber = '+977-9823645664'

  const [formData, setFormData] = useState({
    parentName: '',
    phoneNumber: '',
    studentClass: '',
    location: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // In a real application, you would send this data to your backend
    // For now, we'll simulate a submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        parentName: '',
        phoneNumber: '',
        studentClass: '',
        location: '',
        message: ''
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    }, 1000)
  }

  return (
    <div className="grid md:grid-cols-2 gap-12">
      {/* Contact Form */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="parentName" className="block text-sm font-semibold text-gray-700 mb-2">
              Parent Name *
            </label>
            <input
              type="text"
              id="parentName"
              name="parentName"
              required
              value={formData.parentName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              required
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
              placeholder="+977-XXXXXXXXXX"
            />
          </div>

          <div>
            <label htmlFor="studentClass" className="block text-sm font-semibold text-gray-700 mb-2">
              Student Class *
            </label>
            <select
              id="studentClass"
              name="studentClass"
              required
              value={formData.studentClass}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
            >
              <option value="">Select Class</option>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(grade => (
                <option key={grade} value={`Class ${grade}`}>Class {grade}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
              Location *
            </label>
            <select
              id="location"
              name="location"
              required
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
            >
              <option value="">Select Location</option>
              <option value="Kathmandu">Kathmandu</option>
              <option value="Bhaktapur">Bhaktapur</option>
              <option value="Lalitpur">Lalitpur</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none"
              placeholder="Tell us about your child's needs..."
            />
          </div>

          {submitStatus === 'success' && (
            <div className="bg-accent-50 border border-accent-200 text-accent-800 px-4 py-3 rounded-lg">
              Thank you! We'll contact you soon.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
              Something went wrong. Please try again or call us directly.
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full shadow-md"
            size="lg"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </div>

      {/* Contact Information */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
        <div className="space-y-6">
          <Card className="border-primary-100/50 bg-primary-50/30">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-600 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                  <HiPhone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Phone</p>
                  <a 
                    href={`tel:${phoneNumber}`}
                    className="text-primary-600 hover:text-primary-700 font-semibold text-lg"
                  >
                    {phoneNumber}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-accent-600 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                  <FaWhatsapp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">WhatsApp</p>
                  <a 
                    href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-600 hover:text-accent-700 font-semibold text-lg"
                  >
                    {whatsappNumber}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary-600 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                  <HiLocationMarker className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Service Areas</p>
                  <p className="text-gray-700">Kathmandu, Bhaktapur, Lalitpur</p>
                </div>
              </div>
            </div>
          </CardContent>
          </Card>

          <Card className="border-accent-100/50 bg-accent-50/30">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Contact</h3>
              <p className="text-gray-700 mb-4 text-sm">
                For immediate assistance, call us or send a WhatsApp message. We're here to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="default" className="shadow-md" size="lg">
                  <a href={`tel:${phoneNumber}`}>
                    <HiPhone className="w-5 h-5" />
                    Call Now
                  </a>
                </Button>
                <Button asChild variant="secondary" className="shadow-md" size="lg">
                  <a href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="w-5 h-5" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

