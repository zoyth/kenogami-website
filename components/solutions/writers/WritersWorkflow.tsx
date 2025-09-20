export default function WritersWorkflow() {
  const workflow = [
    {
      phase: 'Plan',
      icon: '📋',
      activities: [
        'Define documentation structure',
        'Create content outlines',
        'Set up templates and style guides',
        'Plan release schedule'
      ]
    },
    {
      phase: 'Write',
      icon: '✍️',
      activities: [
        'Draft content in smart editor',
        'Use component library',
        'Add code examples',
        'Include media and diagrams'
      ]
    },
    {
      phase: 'Review',
      icon: '🔍',
      activities: [
        'Automated quality checks',
        'Peer review workflow',
        'Technical accuracy validation',
        'Style guide compliance'
      ]
    },
    {
      phase: 'Publish',
      icon: '🌐',
      activities: [
        'Multi-format generation',
        'Deploy to production',
        'Update search index',
        'Notify stakeholders'
      ]
    },
    {
      phase: 'Maintain',
      icon: '🔄',
      activities: [
        'Track documentation health',
        'Update outdated content',
        'Respond to feedback',
        'Version management'
      ]
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Documentation Workflow Reimagined
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From planning to publishing, manage your entire documentation lifecycle
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Workflow Phases */}
          <div className="grid md:grid-cols-5 gap-4">
            {workflow.map((phase, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < workflow.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gray-300">
                    <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                      <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
                
                <div className="relative bg-white rounded-lg border-2 border-gray-200 p-4 hover:border-primary-500 hover:shadow-lg transition-all">
                  <div className="text-center mb-3">
                    <span className="text-3xl">{phase.icon}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 text-center mb-3">
                    {phase.phase}
                  </h3>
                  <ul className="space-y-1">
                    {phase.activities.map((activity, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-start">
                        <span className="text-primary-500 mr-1">•</span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          {/* Benefits */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">5x Faster</h4>
              <p className="text-gray-600">Ship documentation in days, not weeks</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H6a2 2 0 100 4h2a2 2 0 100 4h2a1 1 0 100 2 2 2 0 01-2 2H4a2 2 0 01-2-2V5z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Total Control</h4>
              <p className="text-gray-600">Manage every aspect of your docs</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">100% Accurate</h4>
              <p className="text-gray-600">Automated checks ensure quality</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}