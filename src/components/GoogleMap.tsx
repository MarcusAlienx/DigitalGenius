'use client'

import { motion } from 'framer-motion'

export function GoogleMap() {
  return (
    <motion.div
      className="w-full h-80 rounded-lg overflow-hidden shadow-lg"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d0!3d0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s3550%20N%20Goldwater%20Blvd%20%231055%20Scottsdale%2C%20AZ%2085251!5e0!3m2!1sen!2sus!4v1700000000000"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Hello Support Location"
        className="rounded-lg"
      />
    </motion.div>
  )
}
