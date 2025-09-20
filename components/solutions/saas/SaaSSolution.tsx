'use client'

import { useState } from 'react'

export default function SaaSSolution() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      title: 'API Documentation',
      description: 'Interactive API docs that developers love',
      details: [
        'Auto-generate from OpenAPI/Swagger specs',
        'Live API playground with real responses',
        'Code examples in multiple languages',
        'Automatic version syncing'
      ],
      image: '🔧'
    },
    {
      title: 'User Guides',
      description: 'Step-by-step guides that reduce support tickets',
      details: [
        'Visual workflow builders',
        'Embedded videos and GIFs',
        'Progressive disclosure for complexity',
        'Search-driven navigation'
      ],
      image: '📝'
    },
    {
      title: 'In-App Help',
      description: 'Contextual help right where users need it',
      details: [
        'Widget SDK for your application',
        'Smart content suggestions',
        'Usage analytics and insights',
        'Feedback collection'
      ],
      image: '💡'
    },
    {
      title: 'Release Notes',
      description: 'Keep users informed about changes',
      details: [
        'Automated changelog generation',
        'Targeted announcements',
        'Version comparison tools',
        'Subscribe for updates'
      ],
      image: '📢'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            The Kenogami Solution for SaaS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete documentation platform designed specifically for modern SaaS products
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`p-4 rounded-lg cursor-pointer transition-all ${
                    activeFeature === index
                      ? 'bg-primary-50 border-2 border-primary-500'
                      : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">{feature.image}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {features[activeFeature].title}
              </h3>
              <p className="text-gray-600 mb-6">
                {features[activeFeature].description}
              </p>
              <ul className="space-y-3">
                {features[activeFeature].details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}