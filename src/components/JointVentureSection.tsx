import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function JointVentureSection() {
  return (
    <section className="section-dark py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="border-2 border-white p-12 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 font-poppins">
            Joint Venture Revenue Sharing for Ambitious Businesses
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-8 font-poppins leading-relaxed">
            Ask about our exclusive joint venture revenue sharing program. With a minimum monthly commitment of
            $10,000, we become true partners in your growth—offering unlimited marketing services tailored to your
            business needs. This program is designed for high-growth companies with an average transaction size of
            at least $4,500 and a minimum of $3 million in annual revenue.
          </p>

          <Link href="/contact">
            <Button
              className="bg-white text-black hover:bg-gray-200 transition-colors font-poppins font-medium px-8 py-3"
            >
              Apply for Partnership
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
