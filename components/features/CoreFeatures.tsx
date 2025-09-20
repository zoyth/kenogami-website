export default function CoreFeatures() {
  const features = [
    {
      icon: '🏢',
      title: 'Multi-Tenant Architecture',
      description: 'Complete tenant isolation with subdomain and custom domain support. Each customer gets their own branded knowledge base.',
      benefits: ['Data isolation', 'Custom subdomains', 'Tenant branding'],
      status: 'available'
    },
    {
      icon: '📝',
      title: 'Content Management System',
      description: 'Full-featured CMS with markdown editor, live preview, and version control for all your documentation.',
      benefits: ['Monaco editor', 'Live preview', 'Version history'],
      status: 'available'
    },
    {
      icon: '🌍',
      title: 'Multi-Language Support',
      description: 'Built-in internationalization for content and UI, supporting global teams and customers.',
      benefits: ['Content translations', 'UI localization', 'Multiple languages'],
      status: 'available'
    },
    {
      icon: '🔐',
      title: 'Authentication & Security',
      description: 'JWT-based authentication with role-based access control and secure session management.',
      benefits: ['Secure JWT auth', 'Role management', 'Activity tracking'],
      status: 'available'
    },
    {
      icon: '🤖',
      title: 'AI-Powered Features',
      description: 'Smart content enhancement with AI-generated summaries, keywords, and translations.',
      benefits: ['Auto summaries', 'Smart keywords', 'AI translations'],
      status: 'beta'
    },
    {
      icon: '🚀',
      title: 'Static Site Generation',
      description: 'Build and deploy your knowledge base as a static site for maximum performance.',
      benefits: ['Fast loading', 'CDN ready', 'SEO optimized'],
      status: 'available'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Enterprise-Ready Platform Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built for scale, designed for simplicity. Everything you need to manage 
            documentation across your entire organization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group hover:scale-105 transition-transform duration-300">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all p-6 h-full relative border border-gray-100">
                {feature.status === 'beta' && (
                  <span className="absolute top-4 right-4 px-2 py-1 bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-800 text-xs font-semibold rounded">
                    BETA
                  </span>
                )}
                <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {feature.description}
                </p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700">{benefit}</span>
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