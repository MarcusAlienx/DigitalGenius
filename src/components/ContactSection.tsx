'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GoogleMap } from './GoogleMap'

export function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="contact" className="section-dark py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-10 right-10 w-40 h-40 border border-white rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-32 h-32 border border-white"
          animate={{
            rotate: -360,
            y: [-10, 10, -10]
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        />
      </div>

      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Get In Touch */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
          variants={itemVariants}
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-8 font-poppins"
              variants={itemVariants}
              whileHover={{ scale: 1.05, color: "#60a5fa" }}
            >
              Get In Touch
            </motion.h2>

            <div className="space-y-6">
              <motion.div
                variants={itemVariants}
                className="flex items-center space-x-4 group"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  variants={iconVariants}
                  className="text-2xl"
                  whileHover={{ scale: 1.3, rotate: 15 }}
                >
                  ✉️
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 font-poppins group-hover:text-blue-400 transition-colors">
                    Email:
                  </h3>
                  <p className="text-gray-300 font-poppins">info@digitalgenius.io</p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-center space-x-4 group"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  variants={iconVariants}
                  className="text-2xl"
                  whileHover={{ scale: 1.3, rotate: 15 }}
                >
                  📍
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 font-poppins group-hover:text-blue-400 transition-colors">
                    Address:
                  </h3>
                  <p className="text-gray-300 font-poppins">
                    3028 N 37th St.<br />
                    Phoenix, AZ 85018
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-center space-x-4 group"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  variants={iconVariants}
                  className="text-2xl"
                  whileHover={{ scale: 1.3, rotate: 15 }}
                >
                  📞
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 font-poppins group-hover:text-blue-400 transition-colors">
                    Phone:
                  </h3>
                  <p className="text-gray-300 font-poppins">480-914-2814 (call or text)</p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-center space-x-4 group"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  variants={iconVariants}
                  className="text-2xl"
                  whileHover={{ scale: 1.3, rotate: 15 }}
                >
                  🕒
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 font-poppins group-hover:text-blue-400 transition-colors">
                    Hours:
                  </h3>
                  <p className="text-gray-300 font-poppins">Always Open</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Google Map */}
          <motion.div variants={itemVariants}>
            <GoogleMap />
          </motion.div>
        </motion.div>

        <motion.hr
          className="border-gray-800 mb-12"
          variants={itemVariants}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1 }}
        />

        {/* Footer Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <motion.h3
              className="text-2xl font-bold text-white mb-4 font-poppins"
              whileHover={{ scale: 1.05 }}
            >
              Digital Genius, LLC
            </motion.h3>
            <motion.p
              className="text-gray-300 font-poppins leading-relaxed"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Full-service digital marketing agency dedicated to helping businesses achieve scalable growth.
              By focusing on operations, marketing, sales, and retention, we provide a comprehensive approach
              that drives long-term success.
            </motion.p>
          </motion.div>

          {/* All Services */}
          <motion.div variants={itemVariants}>
            <motion.h3
              className="text-xl font-bold text-white mb-4 font-poppins"
              whileHover={{ scale: 1.05 }}
            >
              All Services
            </motion.h3>
            <ul className="space-y-2 text-gray-300 font-poppins">
              {[
                'Website Design',
                'Search Engine Optimization',
                'Social Media',
                'Paid Ads',
                'Automation',
                'Influencer Marketing',
                'Business Connect'
              ].map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.button
                    className="hover:text-white transition-colors text-left"
                    whileHover={{ x: 5, color: "#60a5fa" }}
                  >
                    {service}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Other Links */}
          <motion.div variants={itemVariants}>
            <motion.h3
              className="text-xl font-bold text-white mb-4 font-poppins"
              whileHover={{ scale: 1.05 }}
            >
              Other Links
            </motion.h3>
            <ul className="space-y-2 text-gray-300 font-poppins">
              {[
                'About',
                'Contact',
                'Careers',
                'Internships',
                'Book Meeting',
                'Join Our Team',
                'About Your Business',
                'Onboarding',
                'Fee Rebates'
              ].map((link, index) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.button
                    className="hover:text-white transition-colors text-left"
                    whileHover={{ x: 5, color: "#60a5fa" }}
                  >
                    {link}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center md:justify-end space-x-6 mb-8"
          variants={itemVariants}
        >
          {[
            { icon: '🐦', name: 'twitter' },
            { icon: '📷', name: 'instagram' },
            { icon: '📘', name: 'facebook' },
            { icon: '💼', name: 'linkedin' },
            { icon: '📺', name: 'youtube' }
          ].map((social, index) => (
            <motion.button
              key={social.name}
              className="text-gray-300 hover:text-white transition-colors text-2xl"
              whileHover={{
                scale: 1.3,
                rotate: 15,
                color: "#60a5fa"
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {social.icon}
            </motion.button>
          ))}
        </motion.div>

        <motion.hr
          className="border-gray-800 mb-8"
          variants={itemVariants}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Bottom Footer */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          variants={itemVariants}
        >
          <motion.div
            className="flex items-center space-x-4 mb-4 md:mb-0"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-xl font-poppins font-semibold text-white">
              Digital Genius<span className="text-red-500">!</span>
            </span>
          </motion.div>

          <motion.div
            className="flex space-x-6 text-gray-300 font-poppins"
            variants={containerVariants}
          >
            {['Terms of Service', 'Privacy Policy', 'Disclaimers'].map((item, index) => (
              <motion.button
                key={item}
                className="hover:text-white transition-colors"
                whileHover={{ y: -2, color: "#60a5fa" }}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item}
              </motion.button>
            ))}
          </motion.div>

          <motion.button
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors font-poppins mt-4 md:mt-0"
            whileHover={{
              scale: 1.05,
              backgroundColor: "#374151",
              y: -2
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Top ↑
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}
