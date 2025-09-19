export default function Testimonials() {
  const testimonials = [
    {
      quote: "Kenogami reduced our support load by 40% while improving customer satisfaction. It's not just a KB—it's a knowledge revolution.",
      author: "Sarah Chen",
      role: "VP Support",
      company: "TechCorp",
      image: "/images/testimonial-1.jpg",
    },
    {
      quote: "The ability to express the same knowledge in multiple formats has been game-changing. Our developers love the API docs, while customers prefer the help articles.",
      author: "Michael Rodriguez",
      role: "Head of Documentation",
      company: "CloudScale",
      image: "/images/testimonial-2.jpg",
    },
    {
      quote: "We went from 3 weeks to create documentation to 3 days. The AI extraction and validation saves us countless hours.",
      author: "Emily Watson",
      role: "Technical Writing Lead",
      company: "DataFlow Inc",
      image: "/images/testimonial-3.jpg",
    },
  ]

  const logos = [
    { name: 'TechCorp', logo: '/images/logo-techcorp.png' },
    { name: 'CloudScale', logo: '/images/logo-cloudscale.png' },
    { name: 'DataFlow', logo: '/images/logo-dataflow.png' },
    { name: 'AppVentures', logo: '/images/logo-appventures.png' },
    { name: 'SaaSify', logo: '/images/logo-saasify.png' },
  ]

  return (
    <section className="bg-gray-50 py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading SaaS Companies
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join innovative teams who've transformed their knowledge management
          </p>
        </div>

        {/* Logo Section */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {logos.map((logo, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-all">
                <div className="w-32 h-12 bg-gray-300 rounded flex items-center justify-center">
                  <span className="text-gray-600 font-semibold">{logo.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <blockquote className="text-gray-700 mb-6">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Case Study */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                Case Study
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                How CloudScale Reduced Support Costs by 45%
              </h3>
              <p className="text-gray-600 mb-6">
                CloudScale transformed their fragmented documentation into an intelligent knowledge system, 
                dramatically reducing support tickets while improving customer satisfaction scores.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-2xl font-bold gradient-text">45%</div>
                  <div className="text-sm text-gray-600">Reduction in tickets</div>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">4.8/5</div>
                  <div className="text-sm text-gray-600">Customer satisfaction</div>
                </div>
              </div>
              <button className="btn-primary">
                Read Full Story →
              </button>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 md:p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-white rounded-full shadow-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary-600">CS</span>
                </div>
                <div className="text-gray-700 font-semibold">CloudScale</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}