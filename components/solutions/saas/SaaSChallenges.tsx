export default function SaaSChallenges() {
  const challenges = [
    {
      title: 'Documentation Debt',
      description: 'Your product evolves faster than your docs can keep up',
      icon: '📚'
    },
    {
      title: 'Support Overload',
      description: 'Same questions asked repeatedly, eating up support resources',
      icon: '🎧'
    },
    {
      title: 'Poor Adoption',
      description: 'Users can\'t find answers, leading to churn and frustration',
      icon: '📉'
    },
    {
      title: 'Version Chaos',
      description: 'Multiple product versions with inconsistent documentation',
      icon: '🎯'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            The Documentation Challenge
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SaaS companies face unique documentation challenges that traditional tools can't solve
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((challenge, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">{challenge.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{challenge.title}</h3>
              <p className="text-gray-600 text-sm">{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}