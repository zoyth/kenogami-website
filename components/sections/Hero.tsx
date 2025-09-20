import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-ghost via-white to-primary-50 pt-28">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="section-container relative">
        <div className="text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 text-sm font-semibold text-primary-700 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full">
              Enterprise Knowledge Platform
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6">
            Modern Documentation<br />
            <span className="gradient-text">That Scales With You</span>
          </h1>
          
          <p className="mx-auto max-w-3xl text-xl text-gray-600 mb-10 leading-relaxed">
            Deploy a secure, professional knowledge base trusted by leading companies. 
            Beautiful documentation that your team will love to create and users will love to read.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://app.kenogami.com/auth/signup" className="btn-primary text-lg">
              Start Free Trial
            </a>
            <a href="https://app.kenogami.com/auth/signup" className="btn-secondary text-lg">
              Get Started
            </a>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">SOC 2 Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">GDPR Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">99.9% SLA</span>
            </div>
          </div>
        </div>
        
        {/* Enterprise metrics */}
        <div className="mt-20 relative">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 px-8 py-6">
              <h3 className="text-white font-semibold text-lg">Enterprise Dashboard</h3>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">12</div>
                  <div className="text-xs text-gray-600 uppercase tracking-wide mt-1">Active Tenants</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">2,847</div>
                  <div className="text-xs text-gray-600 uppercase tracking-wide mt-1">Total Articles</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">156K</div>
                  <div className="text-xs text-gray-600 uppercase tracking-wide mt-1">Monthly Views</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">99.9%</div>
                  <div className="text-xs text-gray-600 uppercase tracking-wide mt-1">Uptime SLA</div>
                </div>
              </div>
              <div className="border-t pt-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-700">System Health</span>
                  <span className="text-xs text-green-600 font-bold uppercase">Operational</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-gray-600 w-20">API</span>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{width: '100%'}}></div>
                    </div>
                    <span className="text-xs text-gray-700 font-medium">32ms</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-gray-600 w-20">Database</span>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{width: '100%'}}></div>
                    </div>
                    <span className="text-xs text-gray-700 font-medium">12ms</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-gray-600 w-20">CDN</span>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{width: '100%'}}></div>
                    </div>
                    <span className="text-xs text-gray-700 font-medium">8ms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}