import Link from 'next/link'

export default function WritersCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-brand-coral to-primary-500">
      <div className="section-container">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Write Documentation That Users Love
          </h2>
          
          <p className="text-xl text-pink-50 max-w-3xl mx-auto mb-8">
            Join technical writing teams shipping documentation 5x faster with 
            Kenogami's professional authoring platform.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a 
              href="https://app.kenogami.com/auth/signup"
              className="inline-block bg-white text-brand-coral px-8 py-4 rounded-lg font-semibold hover:bg-pink-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Try the Editor Free
            </a>
            <Link 
              href="https://app.kenogami.com/auth/signup"
              className="inline-block bg-brand-coral/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-coral/30 transition-all border-2 border-white/20"
            >
              Request Full Demo
            </Link>
          </div>
          
          <p className="text-pink-100">
            Free for individual writers • Team plans available • No lock-in
          </p>
        </div>
      </div>
    </section>
  )
}