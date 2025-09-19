import Link from 'next/link'

export default function ROI() {
  const metrics = [
    {
      value: '40%',
      direction: 'down',
      label: 'Support Tickets',
      description: 'Fewer repetitive questions',
    },
    {
      value: '67%',
      direction: 'up',
      label: 'Self-Service Success',
      description: 'Users find answers alone',
    },
    {
      value: '50%',
      direction: 'down',
      label: 'Content Creation Time',
      description: 'Faster documentation',
    },
    {
      value: '3.2x',
      direction: 'up',
      label: 'Documentation ROI',
      description: 'Better return on investment',
    },
  ]

  return (
    <section className="bg-white py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Measurable Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real results from real customers using Kenogami
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center mb-2">
                <span className="text-5xl font-bold gradient-text">
                  {metric.value}
                </span>
                {metric.direction === 'up' ? (
                  <svg className="w-8 h-8 text-green-500 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                ) : (
                  <svg className="w-8 h-8 text-red-500 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                )}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {metric.label}
              </h3>
              <p className="text-sm text-gray-600">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Calculate Your ROI
                </h3>
                <p className="text-gray-600 mb-6">
                  See how much Kenogami could save your team in support costs and productivity gains.
                </p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Monthly support tickets
                    </label>
                    <input
                      type="number"
                      placeholder="1000"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Average ticket resolution time (hours)
                    </label>
                    <input
                      type="number"
                      placeholder="2"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Your Potential Savings
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tickets Reduced</span>
                    <span className="font-semibold">400/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Hours Saved</span>
                    <span className="font-semibold">800 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cost Savings</span>
                    <span className="font-semibold text-green-600">$32,000/month</span>
                  </div>
                  <div className="pt-3 border-t">
                    <div className="flex justify-between">
                      <span className="text-gray-900 font-semibold">Annual Savings</span>
                      <span className="text-2xl font-bold gradient-text">$384,000</span>
                    </div>
                  </div>
                </div>
                <button className="w-full btn-primary mt-6">
                  Get Detailed Report
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/case-studies" className="text-primary-600 hover:text-primary-700 font-medium">
            View Customer Case Studies →
          </Link>
        </div>
      </div>
    </section>
  )
}