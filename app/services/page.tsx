// app/services/page.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      id: 'drain-cleaning',
      title: 'Drain Cleaning',
      description: 'Professional drain cleaning with modern technology to solve any clog. We use advanced equipment to clear blockages and restore proper water flow.',
      image: '/images/drain-cleaning.svg',
      features: ['High-pressure water jetting', 'Video inspection', '24/7 emergency service', 'No mess guarantee']
    },
    {
      id: 'water-heater',
      title: 'Water Heater Repair & Installation',
      description: 'Expert repair and installation of all types of water heaters. From traditional tank heaters to modern tankless systems.',
      image: '/images/hero-plumbing.svg',
      features: ['Tank and tankless heaters', 'Gas and electric models', 'Warranty included', 'Energy-efficient options']
    },
    {
      id: 'leak-detection',
      title: 'Leak Detection',
      description: 'Advanced leak detection using modern technology to find hidden leaks before they cause major damage.',
      image: '/images/leak-detection.svg',
      features: ['Thermal imaging cameras', 'Moisture meters', 'Acoustic detection', 'Detailed reports']
    },
    {
      id: 'emergency-plumbing',
      title: 'Emergency Plumbing',
      description: '24/7 emergency plumbing services for urgent problems that can&apos;t wait. Fast response times and immediate solutions.',
      image: '/images/team-working.svg',
      features: ['24/7 availability', 'Quick response times', 'Emergency repairs', 'Same-day service']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Professional plumbing services for residential and commercial properties. 
              We solve any plumbing problem with expertise and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="p-8">
                  <div className="text-center mb-6">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={200}
                      height={150}
                      className="mx-auto"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What we offer:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/services/${service.id}`}
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Professional Help?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for a free estimate and professional plumbing services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition"
            >
              Get Free Quote
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              Emergency Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
