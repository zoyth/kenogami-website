import Header from '@/components/navigation/Header'
import Footer from '@/components/navigation/Footer'
import SupportHero from '@/components/solutions/support/SupportHero'
import SupportChallenges from '@/components/solutions/support/SupportChallenges'
import SupportSolution from '@/components/solutions/support/SupportSolution'
import SupportWorkflow from '@/components/solutions/support/SupportWorkflow'
import SupportMetrics from '@/components/solutions/support/SupportMetrics'
import SupportCTA from '@/components/solutions/support/SupportCTA'

export default function SupportSolutionPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <SupportHero />
        <SupportChallenges />
        <SupportSolution />
        <SupportWorkflow />
        <SupportMetrics />
        <SupportCTA />
      </main>
      <Footer />
    </>
  )
}