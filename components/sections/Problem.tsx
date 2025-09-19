export default function Problem() {
  const problems = [
    {
      icon: '😤',
      stat: '67%',
      title: 'of users can\'t find answers',
      description: 'Your customers abandon docs and flood support with questions',
    },
    {
      icon: '😰',
      stat: '40%',
      title: 'of tickets are repeat questions',
      description: 'Your team answers the same questions every single day',
    },
    {
      icon: '📉',
      stat: '73%',
      title: 'of docs become outdated in 90 days',
      description: 'Your content can\'t keep up with your product velocity',
    },
  ]

  return (
    <section className="bg-white py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Documentation Is Broken
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Traditional knowledge bases are failing your users and burning out your team
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl mb-4">{problem.icon}</div>
              <div className="text-5xl font-bold text-primary-600 mb-2">
                {problem.stat}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-600">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                The Hidden Cost of Bad Documentation
              </h3>
              <p className="text-gray-600">
                Calculate how much poor documentation is costing your business
              </p>
            </div>
            <button className="btn-primary">
              Calculate Your Cost →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}