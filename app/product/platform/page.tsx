import Header from '@/components/navigation/Header'
import Footer from '@/components/navigation/Footer'
import Link from 'next/link'

export default function PlatformPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-brand-ghost to-white py-20">
          <div className="section-container">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                The Complete
                <span className="gradient-text"> Knowledge Platform</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10">
                From creation to intelligence, Kenogami provides everything you need to manage, 
                publish, and evolve your organization's knowledge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://app.kenogami.com/auth/signup" className="btn-primary text-lg">
                  Start Free Trial
                </a>
                <Link href="/pricing" className="btn-secondary text-lg">
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Overview */}
        <section className="py-20">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Three Pillars of Modern Documentation
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Publisher */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center mb-4">
                    <span className="text-3xl">📝</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Knowledge Publisher</h3>
                  <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur rounded-full text-white text-sm">
                    Available Now
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">
                    Professional documentation platform with everything you need to create and publish.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Professional CMS</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Version control</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Custom domains</span>
                    </li>
                  </ul>
                  <Link href="/product/publisher" className="text-primary-600 font-semibold hover:text-primary-700">
                    Learn More →
                  </Link>
                </div>
              </div>

              {/* Intelligence */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 p-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center mb-4">
                    <span className="text-3xl">🧠</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Intelligence Core</h3>
                  <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur rounded-full text-white text-sm">
                    Available Now
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">
                    AI-powered insights that help you maintain and improve documentation quality.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-secondary-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Gap detection</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-secondary-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Quality scoring</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-secondary-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Smart suggestions</span>
                    </li>
                  </ul>
                  <Link href="/product/intelligence" className="text-secondary-600 font-semibold hover:text-secondary-700">
                    Learn More →
                  </Link>
                </div>
              </div>

              {/* Assistant */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-600 p-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center mb-4">
                    <span className="text-3xl">🤖</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">AI Assistant</h3>
                  <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur rounded-full text-white text-sm">
                    Coming 2026
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">
                    Conversational AI that makes your documentation interactive and accessible.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Natural language Q&A</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Proactive help</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Personalized guidance</span>
                    </li>
                  </ul>
                  <Link href="/product/assistant" className="text-primary-600 font-semibold hover:text-primary-700">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration */}
        <section className="py-20 bg-gray-50">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Seamlessly Integrated Platform
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Each component works together to create a unified knowledge ecosystem that grows with your organization.
            </p>
            
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">📥</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Create & Import</h3>
                    <p className="text-sm text-gray-600">
                      Write in our editor or import existing documentation
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🔄</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Process & Enhance</h3>
                    <p className="text-sm text-gray-600">
                      AI analyzes and improves your content automatically
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🚀</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Deliver & Interact</h3>
                    <p className="text-sm text-gray-600">
                      Publish everywhere with intelligent assistance
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Single source of truth</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Unified analytics</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Consistent experience</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Scalable architecture</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Kenogami Platform
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Lightning Fast</h3>
                <p className="text-sm text-gray-600">
                  Static generation and CDN delivery for instant loading
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Enterprise Security</h3>
                <p className="text-sm text-gray-600">
                  SOC 2 compliant with advanced security features
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Global Ready</h3>
                <p className="text-sm text-gray-600">
                  Multi-language support and worldwide CDN
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-100 to-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Scales Infinitely</h3>
                <p className="text-sm text-gray-600">
                  From startup to enterprise without limits
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-600">
          <div className="section-container text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Start Your Knowledge Journey Today
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Begin with our powerful publishing platform and grow into the full intelligence suite as it becomes available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://app.kenogami.com/auth/signup" className="btn-secondary text-lg">
                Start 14-Day Free Trial
              </a>
              <Link href="/pricing" className="bg-white/10 backdrop-blur hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 inline-block text-center text-lg border border-white/30">
                View Pricing Plans
              </Link>
            </div>
            <p className="text-white/70 text-sm mt-6">
              No credit card required • Full features • Cancel anytime
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}