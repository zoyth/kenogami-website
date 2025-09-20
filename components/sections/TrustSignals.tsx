export default function TrustSignals() {
  const logos = [
    { name: 'Enterprise Co.', placeholder: 'ENTERPRISE' },
    { name: 'Global Tech', placeholder: 'GLOBAL TECH' },
    { name: 'Innovation Inc', placeholder: 'INNOVATION' },
    { name: 'Digital Corp', placeholder: 'DIGITAL CORP' },
    { name: 'Future Systems', placeholder: 'FUTURE SYS' },
    { name: 'Cloud Native', placeholder: 'CLOUD NATIVE' },
  ]

  return (
    <section className="py-16 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-4">
            Trusted by Industry Leaders
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="text-gray-400 font-medium text-sm tracking-wide opacity-60">
                  {logo.placeholder}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900">500+</div>
            <div className="text-sm text-gray-600 uppercase tracking-wide mt-2">Enterprise Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900">10M+</div>
            <div className="text-sm text-gray-600 uppercase tracking-wide mt-2">Documents Managed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900">45+</div>
            <div className="text-sm text-gray-600 uppercase tracking-wide mt-2">Countries Served</div>
          </div>
        </div>
      </div>
    </section>
  )
}