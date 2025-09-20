export default function SupportSolution() {
  const features = [
    {
      title: 'AI-Powered Answer Suggestions',
      description: 'Get instant, accurate answers powered by machine learning',
      icon: '🤖',
      capabilities: [
        'Natural language understanding',
        'Context-aware responses',
        'Confidence scoring',
        'Multi-language support'
      ]
    },
    {
      title: 'Ticket Intelligence',
      description: 'Turn every ticket into knowledge improvement',
      icon: '🎫',
      capabilities: [
        'Automatic tagging',
        'Pattern detection',
        'Knowledge gap analysis',
        'Resolution tracking'
      ]
    },
    {
      title: 'Team Collaboration',
      description: 'Share knowledge and best practices across your team',
      icon: '👥',
      capabilities: [
        'Internal notes',
        'Expert annotations',
        'Team workspaces',
        'Approval workflows'
      ]
    },
    {
      title: 'Omnichannel Support',
      description: 'Consistent knowledge across all support channels',
      icon: '💬',
      capabilities: [
        'Help desk integration',
        'Chat widget',
        'Email automation',
        'Social media support'
      ]
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Complete Support Knowledge Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything your support team needs to deliver exceptional customer experiences
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200">
              <div className="flex items-start mb-4">
                <span className="text-3xl mr-4">{feature.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
              
              <div className="ml-14">
                <ul className="space-y-2">
                  {feature.capabilities.map((capability, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <svg className="w-4 h-4 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}