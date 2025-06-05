'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    // Check if we're on the home page
    if (window.location.pathname === '/') {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // Navigate to home page with hash
      router.push(`/#${sectionId}`)
    }
    setIsMenuOpen(false)
  }

  const navigateToPage = (path: string) => {
    router.push(path)
    setIsMenuOpen(false)
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-4 ${
        scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-black'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <motion.div
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xl font-poppins font-semibold text-white">
              Hello Support
              <motion.span
                className="text-red-500"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut"
                }}
              >
                !
              </motion.span>
            </span>
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <motion.button
            onClick={() => navigateToPage('/about')}
            className="text-white hover:text-gray-300 transition-colors font-poppins font-medium"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            ABOUT
          </motion.button>
          <motion.button
            onClick={() => navigateToPage('/services')}
            className="text-white hover:text-gray-300 transition-colors font-poppins font-medium"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            SERVICES
          </motion.button>
          <motion.button
            onClick={() => navigateToPage('/contact')}
            className="text-white hover:text-gray-300 transition-colors font-poppins font-medium"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            CONTACT
          </motion.button>
        </div>

        {/* Schedule Call Back Button */}
        <div className="hidden md:block">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className="bg-white text-black hover:bg-gray-200 transition-colors font-poppins font-medium px-6 py-2"
              onClick={() => navigateToPage('/contact')}
            >
              Schedule Call Back 📞
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={isMenuOpen ? { rotate: 90 } : { rotate: 0 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </motion.svg>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden overflow-hidden"
        initial={false}
        animate={{ height: isMenuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="bg-black/95 backdrop-blur-md border-t border-gray-800 mt-4 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: isMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-4">
            {[
              { label: 'ABOUT', path: '/about' },
              { label: 'SERVICES', path: '/services' },
              { label: 'CONTACT', path: '/contact' }
            ].map((item, index) => (
              <motion.button
                key={item.path}
                onClick={() => navigateToPage(item.path)}
                className="text-white hover:text-gray-300 font-poppins font-medium text-left"
                initial={{ x: -20, opacity: 0 }}
                animate={isMenuOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={isMenuOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Button
                className="bg-white text-black hover:bg-gray-200 transition-colors font-poppins font-medium self-start"
                onClick={() => navigateToPage('/contact')}
              >
                Schedule Call Back 📞
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.nav>
  )
}
