import { Navigation } from '@/components/Navigation'
import { HeroSection } from '@/components/HeroSection'
import { ProofSection } from '@/components/ProofSection'
import { MarketingSupportSection } from '@/components/MarketingSupportSection'
import { ExpertiseSection } from '@/components/ExpertiseSection'
import { ServicesSection } from '@/components/ServicesSection'
import { MultiChannelSection } from '@/components/MultiChannelSection'
import { JointVentureSection } from '@/components/JointVentureSection'
import { FAQSection } from '@/components/FAQSection'
import { ContactSection } from '@/components/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProofSection />
      <MarketingSupportSection />
      <ExpertiseSection />
      <ServicesSection />
      <MultiChannelSection />
      <JointVentureSection />
      <FAQSection />
      <ContactSection />
    </main>
  )
}
