'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
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

export function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const services = [
    {
      title: 'Website and Branding',
      description: 'Your website and brand are often the first impression customers have. Together, we create compelling, user-friendly websites and cohesive branding that tell your story and set you apart. Our focus is on building an impactful digital presence that reflects your value, connects with your audience, and builds trust from the first interaction.',
      icon: WebsiteIcon
    },
    {
      title: 'SEO Services',
      description: 'Want to increase Google Maps visibility in for your industry? Our team of local SEO experts can improve your rankings and ensure customers find your business. From a local SEO audit to helping you get found on Google Maps, we deliver measurable results.',
      icon: SEOIcon
    },
    {
      title: 'PPC Advertising',
      description: 'Need on-demand leads? Our PPC advertising for local businesses drives traffic quickly. Whether it\'s Google Ads management or social media advertising for local businesses, we create campaigns tailored to your goals.',
      icon: PPCIcon
    },
    {
      title: 'Social Media Marketing',
      description: 'Social media has evolved into one of the most influential forces shaping consumer behavior. We help build your brand with our social media marketing services. We help small businesses engage audiences and boost visibility.',
      icon: SocialMediaIcon
    },
    {
      title: 'Sales & Marketing',
      description: 'Sales and marketing are the lifeblood of your business, and we keep it flowing smoothly. Our strategies generate leads, boost conversions, and fuel growth. By aligning your sales with impactful campaigns, we build a cohesive system for consistent success.',
      icon: SalesIcon
    },
    {
      title: 'Operational Execution',
      description: 'Great ideas need flawless execution, and we\'re here to make it happen. We turn marketing and business plans into actionable steps, streamlining operations for real results. We handle execution, share insights, and empower your team to focus on growth.',
      icon: OperationsIcon
    },
    {
      title: 'CRM & Automation',
      description: 'We implement CRM and automation tools to simplify complex processes, automate repetitive tasks, and ensure seamless communication between teams and customers. These features boost efficiency, increase lead conversion rates, and provide an exceptional customer experience while saving valuable time.',
      icon: CRMIcon
    },
    {
      title: 'Client & Staff Retention',
      description: 'We create strategies that keep customers loyal and employees engaged, fostering a positive cycle that drives growth. From personalized client experiences to internal initiatives that support your team, we help build lasting relationships that ensure long-term success.',
      icon: RetentionIcon
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="services" className="section-dark py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border-2 border-white rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 border-2 border-white rounded-lg"
          animate={{
            rotate: -360,
            y: [-20, 20, -20]
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 font-poppins"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            What We Offer
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-300 font-poppins"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We provide a full range of services to help your business grow.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="border-b border-gray-800 pb-12 last:border-b-0"
              variants={itemVariants}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Icon */}
                <motion.div
                  className="flex justify-center lg:justify-start"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-32 h-32 md:w-40 md:h-40 text-white">
                    <service.icon />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="text-center lg:text-left">
                  <motion.h3
                    className="text-2xl md:text-3xl font-bold text-white mb-6 font-poppins"
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-300 mb-8 font-poppins leading-relaxed"
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  >
                    {service.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {service.title === 'SEO Services' ? (
                      <Link href="/services/seo">
                        <Button
                          className="bg-white text-black hover:bg-gray-200 transition-colors font-poppins font-medium px-6 py-2"
                        >
                          Learn More
                        </Button>
                      </Link>
                    ) : (
                      <Link href="/contact">
                        <Button
                          className="bg-white text-black hover:bg-gray-200 transition-colors font-poppins font-medium px-6 py-2"
                        >
                          Get Quote
                        </Button>
                      </Link>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
