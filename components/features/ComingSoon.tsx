export default function ComingSoon() {
  const upcomingFeatures = [
    {
      icon: '🤖',
      title: 'Advanced AI Intelligence',
      description: 'Transform documents into atomic knowledge units with deep learning',
      quarter: 'Q2 2024'
    },
    {
      icon: '🔍',
      title: 'Semantic Search',
      description: 'Natural language search that understands context and intent',
      quarter: 'Q2 2024'
    },
    {
      icon: '📊',
      title: 'Knowledge Gap Detection',
      description: 'Automatically identify missing or outdated documentation',
      quarter: 'Q3 2024'
    },
    {
      icon: '🔗',
      title: 'Third-Party Integrations',
      description: 'Connect with Slack, Teams, Zendesk, and more',
      quarter: 'Q3 2024'
    },
    {
      icon: '🎯',
      title: 'Advanced Analytics',
      description: 'Deep insights into content performance and user behavior',
      quarter: 'Q4 2024'
    },
    {
      icon: '🤝',
      title: 'Collaboration Workflows',
      description: 'Review processes, approvals, and team collaboration features',
      quarter: 'Q4 2024'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-primary-700 bg-primary-100 rounded-full">
            Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Coming Soon
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're continuously improving Kenogami with new features based on customer feedback. 
            Here's what's on our roadmap.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-secondary-400"></div>
              
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{feature.icon}</span>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {feature.quarter}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-primary-50 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Have a Feature Request?
          </h3>
          <p className="text-gray-600 mb-6">
            We'd love to hear your ideas! Help shape the future of Kenogami.
          </p>
          <button className="btn-primary">
            Submit Feature Request
          </button>
        </div>
      </div>
    </section>
  )
}