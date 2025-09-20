import Link from 'next/link'

export default function SupportCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-secondary-500 to-primary-500">
      <div className="section-container">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Give Your Support Team Superpowers
          </h2>
          
          <p className="text-xl text-blue-50 max-w-3xl mx-auto mb-8">
            Join support teams achieving 90% first-contact resolution with Kenogami's 
            AI-powered knowledge platform.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a 
              href="https://app.kenogami.com/auth/signup"
              className="inline-block bg-white text-primary-500 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Start Free Trial
            </a>
            <Link 
              href="https://app.kenogami.com/auth/signup"
              className="inline-block bg-secondary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary-700 transition-all border-2 border-white/20"
            >
              See Live Demo
            </Link>
          </div>
          
          <p className="text-blue-100">
            Setup in minutes • Integrates with your help desk • No training required
          </p>
        </div>
      </div>
    </section>
  )
}