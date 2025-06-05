'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function ExpertiseSection() {
  return (
    <section id="expertise" className="section-dark py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 font-poppins"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Expertise, Your Empowerment
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-5xl mx-auto font-poppins leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We're not just here to provide services—we're here to empower your business.
            From marketing strategy and sales growth to operational excellence and client
            retention, we do what we do best while sharing our expertise with you every step
            of the way. Together, we create long-lasting success through collaboration,
            transparency, and a commitment to your growth.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/about">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-poppins px-8 py-3"
              >
                Learn About Our Team
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 font-poppins px-8 py-3"
              >
                View Our Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
