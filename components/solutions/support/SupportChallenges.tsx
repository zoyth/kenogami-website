export default function SupportChallenges() {
  const challenges = [
    {
      problem: 'Agents waste time searching',
      solution: 'AI surfaces answers instantly',
      icon: '🔍'
    },
    {
      problem: 'Inconsistent responses',
      solution: 'Single source of truth',
      icon: '🎯'
    },
    {
      problem: 'Outdated documentation',
      solution: 'Auto-updating knowledge base',
      icon: '🔄'
    },
    {
      problem: 'No ticket insights',
      solution: 'Gap detection from tickets',
      icon: '📊'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Transform Support Challenges into Strengths
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
              <div className="text-3xl mb-4 text-center">{item.icon}</div>
              
              <div className="text-center">
                <div className="text-red-500 font-medium mb-2 line-through">
                  {item.problem}
                </div>
                <div className="text-green-600 font-semibold">
                  {item.solution}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}