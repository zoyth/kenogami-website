import Link from 'next/link'

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-primary-500 to-primary-700 py-24">
      <div className="section-container">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Better Documentation?
          </h2>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-10">
            Join teams using Kenogami to create, manage, and publish professional 
            documentation that users actually read.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="https://app.kenogami.com/auth/signup" 
              className="bg-white hover:bg-gray-100 text-primary-700 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl text-lg"
            >
              Start 14-Day Free Trial
            </a>
            <a 
              href="https://app.kenogami.com/auth/signup" 
              className="bg-primary-700 hover:bg-primary-900 text-white font-semibold py-4 px-8 rounded-lg border-2 border-white transition-colors duration-200 text-lg"
            >
              Get Started Today
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-primary-100">
            <div className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              No credit card required
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Full features included
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Real human support
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}