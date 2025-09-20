import Header from '@/components/navigation/Header'
import Footer from '@/components/navigation/Footer'
import Link from 'next/link'

export default function AssistantPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-brand-ghost to-white py-20">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-2 text-sm font-semibold text-primary-700 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full mb-4">
                  AI Assistant • Future Vision
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                  Your Documentation
                  <span className="gradient-text"> Comes Alive</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Imagine a conversational AI that knows everything about your documentation. 
                  Instant answers, proactive suggestions, and personalized guidance for every user.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/vision" className="btn-primary">
                    Explore Our Vision
                  </Link>
                  <a href="https://app.kenogami.com/auth/signup" className="btn-secondary">
                    Get Early Updates
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-200/30 to-secondary-200/30 rounded-2xl blur-3xl"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                  <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                        <span className="text-white">🤖</span>
                      </div>
                      <span className="text-white font-semibold">Kenogami Assistant</span>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex-shrink-0"></div>
                      <div className="bg-gray-100 rounded-2xl rounded-tl-sm p-3 max-w-[80%]">
                        <p className="text-sm text-gray-700">How do I configure multi-tenant settings?</p>
                      </div>
                    </div>
                    <div className="flex gap-3 justify-end">
                      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-2xl rounded-tr-sm p-3 max-w-[80%]">
                        <p className="text-sm">Based on your setup, you'll need to configure the tenant resolver in your settings. Here's the relevant documentation...</p>
                      </div>
                      <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex-shrink-0 flex items-center justify-center">
                        <span className="text-white text-xs">AI</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center py-2">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                        <div className="w-2 h-2 bg-secondary-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                        <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Features */}
        <section className="py-20">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              The Future of Documentation Interaction
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              We're reimagining how users interact with documentation. Here's what we're building towards.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-white via-primary-50/30 to-secondary-50/30 rounded-xl p-8 shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl text-white">💬</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Conversational Interface</h3>
                <p className="text-gray-600 mb-4">
                  Ask questions in natural language and get instant, accurate answers from your entire knowledge base.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">→</span>
                    Natural language understanding
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-500 mr-2">→</span>
                    Context-aware responses
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">→</span>
                    Multi-turn conversations
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-white via-secondary-50/30 to-primary-50/30 rounded-xl p-8 shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary-400 to-primary-400 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl text-white">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Proactive Assistance</h3>
                <p className="text-gray-600 mb-4">
                  The AI anticipates user needs and proactively suggests relevant content before they ask.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-secondary-500 mr-2">→</span>
                    Predictive suggestions
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">→</span>
                    Usage pattern learning
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-500 mr-2">→</span>
                    Contextual recommendations
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-white via-primary-50/30 to-secondary-50/30 rounded-xl p-8 shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl text-white">🧠</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Deep Understanding</h3>
                <p className="text-gray-600 mb-4">
                  Goes beyond keyword matching to truly understand intent, context, and relationships.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">→</span>
                    Semantic search
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-500 mr-2">→</span>
                    Cross-reference analysis
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">→</span>
                    Intent recognition
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-white via-secondary-50/30 to-primary-50/30 rounded-xl p-8 shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary-400 to-primary-400 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl text-white">🔄</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Continuous Learning</h3>
                <p className="text-gray-600 mb-4">
                  Learns from every interaction to provide increasingly better and more personalized assistance.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-secondary-500 mr-2">→</span>
                    Feedback integration
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">→</span>
                    Performance optimization
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-500 mr-2">→</span>
                    Personalization engine
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
              Transforming How Teams Access Knowledge
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">👨‍💻</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">For Developers</h3>
                    <p className="text-gray-600">
                      "Show me examples of API authentication" instantly returns relevant code samples, 
                      best practices, and common pitfalls from your docs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🎧</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">For Support Teams</h3>
                    <p className="text-gray-600">
                      AI assistant helps agents find solutions faster, suggests related articles, 
                      and even drafts responses based on your knowledge base.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🚀</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">For New Users</h3>
                    <p className="text-gray-600">
                      Personalized onboarding paths based on role and goals, with the AI guiding 
                      them through relevant documentation step by step.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-secondary-100 to-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📊</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">For Product Teams</h3>
                    <p className="text-gray-600">
                      Understand what users are searching for, identify documentation gaps, 
                      and get insights into user journeys through your content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Development Roadmap
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-200 to-secondary-200"></div>
                
                <div className="space-y-8">
                  <div className="relative flex items-center">
                    <div className="flex-1 text-right pr-8">
                      <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                        Available Now
                      </div>
                    </div>
                    <div className="w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow z-10"></div>
                    <div className="flex-1 pl-8">
                      <p className="text-gray-700 font-semibold">Knowledge Publisher Platform</p>
                    </div>
                  </div>

                  <div className="relative flex items-center">
                    <div className="flex-1 text-right pr-8">
                      <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold">
                        Q2 2024
                      </div>
                    </div>
                    <div className="w-4 h-4 bg-yellow-500 rounded-full border-4 border-white shadow z-10"></div>
                    <div className="flex-1 pl-8">
                      <p className="text-gray-700 font-semibold">Basic AI Features</p>
                    </div>
                  </div>

                  <div className="relative flex items-center">
                    <div className="flex-1 text-right pr-8">
                      <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                        Q4 2024
                      </div>
                    </div>
                    <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow z-10"></div>
                    <div className="flex-1 pl-8">
                      <p className="text-gray-700 font-semibold">Assistant Beta</p>
                    </div>
                  </div>

                  <div className="relative flex items-center">
                    <div className="flex-1 text-right pr-8">
                      <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                        2025
                      </div>
                    </div>
                    <div className="w-4 h-4 bg-purple-500 rounded-full border-4 border-white shadow z-10"></div>
                    <div className="flex-1 pl-8">
                      <p className="text-gray-700 font-semibold">Full AI Assistant Launch</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
          <div className="section-container text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Be Part of the Future
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              While we're building the AI Assistant, start with our powerful Knowledge Publisher platform today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://app.kenogami.com/auth/signup" className="btn-secondary text-lg">
                Start with Publisher
              </a>
              <Link href="/vision" className="bg-white/10 backdrop-blur hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 inline-block text-center text-lg border border-white/30">
                Learn More About Our Vision
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}