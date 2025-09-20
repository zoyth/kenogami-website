export default function IntegrationFeatures() {
  const integrations = [
    {
      category: 'Communication',
      items: [
        { name: 'Slack', icon: '💬', status: 'available' },
        { name: 'Microsoft Teams', icon: '👥', status: 'available' },
        { name: 'Discord', icon: '🎮', status: 'coming' }
      ]
    },
    {
      category: 'Development',
      items: [
        { name: 'GitHub', icon: '🐱', status: 'available' },
        { name: 'GitLab', icon: '🦊', status: 'available' },
        { name: 'Jira', icon: '🎯', status: 'available' }
      ]
    },
    {
      category: 'Analytics',
      items: [
        { name: 'Google Analytics', icon: '📊', status: 'available' },
        { name: 'Mixpanel', icon: '📈', status: 'coming' },
        { name: 'Segment', icon: '🔄', status: 'coming' }
      ]
    },
    {
      category: 'Support',
      items: [
        { name: 'Zendesk', icon: '🎫', status: 'available' },
        { name: 'Intercom', icon: '💬', status: 'available' },
        { name: 'Freshdesk', icon: '🌱', status: 'coming' }
      ]
    }
  ]

  const apiFeatures = [
    { name: 'RESTful API', description: 'Complete REST API for all operations' },
    { name: 'GraphQL', description: 'Flexible GraphQL endpoint for custom queries' },
    { name: 'Webhooks', description: 'Real-time event notifications' },
    { name: 'SDK Libraries', description: 'Native SDKs for popular languages' }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Seamless Integrations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect Kenogami with your existing tools and workflows. 
            Build custom integrations with our powerful API.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Integration Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {integrations.map((category, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">{category.category}</h3>
                <div className="space-y-3">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{item.icon}</span>
                        <span className="text-gray-700">{item.name}</span>
                      </div>
                      {item.status === 'coming' && (
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Soon</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* API Section */}
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Powerful Developer API</h3>
              <p className="text-blue-50 max-w-2xl mx-auto">
                Build custom integrations and automate workflows with our comprehensive API
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {apiFeatures.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-semibold mb-2">{feature.name}</h4>
                  <p className="text-blue-50 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button className="bg-white text-primary-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                View API Documentation
              </button>
            </div>
          </div>

          {/* Custom Integration CTA */}
          <div className="mt-16 text-center bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Don't see your tool?
            </h3>
            <p className="text-gray-600 mb-6">
              We're constantly adding new integrations. Let us know what you need, 
              or build your own with our API.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors">
                Request Integration
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                API Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}