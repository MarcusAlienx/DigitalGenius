import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function MultiChannelSection() {
  const strategies = [
    {
      title: 'Search Engine Optimization (SEO)',
      description: 'Be found by your target audience.'
    },
    {
      title: 'Paid Search Advertising (PPC)',
      description: 'Targeted ads for on demand lead generation.'
    },
    {
      title: 'Social Media Marketing',
      description: 'Engage your audience and build brand loyalty.'
    },
    {
      title: 'Content Marketing',
      description: 'Valuable content that educates, engages, and converts.'
    },
    {
      title: 'Email Marketing',
      description: 'Stay top-of-mind with targeted, personalized communication.'
    },
    {
      title: 'Influencer Marketing',
      description: 'Partner with trusted voices in your niche.'
    },
    {
      title: 'Video Marketing',
      description: 'Captivate your audience through the power of storytelling.'
    },
    {
      title: 'Programmatic Advertising',
      description: 'Advanced targeting to reach your ideal audience efficiently.'
    },
    {
      title: 'Affiliate Marketing',
      description: 'Leverage partner networks for increased sales.'
    },
    {
      title: 'Local SEO',
      description: 'Be found by customers in your community.'
    },
    {
      title: 'Conversion Rate Optimization (CRO)',
      description: 'Maximize the value of your traffic.'
    },
    {
      title: 'Voice Search Optimization',
      description: 'Optimize for how people search using voice assistants.'
    },
    {
      title: 'AI Customer Engagement',
      description: 'Provide immediate, personalized interaction.'
    },
    {
      title: 'Chat Bot Automation',
      description: 'Scale marketing efforts efficiently.'
    },
    {
      title: 'Webinars',
      description: 'Educate and engage with your audience in real-time.'
    }
  ]

  return (
    <section id="multi-channel" className="section-light py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8 font-poppins">
            A Multi-Channel Approach for Scalable Growth
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto font-poppins leading-relaxed">
            Focusing on just one marketing channel is no longer enough to scale a business to significant growth. A
            multi-channel marketing strategy ensures you reach your audience wherever they are, maximizing
            touchpoints and engagement opportunities.
          </p>
        </div>

        {/* Strategies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strategies.map((strategy, index) => (
            <div key={strategy.title} className="border-2 border-black p-6 bg-white">
              <h3 className="text-lg md:text-xl font-bold text-black mb-4 text-center font-poppins">
                {strategy.title}
              </h3>
              <p className="text-gray-700 mb-6 font-poppins text-center">
                {strategy.description}
              </p>
              <div className="text-center">
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-black text-black hover:bg-black hover:text-white transition-colors font-poppins font-medium px-6 py-2"
                  >
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
