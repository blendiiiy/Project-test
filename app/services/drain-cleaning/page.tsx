// app/services/drain-cleaning/page.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function DrainCleaningPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Drain Cleaning in Austin, TX
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Professional drain cleaning services to keep your plumbing system flowing smoothly. 
              Licensed experts with advanced equipment for all your drain cleaning needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Professional Drain Cleaning Services
              </h2>
              
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  When your drains are clogged or slow, it can disrupt your entire household routine. 
                  Our professional drain cleaning services in Austin use advanced technology and proven 
                  methods to restore proper water flow and prevent future blockages. Whether you&apos;re 
                  dealing with a kitchen sink that won&apos;t drain or a shower that&apos;s backing up, 
                  our experienced technicians can quickly identify and resolve the issue.
                </p>
                
                <p>
                  We offer comprehensive drain cleaning solutions for residential and commercial properties 
                  throughout the Austin area. Our team is equipped with state-of-the-art equipment including 
                  hydro jetting machines, video inspection cameras, and professional-grade drain snakes. 
                  This allows us to tackle even the most stubborn clogs while providing you with a detailed 
                  assessment of your plumbing system&apos;s condition.
                </p>
                
                <p>
                  Don&apos;t let minor drain issues turn into major plumbing problems. Regular drain 
                  cleaning not only prevents clogs but also extends the life of your plumbing system and 
                  saves you money on costly repairs. Our preventive maintenance programs help keep your 
                  drains flowing freely year-round.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Image
                src="/images/drain-cleaning.svg"
                alt="Professional Drain Cleaning Services"
                width={400}
                height={300}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Drain Cleaning Services We Offer
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Kitchen Sink Drain Cleaning</h3>
              <p className="text-gray-600 mb-4">
                Remove grease, food particles, and soap buildup from kitchen drains.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Grease removal</li>
                <li>• Food particle clearing</li>
                <li>• Soap buildup removal</li>
                <li>• Garbage disposal cleaning</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Bathroom Drain Cleaning</h3>
              <p className="text-gray-600 mb-4">
                Clear hair, soap scum, and mineral deposits from bathroom fixtures.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Shower drain cleaning</li>
                <li>• Bathtub drain clearing</li>
                <li>• Sink drain maintenance</li>
                <li>• Hair removal</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Main Sewer Line Cleaning</h3>
              <p className="text-gray-600 mb-4">
                Professional sewer line cleaning and root removal services.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Sewer line inspection</li>
                <li>• Root removal</li>
                <li>• Hydro jetting</li>
                <li>• Video inspection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Choose Our Drain Cleaning Services?
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Advanced Equipment</h3>
                  <p className="text-gray-600">State-of-the-art hydro jetting machines and video inspection cameras for thorough cleaning.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Licensed Technicians</h3>
                  <p className="text-gray-600">Certified plumbers with years of experience in drain cleaning and plumbing repair.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">24/7 Emergency Service</h3>
                  <p className="text-gray-600">Available around the clock for urgent drain problems that can&apos;t wait.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Competitive Pricing</h3>
                  <p className="text-gray-600">Fair and transparent pricing with no hidden fees or surprise charges.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Warranty Included</h3>
                  <p className="text-gray-600">All our drain cleaning work comes with a satisfaction guarantee.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Local Austin Service</h3>
                  <p className="text-gray-600">Serving Austin and surrounding areas with quick response times.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Professional Drain Cleaning?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Don&apos;t let clogged drains disrupt your daily routine. Contact our professional team 
            for reliable drain cleaning services in Austin, TX.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition"
            >
              Get Free Quote
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 