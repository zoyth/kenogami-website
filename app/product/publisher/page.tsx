import Header from '@/components/navigation/Header'
import Footer from '@/components/navigation/Footer'
import Link from 'next/link'

export default function PublisherPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-brand-ghost to-white py-20">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-2 text-sm font-semibold text-primary-700 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full mb-4">
                  Knowledge Publisher
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                  Create Documentation
                  <span className="gradient-text"> That Delivers</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  A powerful CMS built for teams that take documentation seriously. 
                  Write once, publish everywhere with beautiful, branded knowledge bases.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://app.kenogami.com/auth/signup" className="btn-primary">
                    Start Free Trial
                  </a>
                  <Link href="/product/platform" className="btn-secondary">
                    View Full Platform
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">📝</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Rich Editor</h3>
                      <p className="text-sm text-gray-600">Monaco-powered markdown with live preview</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🏢</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Custom Domains</h3>
                      <p className="text-sm text-gray-600">Publish your knowledge base on your own domain</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Instant Publishing</h3>
                      <p className="text-sm text-gray-600">Static generation for blazing-fast delivery</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Everything You Need to Create Great Documentation
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">✏️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Editor</h3>
                <p className="text-gray-600 mb-4">
                  Full-featured markdown editor with syntax highlighting, auto-completion, and real-time preview.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Monaco-based editor
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Live markdown preview
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Code syntax highlighting
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Version Control</h3>
                <p className="text-gray-600 mb-4">
                  Track every change with full version history and rollback capabilities.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Complete history tracking
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Instant rollback
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Change attribution
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Language</h3>
                <p className="text-gray-600 mb-4">
                  Create and manage content in multiple languages with built-in localization.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Multiple language support
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Translation management
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Locale-specific content
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary-100 to-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Team Collaboration</h3>
                <p className="text-gray-600 mb-4">
                  Work together with role-based permissions and real-time collaboration features.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Role-based access
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Activity tracking
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Team workspaces
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-200 to-secondary-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Branding</h3>
                <p className="text-gray-600 mb-4">
                  Make your knowledge base truly yours with complete customization options.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Custom domains
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Brand colors & logos
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Theme customization
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary-200 to-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Lightning Fast</h3>
                <p className="text-gray-600 mb-4">
                  Static site generation ensures your documentation loads instantly, anywhere.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Static generation
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    CDN distribution
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    SEO optimized
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-gray-50">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Perfect For Every Documentation Need
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Product Documentation</h3>
                <p className="text-gray-600">
                  Create comprehensive product guides, API references, and user manuals that help customers succeed.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Internal Knowledge Base</h3>
                <p className="text-gray-600">
                  Build a centralized repository for company policies, procedures, and institutional knowledge.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Developer Docs</h3>
                <p className="text-gray-600">
                  Publish beautiful API documentation with code examples, interactive samples, and version management.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Help Centers</h3>
                <p className="text-gray-600">
                  Create self-service support portals that reduce tickets and empower customers to find answers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-700">
          <div className="section-container text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Start Publishing Better Documentation Today
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join teams worldwide who trust Kenogami to deliver their knowledge effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://app.kenogami.com/auth/signup" className="btn-secondary text-lg">
                Start Free Trial
              </a>
              <Link href="/pricing" className="bg-primary-700 hover:bg-primary-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 inline-block text-center text-lg">
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}