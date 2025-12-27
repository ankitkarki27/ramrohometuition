'use client'

import { motion } from 'framer-motion'

export default function WhyChooseUs() {
  const benefits = [
    {
      title: 'Qualified and Experienced Teachers',
      description: 'Our teachers are carefully selected based on their qualifications, teaching experience, and passion for education. They understand the curriculum and know how to make learning engaging and effective.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      color: 'primary'
    },
    {
      title: 'Student-Friendly Teaching Approach',
      description: 'We believe learning should be enjoyable. Our teachers use friendly, patient, and encouraging methods that help students feel comfortable asking questions and making mistakes as part of learning.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'accent'
    },
    {
      title: 'Flexible Timing as Per Student Convenience',
      description: 'We understand that families have busy schedules. Our flexible timing allows you to choose class times that work best for your child, whether it\'s early morning, afternoon, or evening.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'primary'
    },
    {
      title: 'Affordable and Transparent Fees',
      description: 'Quality education should be accessible to all families. We offer competitive, transparent pricing with no hidden fees. You know exactly what you\'re paying for, and we work to keep our services affordable.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'accent'
    },
    {
      title: 'Focus on Concept Clarity and Exam Preparation',
      description: 'We don\'t just help students memorize - we ensure they truly understand concepts. Combined with targeted exam preparation, this approach helps students perform better in exams and retain knowledge long-term.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      color: 'primary'
    },
    {
      title: 'Trusted by Parents in Kathmandu Valley',
      description: 'We have built a reputation for reliability and quality service across Kathmandu, Bhaktapur, and Lalitpur. Many parents recommend us to their friends and family because they trust us with their children\'s education.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: 'accent'
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Us
            </h1>
            <p className="text-xl text-gray-700">
              Discover what makes us the trusted choice for home tuition in Kathmandu Valley
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg border-2 ${
                  benefit.color === 'primary'
                    ? 'bg-primary-50 border-primary-200 hover:border-primary-400'
                    : 'bg-accent-50 border-accent-200 hover:border-accent-400'
                } transition-all hover:shadow-lg`}
              >
                <div
                  className={`w-16 h-16 rounded-lg flex items-center justify-center mb-4 ${
                    benefit.color === 'primary' ? 'bg-primary-600 text-white' : 'bg-accent-600 text-white'
                  }`}
                >
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
                Your Child's Success is Our Priority
              </h2>
              <div className="space-y-6 text-lg text-gray-700">
                <p className="leading-relaxed">
                  When you choose us, you're choosing a partner in your child's educational journey. 
                  We understand that every child is unique, with different learning styles, strengths, 
                  and challenges. That's why we take a personalized approach to teaching.
                </p>
                <p className="leading-relaxed">
                  Our commitment goes beyond just teaching the curriculum. We focus on building your 
                  child's confidence, encouraging curiosity, and developing critical thinking skills 
                  that will serve them well beyond their school years.
                </p>
                <p className="leading-relaxed font-semibold text-primary-700">
                  Join the many families in Kathmandu Valley who trust us with their children's education. 
                  Contact us today to see how we can help your child succeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1-10</div>
              <div className="text-primary-100">Classes Covered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">6+</div>
              <div className="text-primary-100">Subjects</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">3</div>
              <div className="text-primary-100">Cities Served</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-primary-100">Dedicated</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

