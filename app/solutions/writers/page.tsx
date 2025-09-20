import Header from '@/components/navigation/Header'
import Footer from '@/components/navigation/Footer'
import WritersHero from '@/components/solutions/writers/WritersHero'
import WritersTools from '@/components/solutions/writers/WritersTools'
import WritersWorkflow from '@/components/solutions/writers/WritersWorkflow'
import WritersFeatures from '@/components/solutions/writers/WritersFeatures'
import WritersCTA from '@/components/solutions/writers/WritersCTA'

export default function WritersSolutionPage() {
  return (
    <>
      <Header />
      <main>
        <WritersHero />
        <WritersTools />
        <WritersWorkflow />
        <WritersFeatures />
        <WritersCTA />
      </main>
      <Footer />
    </>
  )
}