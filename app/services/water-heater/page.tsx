import Link from 'next/link';
import Image from 'next/image';

export default function WaterHeaterServices() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Water Heater Repair & Installation in Austin, TX
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Expert water heater repair and installation services. From traditional tank heaters 
              to modern tankless systems, we handle all types of water heaters.
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
                Professional Water Heater Services
              </h2>
              
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  A properly functioning water heater is essential for your daily comfort and routine. 
                  Whether you&apos;re experiencing cold showers, strange noises, or no hot water at all, 
                  our certified technicians can diagnose and repair any water heater issue quickly and 
                  efficiently. We work with all major brands and models, ensuring you get reliable 
                  service regardless of your water heater type.
                </p>
                
                <p>
                  Our water heater services include repair, replacement, and installation of both 
                  traditional tank heaters and modern tankless systems. We understand that water 
                  heater problems can be urgent, which is why we offer same-day service for most 
                  repairs and emergency appointments when needed. Our team is trained to handle 
                  gas, electric, and hybrid water heaters, providing you with comprehensive 
                  solutions for any situation.
                </p>
                
                <p>
                  When it comes to water heater installation, we take pride in our attention to 
                  detail and commitment to safety. Every installation includes proper permits, 
                  code compliance, and thorough testing to ensure your new water heater operates 
                  at peak efficiency. We also offer maintenance services to extend the life of 
                  your water heater and prevent costly breakdowns.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Image
                src="/images/hero-plumbing.svg"
                alt="Water Heater Repair and Installation Services"
                width={400}
                height={300}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Water Heater Services We Offer
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Repair Services</h3>
              <p className="text-gray-600 mb-4">
                Quick diagnosis and repair of water heater problems including leaks, 
                temperature issues, and pilot light problems.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Thermostat replacement</li>
                <li>• Element replacement</li>
                <li>• Valve repairs</li>
                <li>• Pilot light issues</li>
                <li>• Pressure relief valve</li>
                <li>• Anode rod replacement</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Installation</h3>
              <p className="text-gray-600 mb-4">
                Professional installation of new water heaters with proper permits 
                and code compliance.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Tank water heaters</li>
                <li>• Tankless systems</li>
                <li>• Gas and electric</li>
                <li>• Permits included</li>
                <li>• Code compliance</li>
                <li>• Safety testing</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Maintenance</h3>
              <p className="text-gray-600 mb-4">
                Regular maintenance to extend the life of your water heater 
                and prevent costly repairs.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Annual inspections</li>
                <li>• Tank flushing</li>
                <li>• Anode rod replacement</li>
                <li>• Efficiency optimization</li>
                <li>• Sediment removal</li>
                <li>• Performance testing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Choose Our Water Heater Services?
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Licensed Technicians</h3>
                  <p className="text-gray-600">Certified plumbers with specialized training in water heater systems.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Same-Day Service</h3>
                  <p className="text-gray-600">Quick response times for urgent water heater repairs and emergencies.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Competitive Pricing</h3>
                  <p className="text-gray-600">Fair and transparent pricing with detailed estimates and no hidden fees.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Warranty Included</h3>
                  <p className="text-gray-600">All repairs and installations come with comprehensive warranty coverage.</p>
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

              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Energy Efficient Options</h3>
                  <p className="text-gray-600">Expert advice on energy-efficient water heaters to save you money.</p>
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
            Need Water Heater Service?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for a free estimate on water heater repair or installation 
            in Austin, TX. Don&apos;t suffer through cold showers any longer!
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