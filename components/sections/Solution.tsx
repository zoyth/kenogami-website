'use client'

import { useState } from 'react'

export default function Solution() {
  const [activeTab, setActiveTab] = useState('organize')

  const features = [
    { 
      id: 'organize', 
      label: 'Organize', 
      icon: '📚',
      title: 'Structured Content Organization',
      description: 'Create a clear hierarchy with products, categories, and articles. Perfect for complex documentation.'
    },
    { 
      id: 'write', 
      label: 'Write', 
      icon: '✍️',
      title: 'Professional Markdown Editor',
      description: 'Monaco-powered editor with live preview, syntax highlighting, and version control built-in.'
    },
    { 
      id: 'translate', 
      label: 'Translate', 
      icon: '🌍',
      title: 'Multi-Language Support',
      description: 'Manage content in multiple languages with built-in translation management and locale switching.'
    },
    { 
      id: 'publish', 
      label: 'Publish', 
      icon: '🚀',
      title: 'One-Click Publishing',
      description: 'Deploy your knowledge base as a fast, SEO-optimized static site with automatic builds.'
    },
  ]

  const activeFeature = features.find(f => f.id === activeTab)

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need in One Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From content creation to publishing, Kenogami provides all the tools you need 
            to build and maintain professional documentation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex justify-center gap-2 mb-8 flex-wrap">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveTab(feature.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    activeTab === feature.id
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-2">{feature.icon}</span>
                  {feature.label}
                </button>
              ))}
            </div>

            {activeFeature && (
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-8">
                <div className="text-center mb-6">
                  <span className="text-4xl mb-4 inline-block">{activeFeature.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {activeFeature.title}
                  </h3>
                  <p className="text-gray-600">
                    {activeFeature.description}
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="h-32 bg-gradient-to-br from-primary-50 to-secondary-50 rounded flex items-center justify-center">
                    <span className="text-gray-500">Feature Preview</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-4">
            Built for teams who take documentation seriously
          </p>
          <a href="/features" className="text-primary-600 hover:text-primary-700 font-medium">
            Explore all features →
          </a>
        </div>
      </div>
    </section>
  )
}