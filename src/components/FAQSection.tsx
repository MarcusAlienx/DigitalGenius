'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function FAQSection() {
  const faqs = [
    {
      question: 'Why is it important for clients to understand the marketing strategies being used?',
      answer: 'Understanding the marketing strategies used by your agency helps ensure that you, as the client, are aligned with the vision and direction of each campaign. This deeper understanding allows for more meaningful collaboration, as you can provide valuable input that can improve outcomes. When both the client and agency are on the same page, it creates a more seamless partnership that drives better results.'
    },
    {
      question: 'How does a partnership approach between a client and agency improve marketing outcomes?',
      answer: 'A partnership approach means we work closely with you to create campaigns that truly reflect your brand\'s goals and values. When clients are educated about the strategies being implemented, they are more engaged, leading to richer feedback and more tailored campaigns. This level of collaboration often leads to higher success rates because it blends the agency\'s expertise with the client\'s intimate knowledge of their audience and industry.'
    },
    {
      question: 'What are the benefits of educating clients throughout the marketing process?',
      answer: 'Educating clients throughout the marketing process not only demystifies the strategies used but also empowers you to make informed decisions. It ensures transparency, builds trust, and allows for a shared understanding of how specific actions impact the overall growth plan. This knowledge equips clients to participate more actively and to appreciate the nuances of why certain decisions are made, ultimately enhancing the success of each campaign.'
    },
    {
      question: 'How does understanding marketing help foster a better client-agency relationship?',
      answer: 'When clients understand the marketing process, it helps foster mutual respect and trust between both parties. It turns the relationship into a true partnership rather than a transactional one. By being informed, you\'re able to see firsthand the value being delivered, which leads to increased confidence in the agency\'s expertise. This trust forms the foundation for a lasting relationship focused on shared success.'
    },
    {
      question: 'How does learning about marketing empower clients beyond individual campaigns?',
      answer: 'When clients learn about marketing strategies, it empowers them to take ownership of their brand\'s success beyond just one-off campaigns. This deeper knowledge can help you make more strategic decisions in other areas of the business, from content creation to customer engagement. Understanding the bigger picture means you can play an active role in sustaining and scaling growth, making the partnership with your agency an ongoing collaborative effort.'
    }
  ]

  return (
    <section className="section-light py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8 font-poppins">
            FAQS
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full mb-12">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index}`} className="border-b border-gray-300">
              <AccordionTrigger className="text-left font-poppins font-medium text-lg text-black hover:text-gray-600">
                {index + 1}. {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 font-poppins leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-gray-600 mb-6 font-poppins">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-poppins px-8 py-3">
                Contact Us
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" className="border-gray-600 text-gray-700 hover:bg-gray-100 font-poppins px-8 py-3">
                Learn More
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
