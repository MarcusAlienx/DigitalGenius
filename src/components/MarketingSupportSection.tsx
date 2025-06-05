'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function MarketingSupportSection() {
  return (
    <section id="about" className="section-light py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 font-poppins">
            Marketing Support Backed by Operational Expertise
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto font-poppins leading-relaxed">
            More than just marketing—we partner with you to strategize, implement, and educate. Our marketing
            support goes hand-in-hand with operational insights, ensuring your campaigns are executed effectively
            and your team is empowered every step of the way.
          </p>
        </div>

        {/* Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="border-2 border-black p-8 bg-white">
            <h3 className="text-xl md:text-2xl font-bold text-black mb-6 text-center font-poppins">
              Proven Strategies for High Growth Businesses
            </h3>
            <p className="text-gray-700 mb-8 font-poppins leading-relaxed text-center">
              Our approach with growth goes far beyond execution—we partner with you to navigate the
              complexities of scaling, sharing our years of experience while empowering your team with the
              knowledge and skills that drive measurable results. Together, we ensure your success is built on a
              strong foundation of understanding and collaboration.
            </p>
            <div className="text-center">
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-white transition-colors font-poppins font-medium px-6 py-2"
                >
                  Get Started Today
                </Button>
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border-2 border-black p-8 bg-white">
            <h3 className="text-xl md:text-2xl font-bold text-black mb-6 text-center font-poppins">
              Free Consultations & Tailored Growth Plans
            </h3>
            <p className="text-gray-700 mb-8 font-poppins leading-relaxed text-center">
              We start by building a relationship—offering a no-strings-attached consultation so you can experience the value we
              bring, completely free of charge. Our team doesn't just craft marketing strategies; we work
              closely with you to help execute goals, ensuring we align with your vision for growth. We
              empower you making your success our shared mission.
            </p>
            <div className="text-center">
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-white transition-colors font-poppins font-medium px-6 py-2"
                >
                  Schedule Free Consultation
                </Button>
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="border-2 border-black p-8 bg-white">
            <h3 className="text-xl md:text-2xl font-bold text-black mb-6 text-center font-poppins">
              Proof of Success Back by Real Evidence
            </h3>
            <p className="text-gray-700 mb-8 font-poppins leading-relaxed text-center">
              We take on projects where we know we can deliver results—because your business deserves
              marketing solutions backed by real-world proof. During the onboarding process, we don't
              just talk about our capabilities—we show you real-life examples of projects we've completed. We
              ensure our partnership is built on a foundation of shared expectations.
            </p>
            <div className="text-center">
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-white transition-colors font-poppins font-medium px-6 py-2"
                >
                  See Our Proof
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
