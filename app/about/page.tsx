import Header from '@/components/navigation/Header'
import Footer from '@/components/navigation/Footer'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-brand-ghost to-white py-20">
          <div className="section-container">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Redefining How Organizations
                <span className="gradient-text"> Share Knowledge</span>
              </h1>
              <p className="text-xl text-gray-600">
                We believe documentation should be a living, breathing asset that grows with your organization. 
                Kenogami transforms how teams create, manage, and share their collective knowledge.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-4">
                  To empower organizations with a knowledge platform that adapts to their needs, 
                  not the other way around. We're building the infrastructure for the next generation 
                  of documentation systems.
                </p>
                <p className="text-lg text-gray-600">
                  In a world where information doubles every year, traditional documentation tools 
                  fall short. Kenogami bridges this gap with intelligent, scalable, and beautiful 
                  knowledge management solutions.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Purpose-Driven</h3>
                      <p className="text-gray-600">Making knowledge accessible and actionable for everyone</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Innovation-First</h3>
                      <p className="text-gray-600">Pushing boundaries of what documentation can be</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Customer-Centric</h3>
                      <p className="text-gray-600">Your success is our primary measure of achievement</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✨</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Simplicity</h3>
                <p className="text-gray-600">
                  Complex problems deserve elegant solutions. We obsess over making powerful features feel effortless.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Trust</h3>
                <p className="text-gray-600">
                  Security and reliability aren't features—they're foundations. Your data is sacred to us.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌱</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Growth</h3>
                <p className="text-gray-600">
                  We grow with you. Our platform scales from startup to enterprise without missing a beat.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Our Story</h2>
              <div className="prose prose-lg mx-auto text-gray-600">
                <p>
                  Kenogami was born from a simple observation: despite all the tools available, 
                  most organizations struggle with documentation. It's either outdated, hard to find, 
                  or locked away in silos.
                </p>
                <p>
                  We started by asking fundamental questions: What if documentation could update itself? 
                  What if it could learn from how people use it? What if every team member could contribute 
                  without friction?
                </p>
                <p>
                  Today, Kenogami is more than a documentation platform—it's a knowledge ecosystem that 
                  helps organizations capture, organize, and share their collective intelligence. We're 
                  just getting started on our mission to make knowledge work for everyone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-700">
          <div className="section-container text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Join Us in Building the Future
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Whether as a customer, partner, or team member, be part of the knowledge revolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://app.kenogami.com/auth/signup" className="btn-secondary">
                Try Kenogami Free
              </a>
              <a href="/contact" className="bg-primary-700 hover:bg-primary-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 inline-block text-center">
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}