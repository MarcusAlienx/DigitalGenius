'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-poppins font-semibold text-white">
            Hello Support<span className="text-red-500">!</span>
          </Link>
          <Link href="/">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              ← Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-8 font-poppins"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About <span className="text-blue-400">Hello Support</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-poppins"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We're not just another marketing agency. We're your strategic partners in building
            million-dollar brands through operational excellence and innovative marketing solutions.
          </motion.p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 font-poppins">Our Story</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed font-poppins">
                Founded with a vision to revolutionize how businesses approach marketing and operations,
                Hello Support has grown from a small team of passionate professionals to a full-service
                digital marketing agency that empowers businesses to achieve scalable growth.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed font-poppins">
                We believe in partnership over transactions, education over execution, and sustainable
                growth over quick fixes. Our approach combines deep marketing expertise with operational
                insights to create lasting success for our clients.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-blue-600 to-purple-700 p-8 rounded-lg"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4 font-poppins">Our Mission</h3>
              <p className="text-lg leading-relaxed font-poppins">
                To empower businesses with the knowledge, tools, and strategies they need to build
                million-dollar brands while maintaining complete transparency and collaboration
                throughout the journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 font-poppins"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Core Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Partnership",
                description: "We work with you, not for you. Your success is our shared mission.",
                icon: "🤝"
              },
              {
                title: "Transparency",
                description: "Complete visibility into our processes, strategies, and results.",
                icon: "🔍"
              },
              {
                title: "Education",
                description: "We empower your team with knowledge and skills for long-term success.",
                icon: "📚"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-gray-800 p-8 rounded-lg text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-4 font-poppins">{value.title}</h3>
                <p className="text-gray-300 font-poppins leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl font-bold mb-8 font-poppins"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Expert Team
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto font-poppins"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our team consists of seasoned professionals with expertise in marketing strategy,
            operations management, sales optimization, and client retention. We bring decades
            of combined experience to help your business thrive.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-poppins px-8 py-3">
                Meet Our Team
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl font-bold mb-6 font-poppins"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ready to Build Your Million Dollar Brand?
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 mb-8 font-poppins"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's work together to elevate your business and create lasting success.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/contact">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-poppins px-8 py-3">
                Get Started Today
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black font-poppins px-8 py-3">
                View Our Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
