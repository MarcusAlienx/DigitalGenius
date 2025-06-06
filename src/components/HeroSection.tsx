'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useContactForm } from '@/hooks/useContactForm'

export function HeroSection() {
  const [formData, setFormData] = useState({
    howWeHelp: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  })

  const [mounted, setMounted] = useState(false)
  const { scrollY } = useScroll()
  const { isLoading, isSuccess, error, submitForm, resetForm } = useContactForm()

  // Parallax effects
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150])
  const textY = useTransform(scrollY, [0, 500], [0, -50])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3])

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await submitForm(formData)

    if (!error) {
      // Reset form on success
      setFormData({
        howWeHelp: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
      })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const textVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  }

  if (!mounted) return null

  return (
    <section id="hero" className="section-dark min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Animated Background Elements with Parallax */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{ y: backgroundY }}
      >
        <motion.div
          className="absolute top-10 left-10 text-9xl font-bold text-gray-600"
          animate={{
            rotate: [0, 5, -5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        >
          01
        </motion.div>

        <motion.div
          className="absolute top-32 right-32 text-6xl font-bold text-gray-600"
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        >
          C/A
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-32 text-8xl font-bold text-gray-600"
          animate={{
            x: [-10, 10, -10],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        >
          BI
        </motion.div>

        <motion.div
          className="absolute bottom-10 right-10 text-7xl font-bold text-gray-600"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 15, 0]
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        >
          H
        </motion.div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="w-96 h-96 rounded-full border-4 border-gray-600 opacity-30"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute top-10 left-10 w-72 h-72 rounded-full border-2 border-gray-600 opacity-20"
            animate={{
              rotate: -360,
              scale: [1, 0.9, 1]
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear"
            }}
          />
        </div>

        {/* Additional floating elements */}
        <motion.div
          className="absolute top-1/4 left-1/3 w-8 h-8 bg-white/5 rounded-full"
          animate={{
            y: [-30, 30, -30],
            x: [-15, 15, -15],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-12 h-12 bg-white/5 rounded-lg"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 16,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      <motion.div
        className="max-w-7xl mx-auto px-4 text-center relative z-10"
        style={{ y: textY, opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Headline with Advanced Animation */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 font-poppins leading-tight"
          variants={textVariants}
        >
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We Build
          </motion.span>{" "}
          <motion.span
            className="inline-block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Million Dollar
          </motion.span>
          <br />
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Brands—
          </motion.span>
          <motion.span
            className="inline-block text-blue-400"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.1, color: "#60a5fa" }}
          >
            Together.
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto font-poppins leading-relaxed"
          variants={itemVariants}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            Operations, Marketing, Sales, & Retention—Done for You, with You. We don't just execute;
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            we empower. Ask us how we can work together to elevate your business and create lasting success.
          </motion.span>
        </motion.p>

        {/* Contact Form with Tilt Effect */}
        <motion.div
          variants={itemVariants}
          className="max-w-2xl mx-auto"
        >
          <Tilt
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <motion.div
              className="bg-black/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
              transition={{ duration: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  <label className="block text-white text-left mb-2 font-poppins font-medium">
                    How may we help? *
                  </label>
                  <Textarea
                    value={formData.howWeHelp}
                    onChange={(e) => setFormData({...formData, howWeHelp: e.target.value})}
                    className="w-full bg-white text-black border-gray-300 rounded-md p-4 h-24 transition-all duration-300 focus:scale-105 focus:shadow-lg"
                    placeholder=""
                    required
                  />
                </motion.div>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                >
                  <div>
                    <label className="block text-white text-left mb-2 font-poppins font-medium">
                      First Name *
                    </label>
                    <Input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="w-full bg-white text-black border-gray-300 rounded-md p-3 transition-all duration-300 focus:scale-105"
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
                      className="w-full bg-white text-black border-gray-300 rounded-md p-3 transition-all duration-300 focus:scale-105"
                      required
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.8 }}
                >
                  <div>
                    <label className="block text-white text-left mb-2 font-poppins font-medium">
                      Email *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-white text-black border-gray-300 rounded-md p-3 transition-all duration-300 focus:scale-105"
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
                      className="w-full bg-white text-black border-gray-300 rounded-md p-3 transition-all duration-300 focus:scale-105"
                      required
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="text-left text-sm text-gray-400 font-poppins"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 2 }}
                >
                  <label className="flex items-start space-x-2">
                    <input type="checkbox" className="mt-1" required />
                    <span>
                      I consent to receive SMS notifications, alerts & occasional marketing communication from Digital Genius.
                      Message frequency varies. Message & data rates may apply. Text HELP to <strong>480-788-5653</strong> for assistance.
                      You can reply STOP to unsubscribe at any time.
                    </span>
                  </label>
                  <div className="mt-2">
                    <button className="underline hover:text-white transition-colors">Privacy Policy</button> • <button className="underline hover:text-white transition-colors">Terms of Service</button>
                  </div>
                </motion.div>

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

                <motion.div
                  className="flex justify-end"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 2.2 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="bg-white text-black hover:bg-gray-200 transition-all duration-300 font-poppins font-medium px-8 py-3 flex items-center space-x-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <span>Sending...</span>
                          <motion.div
                            className="w-4 h-4 border-2 border-black border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          />
                        </>
                      ) : (
                        <>
                          <span>NEXT</span>
                          <motion.svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </motion.svg>
                        </>
                      )}
                    </Button>
                  </motion.div>
                </motion.div>
              </form>
            </motion.div>
          </Tilt>
        </motion.div>
      </motion.div>
    </section>
  )
}
