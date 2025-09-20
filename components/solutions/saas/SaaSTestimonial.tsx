export default function SaaSTestimonial() {
  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12">
            <svg className="w-12 h-12 text-primary-400 mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            
            <blockquote className="text-xl md:text-2xl text-gray-800 font-medium mb-6">
              "Kenogami transformed our documentation workflow. We reduced support tickets 
              by 40% in the first quarter and our developers actually enjoy writing docs now. 
              The API playground alone has saved us countless hours of support time."
            </blockquote>
            
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full mr-4"></div>
              <div>
                <div className="font-semibold text-gray-900">Sarah Chen</div>
                <div className="text-gray-600">VP of Engineering, TechCorp</div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-primary-200">
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary-500">40%</div>
                  <div className="text-sm text-gray-600">Reduction in tickets</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-500">3x</div>
                  <div className="text-sm text-gray-600">Faster onboarding</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-500">95%</div>
                  <div className="text-sm text-gray-600">Developer satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}