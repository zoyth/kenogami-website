export default function SupportMetrics() {
  const metrics = [
    {
      title: 'Before Kenogami',
      data: [
        { metric: 'Average Resolution Time', value: '4.5 hours', trend: 'negative' },
        { metric: 'First Contact Resolution', value: '45%', trend: 'negative' },
        { metric: 'CSAT Score', value: '72%', trend: 'negative' },
        { metric: 'Tickets per Agent/Day', value: '25', trend: 'negative' }
      ]
    },
    {
      title: 'With Kenogami',
      data: [
        { metric: 'Average Resolution Time', value: '2.2 hours', trend: 'positive' },
        { metric: 'First Contact Resolution', value: '90%', trend: 'positive' },
        { metric: 'CSAT Score', value: '94%', trend: 'positive' },
        { metric: 'Tickets per Agent/Day', value: '75', trend: 'positive' }
      ]
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Measurable Impact on Support Metrics
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from teams using Kenogami
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {metrics.map((section, index) => (
            <div key={index} className={`rounded-xl p-8 ${
              section.title === 'Before Kenogami' 
                ? 'bg-gray-50 border-2 border-gray-200' 
                : 'bg-gradient-to-br from-primary-50 to-secondary-50 border-2 border-primary-200'
            }`}>
              <h3 className={`text-xl font-bold mb-6 ${
                section.title === 'Before Kenogami' ? 'text-gray-700' : 'text-primary-700'
              }`}>
                {section.title}
              </h3>
              
              <div className="space-y-4">
                {section.data.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">{item.metric}</span>
                    <div className="flex items-center">
                      <span className={`font-bold text-lg mr-2 ${
                        item.trend === 'positive' ? 'text-green-600' : 'text-gray-600'
                      }`}>
                        {item.value}
                      </span>
                      {item.trend === 'positive' && (
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-primary-100 to-secondary-100 rounded-xl p-8">
            <p className="text-2xl font-bold text-gray-900 mb-2">
              ROI Calculator
            </p>
            <p className="text-gray-600 mb-4">
              Calculate your potential savings with Kenogami
            </p>
            <button className="btn-primary">
              Calculate Your ROI
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}