export default function SaaSFeatures() {
  const features = [
    {
      category: 'Developer Experience',
      items: [
        'OpenAPI/Swagger import',
        'GraphQL schema documentation',
        'SDK code generation',
        'Postman collection sync',
        'Git integration',
        'CI/CD webhooks'
      ]
    },
    {
      category: 'Content Management',
      items: [
        'WYSIWYG & Markdown editors',
        'Component library',
        'Media management',
        'SEO optimization',
        'Multi-language support',
        'Version branching'
      ]
    },
    {
      category: 'User Experience',
      items: [
        'Instant search',
        'AI-powered suggestions',
        'Interactive tutorials',
        'Code playground',
        'Dark mode',
        'Mobile responsive'
      ]
    },
    {
      category: 'Analytics & Insights',
      items: [
        'Search analytics',
        'Page performance',
        'User journeys',
        'Feedback tracking',
        'Gap detection',
        'Custom reports'
      ]
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Everything Your SaaS Needs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive features designed for modern software documentation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((category, index) => (
            <div key={index}>
              <h3 className="font-semibold text-gray-900 mb-4">{category.category}</h3>
              <ul className="space-y-2">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}