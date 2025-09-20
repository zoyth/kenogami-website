export default function SupportHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-ghost to-white pt-24 pb-12">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-secondary-700 bg-secondary-100 rounded-full">
              For Support Teams
            </span>
            
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Empower Your Support Team with
              <br />
              <span className="gradient-text">Instant Knowledge Access</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Resolve tickets 50% faster with AI-powered knowledge that learns from 
              every interaction and surfaces the right answer instantly.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold text-primary-500 mb-2">50%</div>
                <p className="text-gray-600">Faster ticket resolution</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-500 mb-2">90%</div>
                <p className="text-gray-600">First-contact resolution</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-500 mb-2">25%</div>
                <p className="text-gray-600">Higher CSAT scores</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-500 mb-2">3x</div>
                <p className="text-gray-600">Agent productivity</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <button className="btn-primary">
                See Demo
              </button>
              <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Calculate ROI
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-secondary-100 to-primary-100 rounded-2xl p-8">
              <div className="bg-white rounded-lg shadow-xl p-6">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">Ticket Resolution Time</span>
                    <span className="text-sm text-green-600 font-medium">-50%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-400 to-primary-600 h-2 rounded-full" style={{width: '50%'}}></div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">Customer Satisfaction</span>
                    <span className="text-sm text-green-600 font-medium">+25%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">Knowledge Coverage</span>
                    <span className="text-sm text-green-600 font-medium">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-secondary-400 to-secondary-600 h-2 rounded-full" style={{width: '95%'}}></div>
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