'use client'

import { useState } from 'react'

export default function AdminFeatures() {
  const [activeTab, setActiveTab] = useState('editor')

  const tabs = [
    {
      id: 'editor',
      label: 'Content Editor',
      icon: '✏️',
      content: {
        title: 'Monaco-Powered Markdown Editor',
        description: 'Professional-grade editing experience with IntelliSense, syntax highlighting, and live preview.',
        features: [
          'Real-time markdown preview',
          'Syntax highlighting',
          'Auto-save and version control',
          'Image upload and management',
          'Code block formatting',
          'Table editor'
        ],
        image: '/images/editor-preview.png'
      }
    },
    {
      id: 'workflow',
      label: 'Workflow Management',
      icon: '⚡',
      content: {
        title: 'Streamlined Content Workflows',
        description: 'Manage content lifecycle from draft to publication with approval chains and collaboration tools.',
        features: [
          'Draft, review, publish states',
          'Approval workflows',
          'Team collaboration',
          'Scheduled publishing',
          'Audit trails',
          'Role-based permissions'
        ],
        image: '/images/workflow-preview.png'
      }
    },
    {
      id: 'dashboard',
      label: 'Admin Dashboard',
      icon: '📊',
      content: {
        title: 'Comprehensive Admin Control',
        description: 'Material UI-powered dashboard for complete control over your knowledge base platform.',
        features: [
          'User management',
          'Content analytics',
          'System health monitoring',
          'Bulk operations',
          'Export/import tools',
          'API management'
        ],
        image: '/images/dashboard-preview.png'
      }
    }
  ]

  const activeContent = tabs.find(tab => tab.id === activeTab)?.content

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Powerful Admin Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything your team needs to create, manage, and optimize knowledge content efficiently.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg shadow-md p-1 inline-flex">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-md font-medium transition-all flex items-center ${
                    activeTab === tab.id
                      ? 'bg-primary-500 text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content Display */}
          {activeContent && (
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {activeContent.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 mb-6">
                    {activeContent.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {activeContent.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-6 h-6 text-primary-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 flex items-center justify-center">
                  <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                    <div className="h-64 bg-gray-200 rounded animate-pulse"></div>
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