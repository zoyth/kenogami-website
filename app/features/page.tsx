import Header from '@/components/navigation/Header'
import Footer from '@/components/navigation/Footer'
import FeaturesHero from '@/components/features/FeaturesHero'
import CoreFeatures from '@/components/features/CoreFeatures'
import AdminFeatures from '@/components/features/AdminFeatures'
import ComingSoon from '@/components/features/ComingSoon'
import FeatureCTA from '@/components/features/FeatureCTA'

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <FeaturesHero />
        <CoreFeatures />
        <AdminFeatures />
        <ComingSoon />
        <FeatureCTA />
      </main>
      <Footer />
    </>
  )
}