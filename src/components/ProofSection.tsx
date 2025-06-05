'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function ProofSection() {
  return (
    <section className="section-dark py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-6 font-poppins"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Want to see proof?
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-8 font-poppins leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Schedule a meeting to see a business we are currently building from $0 to $1 million monthly.
        </motion.p>

        <motion.p
          className="text-lg text-gray-300 mb-8 font-poppins"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          See under the hood exactly how we do it, step by step.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/contact">
            <Button
              className="bg-white text-black hover:bg-gray-200 transition-colors font-poppins font-medium px-8 py-3"
            >
              Schedule Meeting
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
