import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Insight from '@/components/Insight'
import Solution from '@/components/Solution'
import Authority from '@/components/Authority'
import TestimonialsVideo from '@/components/TestimonialsVideo'
import Plans from '@/components/Plans'
import Differentials from '@/components/Differentials'
import Objections from '@/components/Objections'
import CTAFinal from '@/components/CTAFinal'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import EntryOffer from '@/components/EntryOffer'

export default function Home() {
  return (
    <main style={{ paddingTop: '88px' }}>
      <Nav />
      <Hero />
      <Problem />
      <Insight />
      <Solution />
      <Authority />
      <TestimonialsVideo />
      <Plans />
      <EntryOffer />
      <Differentials />
      <Objections />
      <CTAFinal />
      <FloatingWhatsApp />
    </main>
  )
}