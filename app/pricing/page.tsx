import Header from '@/components/navigation/Header'
import Footer from '@/components/navigation/Footer'

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: '$49',
      period: 'per month',
      description: 'Perfect for small teams getting started with documentation',
      features: [
        'Up to 3 knowledge bases',
        '100 articles',
        '5 team members',
        'Basic analytics',
        'Email support',
        'Custom subdomain'
      ],
      cta: 'Start Free Trial',
      highlighted: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: 'per month',
      description: 'For growing teams that need advanced features',
      features: [
        'Unlimited knowledge bases',
        'Unlimited articles',
        '25 team members',
        'Advanced analytics',
        'Priority support',
        'Custom domain',
        'Version control',
        'Multi-language support',
        'API access'
      ],
      cta: 'Start Free Trial',
      highlighted: true,
      badge: 'Most Popular'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      description: 'Tailored solutions for large organizations',
      features: [
        'Everything in Professional',
        'Unlimited team members',
        'SSO/SAML integration',
        'Advanced security features',
        'Dedicated support',
        'SLA guarantee',
        'Custom integrations',
        'On-premise deployment option',
        'Training & onboarding'
      ],
      cta: 'Contact Sales',
      highlighted: false
    }
  ]

  return (
    <>
      <Header />
      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-brand-ghost to-white py-20">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl text-gray-600">
                Choose the plan that fits your team. All plans include a 14-day free trial.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="section-container">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative rounded-2xl ${
                    plan.highlighted
                      ? 'border-2 border-primary-500 shadow-2xl scale-105'
                      : 'border border-gray-200 shadow-lg'
                  } bg-white p-8`}
                >
                  {plan.badge && (
                    <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {plan.badge}
                    </span>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center gap-1 mb-4">
                      <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={plan.name === 'Enterprise' ? '/contact' : 'https://app.kenogami.com/auth/signup'}
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-lg hover:shadow-xl'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: 'Can I change plans later?',
                  a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.'
                },
                {
                  q: 'What payment methods do you accept?',
                  a: 'We accept all major credit cards and can arrange invoicing for Enterprise customers.'
                },
                {
                  q: 'Is there a setup fee?',
                  a: 'No, there are no setup fees for any of our plans. You can get started immediately.'
                },
                {
                  q: 'Can I cancel anytime?',
                  a: 'Yes, you can cancel your subscription at any time. Your access continues until the end of your billing period.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}