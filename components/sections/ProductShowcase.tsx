'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState('publisher')

  const products = [
    {
      id: 'publisher',
      name: 'Knowledge Publisher',
      status: 'Available Now',
      statusColor: 'bg-green-100 text-green-800',
      description: 'Multi-tenant knowledge base with built-in intelligence',
      features: [
        'Beautiful, responsive design',
        'Intelligent search',
        'Multi-language support',
        'Custom branding',
        'Analytics dashboard',
      ],
      image: '/images/publisher-preview.png',
      link: '/product/publisher',
    },
    {
      id: 'assistant',
      name: 'AI Assistant',
      status: 'Available Now',
      statusColor: 'bg-blue-100 text-blue-800',
      description: 'Knowledge-grounded conversations that actually help',
      features: [
        'Natural language understanding',
        'Multi-turn conversations',
        'Escalation to human',
        'Multi-channel support',
        'Sentiment analysis',
      ],
      image: '/images/assistant-preview.png',
      link: '/product/assistant',
    },
    {
      id: 'analytics',
      name: 'Analytics Dashboard',
      status: 'Coming Q4 2025',
      statusColor: 'bg-purple-100 text-purple-800',
      description: 'See what\'s missing before users complain',
      features: [
        'Gap detection',
        'Usage analytics',
        'Search insights',
        'Content performance',
        'ROI tracking',
      ],
      image: '/images/analytics-preview.png',
      link: '/product/analytics',
    },
  ]

  const activeProduct = products.find(p => p.id === activeTab)

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The Kenogami Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A complete suite of applications powered by our Knowledge Intelligence Core
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg shadow-md p-1 inline-flex">
              {products.map((product) => (
                <button
                  key={product.id}
                  onClick={() => setActiveTab(product.id)}
                  className={`px-6 py-3 rounded-md font-medium transition-all ${
                    activeTab === product.id
                      ? 'bg-primary-500 text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {product.name}
                </button>
              ))}
            </div>
          </div>

          {/* Product Display */}
          {activeProduct && (
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8">
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${activeProduct.statusColor}`}>
                      {activeProduct.status}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {activeProduct.name}
                  </h3>
                  
                  <p className="text-lg text-gray-600 mb-6">
                    {activeProduct.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {activeProduct.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href={activeProduct.link}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Learn More
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                
                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 flex items-center justify-center">
                  <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-sm">
                    <div className="h-48 bg-gray-200 rounded animate-pulse mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}