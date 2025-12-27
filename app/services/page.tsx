import { Book } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services | Home Tuition Center Nepal - Classes 1-10',
  description: 'Comprehensive home tuition services for Class 1 to 10 covering all subjects including Mathematics, Science, English, Nepali, and Social Studies.',
  keywords: 'home tuition services Nepal, tuition classes Kathmandu, private tutor services, all subjects tuition',
}

export default function Services() {
  const subjects = [
    { name: 'Mathematics', description: 'Building strong mathematical foundations and problem-solving skills' },
    { name: 'Science',  description: 'Understanding scientific concepts through practical examples' },
    { name: 'English', description: 'Improving reading, writing, and communication skills' },
    { name: 'Nepali',description: 'Mastering Nepali language, literature, and grammar' },
    { name: 'Social Studies', description: 'Exploring history, geography, and social sciences' },
    { name: 'Computer',description: 'Learning computer basics and digital literacy' },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-700">
              Comprehensive home tuition services for Class 1 to 10
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-primary-50 p-8 rounded-lg border-l-4 border-primary-600">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Home Tuition for Class 1–10
              </h2>
              <p className="text-lg text-gray-800 leading-relaxed">
                We provide comprehensive home tuition services covering all classes from Class 1 to Class 10. 
                Our experienced teachers work with students at their own pace, ensuring they understand 
                concepts clearly and build confidence in their studies.
              </p>
            </div>
          </div>

          {/* Subjects Section */}
          <div className="max-w-6xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              All Subjects Covered
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subjects.map((subject, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-3"><Book/></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{subject.name}</h3>
                  <p className="text-gray-700">{subject.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Service Types */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Teaching Modes
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* One-to-One Tuition */}
              <div className="bg-accent-50 p-8 rounded-lg border-l-4 border-accent-600">
                <div className="flex items-center mb-4">
                  <div className="bg-accent-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">One-to-One Personal Tuition</h3>
                </div>
                <p className="text-gray-800 leading-relaxed">
                  Individual attention ensures your child gets personalized instruction tailored to their 
                  learning style, pace, and specific needs. This mode is perfect for students who need 
                  extra support or want to excel in specific subjects.
                </p>
              </div>

              {/* Small Group Tuition */}
              <div className="bg-primary-50 p-8 rounded-lg border-l-4 border-primary-600">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Small Group Tuition</h3>
                </div>
                <p className="text-gray-800 leading-relaxed">
                  Small group sessions (if required) allow students to learn together, share ideas, and 
                  benefit from peer interaction while still receiving focused attention from the teacher. 
                  This option is cost-effective and encourages collaborative learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Additional Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Class Schedule</h3>
                    <p className="text-gray-700">
                      Classes are scheduled based on student availability. We work around your family's 
                      schedule to find the most convenient time for learning.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Regular Progress Monitoring</h3>
                    <p className="text-gray-700">
                      We track your child's progress regularly and provide detailed feedback to parents, 
                      ensuring transparency and continuous improvement.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Parent Feedback</h3>
                    <p className="text-gray-700">
                      Regular communication with parents about their child's progress, strengths, 
                      and areas for improvement. We believe in working together for your child's success.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Exam Preparation</h3>
                    <p className="text-gray-700">
                      Special focus on exam preparation with practice tests, revision strategies, 
                      and time management skills to help students perform their best.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

