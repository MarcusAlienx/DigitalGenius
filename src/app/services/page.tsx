'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  WebsiteIcon,
  SEOIcon,
  PPCIcon,
  SocialMediaIcon,
  SalesIcon,
  OperationsIcon,
  CRMIcon,
  RetentionIcon
} from '@/components/icons/ServiceIcons'

export default function ServicesPage() {
  const services = [
    {
      title: 'Website Design & Development',
      description: 'Custom websites that convert visitors into customers with beautiful design and optimized user experience.',
      icon: WebsiteIcon,
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Conversion Focused'],
      slug: 'website-design'
    },
    {
      title: 'Search Engine Optimization',
      description: 'Improve your Google rankings and increase organic traffic with our proven SEO strategies.',
      icon: SEOIcon,
      features: ['Local SEO', 'Technical SEO', 'Content Optimization', 'Link Building'],
      slug: 'seo'
    },
    {
      title: 'PPC Advertising',
      description: 'Get immediate results with targeted pay-per-click campaigns across Google Ads and social platforms.',
      icon: PPCIcon,
      features: ['Google Ads', 'Facebook Ads', 'Campaign Management', 'ROI Optimization'],
      slug: 'ppc-advertising'
    },
    {
      title: 'Social Media Marketing',
      description: 'Build your brand presence and engage with your audience across all social media platforms.',
      icon: SocialMediaIcon,
      features: ['Content Creation', 'Community Management', 'Paid Social', 'Analytics'],
      slug: 'social-media'
    },
    {
      title: 'Sales & Marketing Automation',
      description: 'Streamline your sales process and nurture leads with intelligent marketing automation.',
      icon: SalesIcon,
      features: ['Lead Scoring', 'Email Sequences', 'Sales Funnels', 'CRM Integration'],
      slug: 'sales-marketing'
    },
    {
      title: 'Operational Excellence',
      description: 'Optimize your business operations for maximum efficiency and scalable growth.',
      icon: OperationsIcon,
      features: ['Process Optimization', 'Team Training', 'Performance Metrics', 'Scalability Planning'],
      slug: 'operations'
    },
    {
      title: 'CRM & Automation',
      description: 'Implement and optimize CRM systems to improve customer relationships and sales performance.',
      icon: CRMIcon,
      features: ['CRM Setup', 'Workflow Automation', 'Data Management', 'Integration Services'],
      slug: 'crm-automation'
    },
    {
      title: 'Client & Staff Retention',
      description: 'Develop strategies to keep your best customers and employees engaged and loyal.',
      icon: RetentionIcon,
      features: ['Retention Strategies', 'Loyalty Programs', 'Employee Engagement', 'Customer Success'],
      slug: 'retention'
    }
  ]

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
            Our <span className="text-blue-400">Services</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-poppins"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive marketing and operational solutions designed to scale your business
            from startup to million-dollar enterprise.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                className="bg-gray-900 border border-gray-700 rounded-lg p-8 hover:border-blue-500 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 text-blue-400 flex-shrink-0">
                    <service.icon />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 font-poppins">{service.title}</h3>
                    <p className="text-gray-300 mb-6 font-poppins leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-blue-400 mb-3 font-poppins">KEY FEATURES:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, idx) => (
                          <span
                            key={feature}
                            className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm font-poppins"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <Link href={`/services/${service.slug}`}>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-poppins">
                          Learn More
                        </Button>
                      </Link>
                      <Link href="/contact">
                        <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700 font-poppins">
                          Get Quote
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 font-poppins"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Proven Process
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We analyze your business, goals, and current challenges." },
              { step: "02", title: "Strategy", description: "Custom strategy development based on your unique needs." },
              { step: "03", title: "Execution", description: "Implementation with full transparency and collaboration." },
              { step: "04", title: "Growth", description: "Continuous optimization and scaling for maximum results." }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold font-poppins">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 font-poppins">{item.title}</h3>
                <p className="text-gray-300 font-poppins">{item.description}</p>
              </motion.div>
            ))}
          </div>
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
            Ready to Scale Your Business?
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 mb-8 font-poppins"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's discuss which services are right for your business goals.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/contact">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-poppins px-8 py-3">
                Schedule Consultation
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black font-poppins px-8 py-3">
                Learn About Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
