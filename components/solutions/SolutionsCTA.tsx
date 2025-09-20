import Link from 'next/link'

export default function SolutionsCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500">
      <div className="section-container">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Knowledge Management?
          </h2>
          
          <p className="text-xl text-blue-50 max-w-3xl mx-auto mb-8">
            Join thousands of teams using Kenogami to deliver better documentation, 
            faster support, and exceptional user experiences.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://app.kenogami.com/auth/signup"
              className="inline-block bg-white text-primary-500 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Start Free Trial
            </a>
            <Link 
              href="https://app.kenogami.com/auth/signup"
              className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all border-2 border-white/20"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}