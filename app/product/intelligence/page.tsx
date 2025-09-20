import Header from '@/components/navigation/Header'
import Footer from '@/components/navigation/Footer'
import Link from 'next/link'

export default function IntelligencePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-brand-ghost to-white py-20">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-2 text-sm font-semibold text-secondary-700 bg-gradient-to-r from-secondary-100 to-primary-100 rounded-full mb-4">
                  Intelligence Core • Coming Soon
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                  Knowledge That
                  <span className="gradient-text"> Understands Itself</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Transform your documentation from static pages into an intelligent knowledge graph. 
                  AI-powered insights, gap detection, and automated improvements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://app.kenogami.com/auth/signup" className="btn-primary">
                    Join Waitlist
                  </a>
                  <Link href="/vision" className="btn-secondary">
                    Learn About Our Vision
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary-200/20 to-primary-200/20 rounded-2xl blur-2xl"></div>
                <div className="relative bg-white/80 backdrop-blur rounded-2xl shadow-2xl p-8 border border-gray-100">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-secondary-400 to-primary-400 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                      <span className="text-4xl text-white">🧠</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">AI-Powered Intelligence</h3>
                    <p className="text-gray-600">Your knowledge base learns and improves</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-secondary-500">◉</span>
                      <span className="text-gray-700">Automatic gap detection</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-primary-500">◉</span>
                      <span className="text-gray-700">Content quality scoring</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-secondary-500">◉</span>
                      <span className="text-gray-700">Smart suggestions</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-primary-500">◉</span>
                      <span className="text-gray-700">Relationship mapping</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Preview */}
        <section className="py-20">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Intelligence Features in Development
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              We're building the future of intelligent documentation. Here's what's coming.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-white to-secondary-50 rounded-xl shadow-lg p-6 border border-secondary-100">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Gap Analysis</h3>
                <p className="text-gray-600 mb-4">
                  AI identifies missing content, outdated information, and documentation gaps automatically.
                </p>
                <div className="text-sm text-secondary-600 font-semibold">Coming Q2 2024</div>
              </div>

              <div className="bg-gradient-to-br from-white to-primary-50 rounded-xl shadow-lg p-6 border border-primary-100">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Content Enhancement</h3>
                <p className="text-gray-600 mb-4">
                  Automatically improve readability, add summaries, and suggest better structure.
                </p>
                <div className="text-sm text-primary-600 font-semibold">Coming Q2 2024</div>
              </div>

              <div className="bg-gradient-to-br from-white to-secondary-50 rounded-xl shadow-lg p-6 border border-secondary-100">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary-100 to-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔗</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Knowledge Graph</h3>
                <p className="text-gray-600 mb-4">
                  Visualize relationships between content, dependencies, and impact across your docs.
                </p>
                <div className="text-sm text-secondary-600 font-semibold">Coming Q3 2024</div>
              </div>

              <div className="bg-gradient-to-br from-white to-primary-50 rounded-xl shadow-lg p-6 border border-primary-100">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Keywords</h3>
                <p className="text-gray-600 mb-4">
                  Automatic keyword extraction and tagging for improved search and discovery.
                </p>
                <div className="text-sm text-primary-600 font-semibold">Coming Q2 2024</div>
              </div>

              <div className="bg-gradient-to-br from-white to-secondary-50 rounded-xl shadow-lg p-6 border border-secondary-100">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary-200 to-secondary-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🌐</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">AI Translation</h3>
                <p className="text-gray-600 mb-4">
                  Context-aware translations that maintain technical accuracy across languages.
                </p>
                <div className="text-sm text-secondary-600 font-semibold">Coming Q3 2024</div>
              </div>

              <div className="bg-gradient-to-br from-white to-primary-50 rounded-xl shadow-lg p-6 border border-primary-100">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-200 to-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Metrics</h3>
                <p className="text-gray-600 mb-4">
                  Real-time scoring of documentation quality, completeness, and effectiveness.
                </p>
                <div className="text-sm text-primary-600 font-semibold">Coming Q2 2024</div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-gray-50">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              How Intelligence Core Will Work
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-secondary-400 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Content Analysis</h3>
                    <p className="text-gray-600">
                      AI continuously analyzes your documentation, understanding context, relationships, and patterns.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Insight Generation</h3>
                    <p className="text-gray-600">
                      Identifies gaps, suggests improvements, and highlights opportunities for enhancement.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-secondary-400 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Automated Improvements</h3>
                    <p className="text-gray-600">
                      Apply AI-suggested enhancements with one click, or let the system improve content automatically.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Continuous Learning</h3>
                    <p className="text-gray-600">
                      The system learns from user interactions and feedback to provide increasingly better suggestions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Early Access CTA */}
        <section className="py-20 bg-gradient-to-r from-secondary-500 to-primary-600">
          <div className="section-container text-center">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur rounded-full text-white font-semibold mb-4">
              Limited Early Access
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Be Among the First to Experience Intelligent Documentation
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join the waitlist for early access to Intelligence Core features. 
              Help shape the future of documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://app.kenogami.com/auth/signup" className="btn-secondary text-lg">
                Join Early Access Waitlist
              </a>
              <Link href="/contact" className="bg-white/10 backdrop-blur hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 inline-block text-center text-lg border border-white/30">
                Contact Sales
              </Link>
            </div>
            <p className="text-white/70 text-sm mt-6">
              Early access users get 50% off for the first year
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}