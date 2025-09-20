export default function WritersFeatures() {
  const features = [
    {
      title: 'Version Control',
      description: 'Track every change with Git-based versioning',
      icon: '📀'
    },
    {
      title: 'Localization',
      description: 'Manage translations and regional variations',
      icon: '🌍'
    },
    {
      title: 'API Docs',
      description: 'Auto-generate from OpenAPI/GraphQL schemas',
      icon: '🔧'
    },
    {
      title: 'Search',
      description: 'Full-text search with AI-powered relevance',
      icon: '🔍'
    },
    {
      title: 'Analytics',
      description: 'Track what users read and search for',
      icon: '📊'
    },
    {
      title: 'Feedback',
      description: 'Collect and act on reader feedback',
      icon: '💬'
    },
    {
      title: 'Automation',
      description: 'CI/CD integration for docs-as-code',
      icon: '⚙️'
    },
    {
      title: 'Collaboration',
      description: 'Review workflows and team editing',
      icon: '🤝'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Everything Technical Writers Need
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive features that make documentation a joy to create
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Case Study CTA */}
        <div className="mt-16 bg-gradient-to-br from-brand-powder to-brand-ghost rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            See How DocuCorp Reduced Documentation Time by 80%
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Learn how a team of 5 technical writers manages documentation for 
            over 200 products using Kenogami.
          </p>
          <button className="btn-primary">
            Read Case Study
          </button>
        </div>
      </div>
    </section>
  )
}