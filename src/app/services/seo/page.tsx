'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SEOIcon } from '@/components/icons/ServiceIcons'

export default function SEOPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-poppins font-semibold text-white">
            Hello Support<span className="text-red-500">!</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/services">
              <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-black">
                ← All Services
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-black">
                Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 font-poppins">
                SEO <span className="text-blue-400">Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed font-poppins">
                Dominate search engine rankings and drive organic traffic to your website
                with our proven SEO strategies and local optimization techniques.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-poppins px-8 py-3">
                    Get SEO Audit
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black font-poppins px-8 py-3">
                  View Case Studies
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-64 h-64 text-blue-400">
                <SEOIcon />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 font-poppins"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our SEO Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Local SEO",
                description: "Optimize your Google My Business listing and improve local search rankings to attract nearby customers.",
                features: ["Google My Business Optimization", "Local Citation Building", "Review Management", "Local Keyword Targeting"]
              },
              {
                title: "Technical SEO",
                description: "Fix technical issues that prevent search engines from properly crawling and indexing your website.",
                features: ["Site Speed Optimization", "Mobile Responsiveness", "Schema Markup", "XML Sitemaps"]
              },
              {
                title: "Content Optimization",
                description: "Create and optimize content that ranks high in search results and engages your target audience.",
                features: ["Keyword Research", "Content Strategy", "On-Page Optimization", "Content Updates"]
              },
              {
                title: "Link Building",
                description: "Build high-quality backlinks from authoritative websites to improve your domain authority.",
                features: ["Quality Link Acquisition", "Competitor Analysis", "Link Audit & Cleanup", "Outreach Campaigns"]
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-gray-800 p-8 rounded-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold mb-4 font-poppins text-blue-400">{service.title}</h3>
                <p className="text-gray-300 mb-6 font-poppins">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300 font-poppins">
                      <span className="text-blue-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl font-bold mb-8 font-poppins"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            SEO Results That Matter
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { metric: "150%", label: "Average Traffic Increase" },
              { metric: "300%", label: "Improvement in Local Rankings" },
              { metric: "85%", label: "Client Retention Rate" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-gray-800 p-8 rounded-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="text-4xl font-bold text-blue-400 mb-4 font-poppins">{stat.metric}</div>
                <div className="text-gray-300 font-poppins">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-poppins px-8 py-3">
                Start Your SEO Journey
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
