import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Home Tuition Center Nepal',
  description: 'Learn about our dedicated home tuition service providing quality education for Class 1 to 10 in Kathmandu, Bhaktapur, and Lalitpur.',
  keywords: 'about home tuition Nepal, tuition center Kathmandu, qualified teachers Nepal',
}

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Us
            </h1>
            <p className="text-xl text-gray-700">
              Dedicated to providing quality education for students in Kathmandu Valley
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="bg-primary-50 p-8 rounded-lg mb-8 border-l-4 border-primary-600">
                <p className="text-lg text-gray-800 leading-relaxed mb-4">
                  We are a dedicated home tuition service providing quality education for students from 
                  <strong className="text-primary-700"> Class 1 to Class 10</strong> in 
                  <strong className="text-primary-700"> Kathmandu, Bhaktapur, and Lalitpur</strong>.
                </p>
                <p className="text-lg text-gray-800 leading-relaxed">
                  Our goal is to help students understand concepts clearly, improve academic performance, 
                  and gain confidence in their studies.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary-600 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Qualified Teachers</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    We carefully select qualified and experienced teachers who teach in a friendly 
                    and student-focused manner. Each teacher is committed to understanding your 
                    child's learning style and adapting their teaching approach accordingly.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className="bg-accent-600 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Affordable Education</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    We believe that quality education should be affordable. Our transparent pricing 
                    structure ensures that parents know exactly what they're paying for, with no 
                    hidden fees or surprises.
                  </p>
                </div>
              </div>

              <div className="bg-accent-50 p-8 rounded-lg border-l-4 border-accent-600">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h3>
                <p className="text-lg text-gray-800 leading-relaxed mb-4">
                  Our flexible timing makes learning convenient for both students and parents. 
                  We understand that every family has different schedules, and we work with you 
                  to find the best time for your child's learning.
                </p>
                <p className="text-lg text-gray-800 leading-relaxed">
                  We are committed to building a strong foundation for your child's academic success, 
                  helping them not just pass exams, but truly understand and enjoy learning. 
                  Your child's success is our success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            What We Stand For
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Trust & Reliability</h3>
              <p className="text-gray-700">
                Trusted by parents across Kathmandu Valley for our consistent, reliable service.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Education</h3>
              <p className="text-gray-700">
                Focused on concept clarity and helping students achieve their academic goals.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Student-Focused</h3>
              <p className="text-gray-700">
                Every student is unique, and we adapt our teaching to meet their individual needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

