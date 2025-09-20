import Header from '@/components/navigation/Header'
import Footer from '@/components/navigation/Footer'

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20">
        <section className="py-20">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
              <p className="text-gray-600 mb-8">Last updated: September 2025</p>

              <div className="prose prose-lg max-w-none text-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
                <p className="mb-4">
                  By accessing and using Kenogami, you agree to be bound by these Terms of Service and all 
                  applicable laws and regulations.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Use License</h2>
                <p className="mb-4">
                  Permission is granted to temporarily use Kenogami for personal, non-commercial transitory 
                  viewing only. This license shall automatically terminate if you violate any of these restrictions.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Account Responsibilities</h2>
                <p className="mb-4">
                  You are responsible for maintaining the confidentiality of your account and password, and for 
                  restricting access to your computer. You agree to accept responsibility for all activities that 
                  occur under your account.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Content Guidelines</h2>
                <p className="mb-4">
                  Users may post content as long as it is not obscene, illegal, defamatory, threatening, infringing 
                  of intellectual property rights, invasive of privacy, or injurious in any other way to third parties.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Service Modifications</h2>
                <p className="mb-4">
                  Kenogami reserves the right to modify or discontinue, temporarily or permanently, the service 
                  with or without notice. You agree that Kenogami shall not be liable to you or any third party 
                  for any modification, suspension, or discontinuance of the service.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Limitation of Liability</h2>
                <p className="mb-4">
                  In no event shall Kenogami or its suppliers be liable for any damages arising out of the use 
                  or inability to use the materials on Kenogami, even if Kenogami has been notified of the 
                  possibility of such damages.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Governing Law</h2>
                <p className="mb-4">
                  These terms and conditions are governed by and construed in accordance with the laws of the 
                  jurisdiction in which Kenogami operates, and you irrevocably submit to the exclusive 
                  jurisdiction of the courts in that location.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Contact Information</h2>
                <p className="mb-4">
                  For questions about these Terms of Service, please contact us at legal@kenogami.com.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}