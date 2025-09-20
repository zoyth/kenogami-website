'use client'

import { useState } from 'react'

export default function WritersTools() {
  const [activeTab, setActiveTab] = useState('editor')

  const tools = [
    {
      id: 'editor',
      label: 'Smart Editor',
      icon: '✍️',
      features: [
        'Monaco-based editor with IntelliSense',
        'Live markdown preview',
        'Syntax highlighting for 100+ languages',
        'Auto-save and version control',
        'Collaborative editing',
        'Custom snippets and templates'
      ]
    },
    {
      id: 'components',
      label: 'Component Library',
      icon: '🧩',
      features: [
        'Reusable content blocks',
        'Custom variables and conditionals',
        'Dynamic content inclusion',
        'Cross-reference management',
        'Automatic table of contents',
        'Smart glossary terms'
      ]
    },
    {
      id: 'quality',
      label: 'Quality Tools',
      icon: '✅',
      features: [
        'Grammar and spell check',
        'Style guide enforcement',
        'Broken link detection',
        'Readability scoring',
        'SEO optimization',
        'Accessibility checks'
      ]
    },
    {
      id: 'publishing',
      label: 'Publishing',
      icon: '🚀',
      features: [
        'One-click multi-format export',
        'Custom themes and branding',
        'Automated PDF generation',
        'Static site generation',
        'API documentation',
        'Release notes automation'
      ]
    }
  ]

  const activeTool = tools.find(tool => tool.id === activeTab)

  return (
    <section className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Professional Tools for Professional Writers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to create world-class technical documentation
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tools.map((tool) => (
              <button
                key={tool.id}
                onClick={() => setActiveTab(tool.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                  activeTab === tool.id
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span>{tool.icon}</span>
                {tool.label}
              </button>
            ))}
          </div>
          
          {/* Active Tool Features */}
          {activeTool && (
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {activeTool.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-primary-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}