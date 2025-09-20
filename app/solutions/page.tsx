import Header from '@/components/navigation/Header'
import Footer from '@/components/navigation/Footer'
import SolutionsHero from '@/components/solutions/SolutionsHero'
import SolutionsGrid from '@/components/solutions/SolutionsGrid'
import SolutionsCTA from '@/components/solutions/SolutionsCTA'

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <main>
        <SolutionsHero />
        <SolutionsGrid />
        <SolutionsCTA />
      </main>
      <Footer />
    </>
  )
}