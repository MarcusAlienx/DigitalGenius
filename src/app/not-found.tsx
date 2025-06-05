'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-9xl font-bold mb-8 font-poppins text-blue-400">404</h1>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 font-poppins"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Page Not Found
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 mb-8 font-poppins max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Oops! The page you're looking for doesn't exist. It might have been moved,
            deleted, or you entered the wrong URL.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-poppins px-8 py-3">
                Go Back Home
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black font-poppins px-8 py-3">
                Contact Support
              </Button>
            </Link>
          </motion.div>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-gray-500 font-poppins">
              Need help? Visit our{' '}
              <Link href="/services" className="text-blue-400 hover:text-blue-300 underline">
                services page
              </Link>{' '}
              or{' '}
              <Link href="/about" className="text-blue-400 hover:text-blue-300 underline">
                learn more about us
              </Link>
              .
            </p>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}
