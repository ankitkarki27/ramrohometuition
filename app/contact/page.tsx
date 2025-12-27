import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us | Home Tuition Center Nepal',
  description: 'Contact Home Tuition Center Nepal for quality home tuition services. Call or WhatsApp us for Class 1-10 tuition in Kathmandu, Bhaktapur, and Lalitpur.',
  keywords: 'contact home tuition Nepal, tuition center contact, home tutor Kathmandu contact',
}

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-700">
              Interested parents can contact us directly for fast and reliable support.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}

