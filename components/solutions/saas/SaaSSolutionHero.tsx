export default function SaaSSolutionHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-ghost to-white pt-24 pb-12">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-primary-700 bg-primary-100 rounded-full">
              For SaaS Companies
            </span>
            
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Documentation That
              <br />
              <span className="gradient-text">Scales With Your Product</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Reduce support tickets by 40% and accelerate user adoption with 
              intelligent documentation that learns from your users.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">API documentation with interactive examples</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Version control for multiple product releases</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">In-app contextual help and tooltips</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              <button className="btn-primary">
                See How It Works
              </button>
              <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                View Case Study
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8">
              <div className="bg-white rounded-lg shadow-xl p-6">
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-500">40%</div>
                      <div className="text-xs text-gray-600">Fewer Tickets</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-500">60%</div>
                      <div className="text-xs text-gray-600">Faster Onboarding</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-500">3x</div>
                      <div className="text-xs text-gray-600">Dev Productivity</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}