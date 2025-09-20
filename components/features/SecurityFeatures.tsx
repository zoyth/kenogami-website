export default function SecurityFeatures() {
  const securityFeatures = [
    {
      title: 'Data Isolation',
      icon: '🏢',
      description: 'Complete tenant isolation ensures your data never mingles with others.',
      details: [
        'Row-level security',
        'Encrypted at rest',
        'Isolated databases available'
      ]
    },
    {
      title: 'Authentication & Access',
      icon: '🔐',
      description: 'Enterprise-grade authentication with multiple security layers.',
      details: [
        'SSO/SAML support',
        'Two-factor authentication',
        'Role-based access control'
      ]
    },
    {
      title: 'Compliance',
      icon: '✅',
      description: 'Meet regulatory requirements with built-in compliance features.',
      details: [
        'GDPR compliant',
        'SOC 2 Type II',
        'HIPAA ready'
      ]
    },
    {
      title: 'Monitoring & Auditing',
      icon: '📊',
      description: 'Complete visibility into all system activities and changes.',
      details: [
        'Comprehensive audit logs',
        'Real-time threat detection',
        'Activity monitoring'
      ]
    },
    {
      title: 'Backup & Recovery',
      icon: '🛡️',
      description: 'Your data is safe with automatic backups and disaster recovery.',
      details: [
        'Daily automated backups',
        'Point-in-time recovery',
        'Multi-region redundancy'
      ]
    },
    {
      title: 'Network Security',
      icon: '🌐',
      description: 'Multiple layers of network protection for maximum security.',
      details: [
        'DDoS protection',
        'Web application firewall',
        'SSL/TLS encryption'
      ]
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Enterprise-Grade Security
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your knowledge is your competitive advantage. We protect it with 
            industry-leading security measures and compliance standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all hover:scale-105">
              <div className="text-3xl mb-4">{feature.icon}</div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {feature.description}
              </p>
              
              <ul className="space-y-2">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Trusted by security-conscious organizations</p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2 text-gray-700">
              <span className="text-2xl">🔒</span>
              <span className="font-semibold">SSL/TLS</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <span className="text-2xl">✅</span>
              <span className="font-semibold">SOC 2</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <span className="text-2xl">🇪🇺</span>
              <span className="font-semibold">GDPR</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <span className="text-2xl">🎯</span>
              <span className="font-semibold">99.9% SLA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}