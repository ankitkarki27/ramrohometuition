import Link from 'next/link'
import type { Metadata } from 'next'
import { HiPhone } from 'react-icons/hi'
import { FaWhatsapp, FaBook, FaFileAlt, FaShieldAlt, FaClock, FaDollarSign, FaMapMarkerAlt, FaGraduationCap, FaBookmark, FaBookOpen } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BookOpen, PenTool, Lightbulb, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ramro Home Tuition | Quality Education Classes 1-10 in Kathmandu Valley',
  description: 'Quality home tuition Offline and Online for Class 1 to 10 in Kathmandu, Bhaktapur, and Lalitpur. Experienced teachers, flexible timing, affordable fees. Contact us now!',
  keywords: 'home tuition in Kathmandu, home tutor in Bhaktapur, tuition classes in Lalitpur, Class 1-10 home tuition Nepal',
}

export default function Home() {
  const phoneNumber = '+977-9823645664'
  const whatsappNumber = '+977-9823645664'

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-primary-50/20 to-accent-50/10 section-padding">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <Badge variant="success" className="gap-2 px-4 py-1.5 text-xs">
                <FaGraduationCap className="w-3.5 h-3.5" />
                <span>Trusted by Parents in Kathmandu Valley</span>
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-relaxed">
              Quality Home Tuition for{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary-600">Classes 1–10</span>
              </span>
              {' '}in Kathmandu Valley
            </h1>

            <p className="text-base sm:text-lg md:text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Experienced teachers | Flexible timing | Affordable fees
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Button asChild size="lg" variant="default">
                <a href={`tel:${phoneNumber}`}>
                  <HiPhone className="w-4 h-4" />
                  Call Now
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="w-4 h-4" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Parents Trust Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Class 1–10 Coverage */}
            <Card className="border-primary-100/50 bg-primary-50/30 hover:shadow-lg hover:border-primary-200 transition-all">
              <CardContent className="p-6">
                <div className="bg-primary-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-md">
                  <FaGraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Class 1–10 Coverage</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Complete curriculum support for all school levels
                </p>
              </CardContent>
            </Card>

            {/* Qualified Teachers */}
            <Card className="border-primary-100/50 bg-primary-50/30 hover:shadow-lg hover:border-primary-200 transition-all">
              <CardContent className="p-6">
                <div className="bg-primary-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-md">
                  <FaShieldAlt className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Qualified Teachers</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Experienced and friendly educators
                </p>
              </CardContent>
            </Card>

            {/* Flexible Timing */}
            <Card className="border-accent-100/50 bg-accent-50/30 hover:shadow-lg hover:border-accent-200 transition-all">
              <CardContent className="p-6">
                <div className="bg-accent-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-md">
                  <FaClock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexible Timing</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Classes at your preferred schedule
                </p>
              </CardContent>
            </Card>

            {/* Affordable Fees */}
            <Card className="border-primary-100/50 bg-primary-50/30 hover:shadow-lg hover:border-primary-200 transition-all">
              <CardContent className="p-6">
                <div className="bg-primary-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-md">
                  <FaDollarSign className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Affordable Fees</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Quality education at fair prices
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

            {/* All Subjects Covered Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - All Subjects */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                All Subjects Covered
              </h2>
              <p className="text-gray-600 mb-4">
                Our qualified teachers provide comprehensive tuition for all major subjects, ensuring your child gets the support they need to excel.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <Badge className="bg-primary-100 text-primary-700 border border-primary-200">Online Available</Badge>
                <Badge className="bg-accent-100 text-accent-700 border border-accent-200">Offline Available</Badge>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {['Mathematics', 'Science', 'English', 'Nepali', 'Social Studies', 'Computer'].map((subject) => (
                  <div key={subject} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-primary-300 transition-all flex items-center justify-center gap-3">
                    {/* <FaBook className="h-5 w-5 text-primary-600 flex-shrink-0" /> */}
                    <p className="text-sm font-semibold text-gray-700">{subject}</p>
                  </div>
                ))}
              </div>

              <Button variant="outline" className='mt-4'>  <Link 
              href="/services" >View All Services</Link></Button>
            </div>
            
            {/* Right Column - Get Started CTA */}
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Get Started Today!</h3>
              <p className="text-primary-100 mb-6 leading-relaxed">
                Contact us now to find the perfect tutor for your child. We'll match you with an experienced teacher based on your requirements.
              </p>
              <div className="bg-white/10 rounded-lg p-4 mb-6 backdrop-blur-sm">
                <p className="text-lg font-semibold mb-3">Call Us Now</p>
                <p className="text-2xl font-bold">{phoneNumber}</p>
              </div>
              <div className="flex flex-col gap-3">
                <Button asChild size="lg" variant="outline" className="bg-white text-primary-600 border-white hover:bg-gray-100">
                  <a href={`tel:${phoneNumber}`}>
                    <HiPhone className="w-5 h-5" />
                    Call Now
                  </a>
                </Button>
                <Button asChild size="lg" className=" text-white border" variant="default">
                  <a href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="w-5 h-5" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            What Parents Say
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Hear from parents who have trusted us with their children's education
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "My son's math grades improved significantly. The teacher is very patient and explains concepts clearly.",
                author: "Sita Sharma",
                location: "Kathmandu",
                initials: "S",
                rating: 5
              },
              {
                quote: "Excellent service! The flexible timing helped us manage our daughter's tuition alongside her school.",
                author: "Ram Thapa",
                location: "Bhaktapur",
                initials: "R",
                rating: 5
              },
              {
                quote: "Trustworthy and reliable. The regular progress updates keep us informed about our child's learning.",
                author: "Gita Adhikari",
                location: "Lalitpur",
                initials: "G",
                rating: 5
              }
            ].map((review, idx) => (
              <Card key={idx} className="bg-white border-gray-200 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-gray-900 italic mb-4 leading-relaxed">"{review.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-semibold">
                      {review.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{review.author}</p>
                      <p className="text-sm text-gray-600">{review.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-accent-50/30 to-white border-t border-gray-200/50">
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Get Started Today!
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Contact us now to find the perfect tutor for your child. We'll match you with an experienced teacher based on your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="default">
              <a href={`tel:${phoneNumber}`}>
                <HiPhone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
