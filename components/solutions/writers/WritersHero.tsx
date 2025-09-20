export default function WritersHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-ghost to-white pt-24 pb-12">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-brand-coral bg-brand-coral/10 rounded-full">
              For Technical Writers
            </span>
            
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Professional Documentation
              <br />
              <span className="gradient-text">Made Effortless</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Create, manage, and publish technical documentation at scale with tools 
              designed by writers, for writers. Ship docs 5x faster with total consistency.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="bg-green-100 rounded-full p-2 mr-3">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Monaco-powered editor with live preview</span>
              </div>
              <div className="flex items-center">
                <div className="bg-green-100 rounded-full p-2 mr-3">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Reusable component library</span>
              </div>
              <div className="flex items-center">
                <div className="bg-green-100 rounded-full p-2 mr-3">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Automated quality checks and validation</span>
              </div>
              <div className="flex items-center">
                <div className="bg-green-100 rounded-full p-2 mr-3">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Multi-format publishing (PDF, HTML, EPUB)</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              <button className="btn-primary">
                Try the Editor
              </button>
              <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-brand-coral/10 to-brand-powder rounded-2xl p-8">
              <div className="bg-white rounded-lg shadow-xl">
                <div className="border-b px-4 py-2 flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-4 text-sm text-gray-600">documentation.md</span>
                </div>
                <div className="p-6 font-mono text-sm">
                  <div className="text-gray-600">## Getting Started</div>
                  <div className="text-gray-800 mt-2">Welcome to our API documentation...</div>
                  <div className="text-primary-600 mt-2">```javascript</div>
                  <div className="text-gray-700">const api = new KenogamiAPI();</div>
                  <div className="text-gray-700">await api.connect();</div>
                  <div className="text-primary-600">```</div>
                </div>
              </div>
              
              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div className="bg-white rounded-lg p-3">
                  <div className="text-2xl font-bold text-primary-500">5x</div>
                  <div className="text-xs text-gray-600">Faster Publishing</div>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <div className="text-2xl font-bold text-primary-500">100%</div>
                  <div className="text-xs text-gray-600">Consistency</div>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <div className="text-2xl font-bold text-primary-500">80%</div>
                  <div className="text-xs text-gray-600">Less Manual Work</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}