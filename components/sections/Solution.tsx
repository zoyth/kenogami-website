'use client'

import { useState } from 'react'

export default function Solution() {
  const [activeFormat, setActiveFormat] = useState('article')

  const formats = [
    { id: 'article', label: 'Help Article', icon: '📄' },
    { id: 'api', label: 'API Docs', icon: '🔧' },
    { id: 'chatbot', label: 'Chatbot Flow', icon: '💬' },
    { id: 'tooltip', label: 'In-App Help', icon: '💡' },
  ]

  const formatContent = {
    article: {
      title: 'How to Reset Your Password',
      content: 'Follow these simple steps to reset your password:\n\n1. Click "Forgot Password" on the login page\n2. Enter your email address\n3. Check your email for reset link\n4. Create a new password\n\nThe link expires in 1 hour for security.',
    },
    api: {
      title: 'POST /api/auth/password-reset',
      content: '{\n  "email": "user@example.com"\n}\n\n// Response\n{\n  "success": true,\n  "message": "Reset link sent",\n  "expires_in": 3600\n}',
    },
    chatbot: {
      title: 'Password Reset Flow',
      content: 'Bot: "I can help you reset your password!"\nBot: "What\'s your email address?"\nUser: "user@example.com"\nBot: "Great! I\'ve sent a reset link."\nBot: "It expires in 1 hour."',
    },
    tooltip: {
      title: 'Quick Help Tooltip',
      content: '💡 Forgot your password?\n\nClick here to receive a reset link via email. The link expires in 1 hour.',
    },
  }

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Introducing Intelligent Knowledge
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            One source of truth, infinite expressions. Your knowledge adapts to each user's context, 
            role, and preferred format automatically.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex justify-center gap-2 mb-8">
              {formats.map((format) => (
                <button
                  key={format.id}
                  onClick={() => setActiveFormat(format.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    activeFormat === format.id
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-2">{format.icon}</span>
                  {format.label}
                </button>
              ))}
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {formatContent[activeFormat as keyof typeof formatContent].title}
              </h3>
              <pre className="whitespace-pre-wrap text-gray-700 font-mono text-sm">
                {formatContent[activeFormat as keyof typeof formatContent].content}
              </pre>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 mb-2">
                All generated from the same knowledge unit:
              </p>
              <code className="bg-primary-50 text-primary-700 px-3 py-1 rounded text-sm">
                knowledge_unit: password_reset_procedure
              </code>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-4">
            Powered by Kenogami's Knowledge Intelligence Core
          </p>
          <a href="/features/atomic-knowledge" className="text-primary-600 hover:text-primary-700 font-medium">
            Learn how it works →
          </a>
        </div>
      </div>
    </section>
  )
}