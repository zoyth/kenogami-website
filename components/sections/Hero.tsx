import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-ghost to-primary-50 pt-24">
      <div className="section-container">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6">
            Your Knowledge Deserves<br />
            <span className="gradient-text">Better Than Documents</span>
          </h1>
          
          <p className="mx-auto max-w-2xl text-xl text-gray-600 mb-10">
            Kenogami transforms documentation into intelligent knowledge that adapts to every user, 
            learns from every interaction, and evolves with your product.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/trial" className="btn-primary text-lg px-8 py-4">
              Start Free Trial
            </Link>
            <Link href="/demo" className="btn-secondary text-lg px-8 py-4">
              Book Demo
            </Link>
          </div>
          
          <p className="mt-6 text-sm text-gray-500">
            No credit card required • 14-day free trial • Full features
          </p>
        </div>
        
        {/* Animated visualization placeholder */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>
          <div className="bg-gradient-to-r from-primary-100 to-secondary-100 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-600 mb-4">Interactive Demo</p>
              <div className="flex gap-8 justify-center">
                <div className="bg-white p-4 rounded-lg shadow-lg animate-pulse">
                  <div className="w-32 h-20 bg-gray-200 rounded mb-2"></div>
                  <p className="text-sm">Document</p>
                </div>
                <div className="text-4xl self-center">→</div>
                <div className="bg-white p-4 rounded-lg shadow-lg animate-pulse animation-delay-200">
                  <div className="w-32 h-20 bg-primary-100 rounded mb-2"></div>
                  <p className="text-sm">Knowledge Units</p>
                </div>
                <div className="text-4xl self-center">→</div>
                <div className="bg-white p-4 rounded-lg shadow-lg animate-pulse animation-delay-400">
                  <div className="w-32 h-20 bg-secondary-100 rounded mb-2"></div>
                  <p className="text-sm">Multiple Formats</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}