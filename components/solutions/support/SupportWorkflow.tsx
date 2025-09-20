'use client'

import { useState } from 'react'

export default function SupportWorkflow() {
  const [activeStep, setActiveStep] = useState(0)

  const workflow = [
    {
      step: 1,
      title: 'Ticket Received',
      description: 'Customer submits a support request',
      action: 'Kenogami analyzes ticket content and context',
      time: '0 seconds'
    },
    {
      step: 2,
      title: 'AI Analysis',
      description: 'System processes request with NLP',
      action: 'Identifies intent, urgency, and relevant knowledge',
      time: '< 1 second'
    },
    {
      step: 3,
      title: 'Knowledge Matching',
      description: 'Search across all knowledge sources',
      action: 'Surfaces top solutions with confidence scores',
      time: '1-2 seconds'
    },
    {
      step: 4,
      title: 'Agent Response',
      description: 'Agent reviews and sends solution',
      action: 'One-click response or customize as needed',
      time: '< 30 seconds'
    },
    {
      step: 5,
      title: 'Continuous Learning',
      description: 'System learns from interaction',
      action: 'Updates knowledge base and improves future responses',
      time: 'Automatic'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How Kenogami Accelerates Support
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From ticket to resolution in seconds, not hours
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Workflow Steps */}
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-8 left-8 right-8 h-1 bg-gray-200 hidden md:block">
              <div 
                className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-500"
                style={{ width: `${(activeStep + 1) * 20}%` }}
              ></div>
            </div>
            
            {/* Steps */}
            <div className="relative grid md:grid-cols-5 gap-4">
              {workflow.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className="cursor-pointer"
                >
                  <div className="flex flex-col items-center">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
                      activeStep >= index
                        ? 'bg-gradient-to-br from-primary-500 to-secondary-500 text-white shadow-lg scale-110'
                        : 'bg-white border-2 border-gray-300 text-gray-500'
                    }`}>
                      {item.step}
                    </div>
                    <p className="text-sm font-medium text-gray-700 mt-2 text-center">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Active Step Details */}
          <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-start">
              <div className="bg-primary-100 rounded-full p-3 mr-4">
                <span className="text-2xl">⏱️</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Step {workflow[activeStep].step}: {workflow[activeStep].title}
                </h3>
                <p className="text-gray-600 mb-3">
                  {workflow[activeStep].description}
                </p>
                <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-4">
                  <p className="font-medium text-gray-900 mb-1">Kenogami Action:</p>
                  <p className="text-gray-700">{workflow[activeStep].action}</p>
                </div>
                <div className="mt-4 flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">
                    Time: <span className="text-primary-500">{workflow[activeStep].time}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}