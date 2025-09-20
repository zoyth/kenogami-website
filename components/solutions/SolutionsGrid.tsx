import Link from 'next/link'

export default function SolutionsGrid() {
  const solutions = [
    {
      title: 'For SaaS Companies',
      icon: '🚀',
      description: 'Create and maintain product documentation that helps users succeed with your software.',
      features: [
        'Organized documentation structure',
        'Version control for content',
        'Multi-language support',
        'SEO-optimized public site'
      ],
      benefits: [
        { label: 'Centralized Docs', icon: '📚' },
        { label: 'Version Control', icon: '🔄' },
        { label: 'Fast Publishing', icon: '⚡' }
      ],
      link: '/solutions/saas',
      color: 'primary'
    },
    {
      title: 'For Support Teams',
      icon: '🎧',
      description: 'Give your team a single source of truth for accurate, consistent customer support.',
      features: [
        'Easy content search',
        'Article categorization',
        'Team collaboration',
        'Activity tracking'
      ],
      benefits: [
        { label: 'Single Source', icon: '🎯' },
        { label: 'Easy Updates', icon: '✏️' },
        { label: 'Team Access', icon: '👥' }
      ],
      link: '/solutions/support',
      color: 'secondary'
    },
    {
      title: 'For Technical Writers',
      icon: '✍️',
      description: 'Professional markdown editor and publishing tools for technical documentation.',
      features: [
        'Monaco markdown editor',
        'Live preview',
        'Media management',
        'Static site generation'
      ],
      benefits: [
        { label: 'Pro Editor', icon: '💻' },
        { label: 'Live Preview', icon: '👁️' },
        { label: 'Fast Deploy', icon: '🚀' }
      ],
      link: '/solutions/writers',
      color: 'coral'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <div className={`p-6 bg-gradient-to-br ${
                solution.color === 'primary' ? 'from-primary-50 to-primary-100' :
                solution.color === 'secondary' ? 'from-brand-powder to-secondary-100' :
                'from-brand-coral/10 to-brand-coral/20'
              }`}>
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600">
                  {solution.description}
                </p>
              </div>
              
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="border-t pt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Benefits</h4>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {solution.benefits.map((benefit, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl mb-1">{benefit.icon}</div>
                        <div className="text-xs text-gray-600">{benefit.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    href={solution.link}
                    className="block w-full text-center px-6 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Not sure which solution fits your needs?
          </h3>
          <p className="text-gray-600 mb-8">
            Our team can help you identify the best approach for your organization.
          </p>
          <Link 
            href="/contact"
            className="inline-block px-8 py-3 border-2 border-primary-500 text-primary-500 rounded-lg font-medium hover:bg-primary-50 transition-colors"
          >
            Talk to an Expert
          </Link>
        </div>
      </div>
    </section>
  )
}