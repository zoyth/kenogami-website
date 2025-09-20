import Header from '@/components/navigation/Header'
import Footer from '@/components/navigation/Footer'

export default function VisionPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-brand-ghost to-white py-20">
          <div className="section-container">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                The Future of
                <span className="gradient-text"> Knowledge Management</span>
              </h1>
              <p className="text-xl text-gray-600">
                We envision a world where knowledge flows seamlessly across organizations, 
                empowering every individual to contribute, learn, and grow.
              </p>
            </div>
          </div>
        </section>

        {/* Vision Timeline */}
        <section className="py-20">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Journey Ahead</h2>
              
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-200 via-primary-400 to-primary-600"></div>
                
                <div className="space-y-12">
                  {/* Today */}
                  <div className="relative">
                    <div className="flex items-center">
                      <div className="flex-1 text-right pr-8">
                        <h3 className="text-xl font-bold text-gray-900">Today</h3>
                        <p className="text-gray-600 mt-2">
                          Multi-tenant knowledge base platform with powerful CMS, version control, 
                          and beautiful public documentation sites.
                        </p>
                      </div>
                      <div className="w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                      <div className="flex-1 pl-8">
                        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-primary-500">
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Enterprise-ready platform</li>
                            <li>• Multi-language support</li>
                            <li>• Static site generation</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Near Future */}
                  <div className="relative">
                    <div className="flex items-center">
                      <div className="flex-1 pr-8">
                        <div className="bg-white rounded-lg shadow-md p-4 border-r-4 border-secondary-500 text-right">
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>AI-powered content suggestions •</li>
                            <li>Smart search & discovery •</li>
                            <li>Automated translations •</li>
                          </ul>
                        </div>
                      </div>
                      <div className="w-4 h-4 bg-secondary-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                      <div className="flex-1 pl-8">
                        <h3 className="text-xl font-bold text-gray-900">Intelligence Layer</h3>
                        <p className="text-gray-600 mt-2">
                          AI understands your content, suggests improvements, identifies gaps, 
                          and helps maintain consistency across all documentation.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Mid-term */}
                  <div className="relative">
                    <div className="flex items-center">
                      <div className="flex-1 text-right pr-8">
                        <h3 className="text-xl font-bold text-gray-900">Knowledge Graph</h3>
                        <p className="text-gray-600 mt-2">
                          Transform documents into interconnected knowledge atoms. Understand 
                          relationships, dependencies, and impact across your entire knowledge base.
                        </p>
                      </div>
                      <div className="w-4 h-4 bg-primary-400 rounded-full border-4 border-white shadow-lg z-10"></div>
                      <div className="flex-1 pl-8">
                        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-4 border-l-4 border-primary-400">
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Atomic knowledge units</li>
                            <li>• Relationship mapping</li>
                            <li>• Impact analysis</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Long-term */}
                  <div className="relative">
                    <div className="flex items-center">
                      <div className="flex-1 pr-8">
                        <div className="bg-gradient-to-r from-secondary-50 to-primary-50 rounded-lg p-4 border-r-4 border-secondary-400 text-right">
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>Conversational interfaces •</li>
                            <li>Proactive knowledge delivery •</li>
                            <li>Cross-platform integration •</li>
                          </ul>
                        </div>
                      </div>
                      <div className="w-4 h-4 bg-secondary-400 rounded-full border-4 border-white shadow-lg z-10"></div>
                      <div className="flex-1 pl-8">
                        <h3 className="text-xl font-bold text-gray-900">Intelligent Assistant</h3>
                        <p className="text-gray-600 mt-2">
                          Your knowledge base becomes a proactive partner, answering questions, 
                          suggesting relevant content, and learning from every interaction.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Ultimate Vision */}
                  <div className="relative">
                    <div className="flex items-center">
                      <div className="flex-1 text-right pr-8">
                        <h3 className="text-xl font-bold text-gray-900">Adaptive Knowledge OS</h3>
                        <p className="text-gray-600 mt-2">
                          A self-organizing, self-improving knowledge operating system that 
                          evolves with your organization and anticipates your needs.
                        </p>
                      </div>
                      <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full border-4 border-white shadow-xl z-10 flex items-center justify-center">
                        <span className="text-white text-xs">∞</span>
                      </div>
                      <div className="flex-1 pl-8">
                        <div className="bg-gradient-to-r from-primary-100 via-secondary-100 to-primary-100 rounded-lg p-4 border-l-4 border-transparent" style={{borderImage: 'linear-gradient(to bottom, #1a74e8, #ff6d80) 1'}}>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Self-maintaining documentation</li>
                            <li>• Predictive knowledge needs</li>
                            <li>• Universal knowledge fabric</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 bg-gray-50">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Guiding Principles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🧬</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Knowledge is Living</h3>
                <p className="text-gray-600 text-sm">
                  Documentation should evolve, adapt, and improve continuously, not sit static in repositories.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🌐</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Democratize Expertise</h3>
                <p className="text-gray-600 text-sm">
                  Everyone should have access to the collective intelligence of their organization.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔮</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Anticipate Needs</h3>
                <p className="text-gray-600 text-sm">
                  The best documentation appears exactly when and where you need it, without searching.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary-100 to-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">♾️</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Infinite Scale</h3>
                <p className="text-gray-600 text-sm">
                  From solo creators to global enterprises, our vision scales without compromise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
          <div className="section-container text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Be Part of the Vision
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join us in reimagining how organizations create, share, and leverage their collective knowledge.
            </p>
            <a href="https://app.kenogami.com/auth/signup" className="btn-secondary text-lg">
              Start Your Journey
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}