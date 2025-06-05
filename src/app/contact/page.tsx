'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { GoogleMap } from '@/components/GoogleMap'
import { useContactForm } from '@/hooks/useContactForm'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    howWeHelp: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  })

  const { isLoading, isSuccess, error, submitForm, resetForm } = useContactForm()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await submitForm(formData)

    if (!error) {
      setFormData({
        howWeHelp: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
      })
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-poppins font-semibold text-white">
            Digital Genius<span className="text-red-500">!</span>
          </Link>
          <Link href="/">
            <Button variant="outline" className="border-white text-black hover:bg-gray-200 hover:text-black">
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
            Get In <span className="text-blue-400">Touch</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-poppins"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to transform your business? Let's start a conversation about how we can
            help you build a million-dollar brand.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-8 font-poppins">Send Us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white text-left mb-2 font-poppins font-medium">
                    How may we help? *
                  </label>
                  <Textarea
                    value={formData.howWeHelp}
                    onChange={(e) => setFormData({...formData, howWeHelp: e.target.value})}
                    className="w-full bg-gray-800 text-white border-gray-600 rounded-md p-4 h-32 focus:border-blue-500"
                    placeholder="Tell us about your business goals and challenges..."
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-left mb-2 font-poppins font-medium">
                      First Name *
                    </label>
                    <Input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="w-full bg-gray-800 text-white border-gray-600 rounded-md p-3 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white text-left mb-2 font-poppins font-medium">
                      Last Name *
                    </label>
                    <Input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className="w-full bg-gray-800 text-white border-gray-600 rounded-md p-3 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-left mb-2 font-poppins font-medium">
                      Email *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-gray-800 text-white border-gray-600 rounded-md p-3 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white text-left mb-2 font-poppins font-medium">
                      Phone *
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-gray-800 text-white border-gray-600 rounded-md p-3 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>

                {/* Success/Error Messages */}
                {isSuccess && (
                  <motion.div
                    className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="font-poppins">✅ Thank you! We'll get back to you within 24 hours.</p>
                  </motion.div>
                )}

                {error && (
                  <motion.div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="font-poppins">❌ {error}</p>
                    <button
                      onClick={resetForm}
                      className="text-red-600 underline text-sm mt-1 hover:text-red-800 transition-colors font-medium"
                    >
                      Try again
                    </button>
                  </motion.div>
                )}

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-poppins font-medium py-3 disabled:opacity-50"
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-8 font-poppins">Contact Information</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-2xl">
                    ✉️
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-poppins">Email</h3>
                    <p className="text-gray-300 font-poppins">info@digitalgenius.io</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-2xl">
                    📞
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-poppins">Phone</h3>
                    <p className="text-gray-300 font-poppins">480-914-2814 (call or text)</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-2xl">
                    📍
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-poppins">Address</h3>
                    <p className="text-gray-300 font-poppins">
                      3028 N 37th St.<br />
                      Phoenix, AZ 85018
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-2xl">
                    🕒
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-poppins">Hours</h3>
                    <p className="text-gray-300 font-poppins">Always Open</p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div>
                <h3 className="text-xl font-bold mb-4 font-poppins">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: '🐦', name: 'Twitter' },
                    { icon: '📷', name: 'Instagram' },
                    { icon: '📘', name: 'Facebook' },
                    { icon: '💼', name: 'LinkedIn' },
                    { icon: '📺', name: 'YouTube' }
                  ].map((social) => (
                    <button
                      key={social.name}
                      className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-2xl hover:bg-blue-600 transition-colors"
                      title={social.name}
                    >
                      {social.icon}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 font-poppins"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Location
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GoogleMap />
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 font-poppins"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-6">
            {[
              {
                question: "How quickly can you get started on my project?",
                answer: "We typically begin new projects within 1-2 weeks of our initial consultation, depending on the scope and complexity of your needs."
              },
              {
                question: "Do you work with businesses of all sizes?",
                answer: "Yes! We work with startups, small businesses, and established enterprises. Our strategies are scalable and customized to your specific business stage and goals."
              },
              {
                question: "What makes Digital Genius different from other agencies?",
                answer: "We focus on partnership over transactions. We educate and empower your team while delivering results, ensuring you have the knowledge and tools for long-term success."
              },
              {
                question: "Do you offer month-to-month services?",
                answer: "Yes, we offer flexible engagement options including month-to-month services, though we find that longer partnerships typically yield the best results for sustainable growth."
              }
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                className="bg-gray-800 rounded-lg p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-3 font-poppins text-blue-400">{faq.question}</h3>
                <p className="text-gray-300 font-poppins leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
