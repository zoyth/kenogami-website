import Hero from '@/components/sections/Hero'
import TrustSignals from '@/components/sections/TrustSignals'
import Problem from '@/components/sections/Problem'
import Solution from '@/components/sections/Solution'
import HowItWorks from '@/components/sections/HowItWorks'
import ProductShowcase from '@/components/sections/ProductShowcase'
import ROI from '@/components/sections/ROI'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'
import Header from '@/components/navigation/Header'
import Footer from '@/components/navigation/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <TrustSignals />
        <Problem />
        <Solution />
        <HowItWorks />
        <ProductShowcase />
        <ROI />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}