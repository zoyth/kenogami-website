import Header from '@/components/navigation/Header'
import Footer from '@/components/navigation/Footer'
import SaaSSolutionHero from '@/components/solutions/saas/SaaSSolutionHero'
import SaaSChallenges from '@/components/solutions/saas/SaaSChallenges'
import SaaSSolution from '@/components/solutions/saas/SaaSSolution'
import SaaSFeatures from '@/components/solutions/saas/SaaSFeatures'
import SaaSTestimonial from '@/components/solutions/saas/SaaSTestimonial'
import SaaSCTA from '@/components/solutions/saas/SaaSCTA'

export default function SaaSSolutionPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <SaaSSolutionHero />
        <SaaSChallenges />
        <SaaSSolution />
        <SaaSFeatures />
        <SaaSTestimonial />
        <SaaSCTA />
      </main>
      <Footer />
    </>
  )
}