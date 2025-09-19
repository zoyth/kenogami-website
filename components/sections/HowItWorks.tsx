export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Extract',
      description: 'We decompose your existing content into atomic knowledge units',
      icon: '🔍',
      details: 'Document → Knowledge atoms',
    },
    {
      number: '2',
      title: 'Enhance',
      description: 'AI validates, connects, and enriches your knowledge',
      icon: '🧠',
      details: 'Knowledge graph visualization',
    },
    {
      number: '3',
      title: 'Deliver',
      description: 'Each user gets knowledge in their optimal format',
      icon: '🚀',
      details: 'Personalized delivery across channels',
    },
  ]

  return (
    <section className="bg-white py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            From Static to Smart in 3 Steps
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your documentation into an intelligent system in minutes, not months
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-24 left-full w-full h-0.5 bg-gradient-to-r from-primary-200 to-primary-400 z-0"></div>
              )}
              
              <div className="relative z-10 text-center">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-4 shadow-lg">
                  {step.number}
                </div>
                
                <div className="text-4xl mb-4">{step.icon}</div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {step.description}
                </p>
                
                <div className="bg-gray-50 rounded-lg px-4 py-2 text-sm text-gray-500 inline-block">
                  {step.details}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="btn-primary">
            See It In Action →
          </button>
        </div>
      </div>
    </section>
  )
}