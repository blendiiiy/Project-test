import Link from 'next/link';
import Image from 'next/image';

export default function EmergencyPlumbing() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              24/7 Emergency Plumbing
            </h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Urgent plumbing problems that can&apos;t wait. We&apos;re available 24/7 
              for emergency repairs and immediate solutions.
            </p>
            <div className="mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 inline-block">
                <h3 className="text-2xl font-bold mb-2">Emergency Hotline</h3>
                <p className="text-3xl font-bold text-yellow-300">(555) 123-4567</p>
                <p className="text-red-100">Available 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Emergency Services We Provide
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-500">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Burst Pipes</h3>
              <p className="text-gray-600 mb-4">
                Immediate response to burst pipes to prevent water damage and flooding.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Quick pipe repair</li>
                <li>• Water damage prevention</li>
                <li>• Temporary fixes</li>
                <li>• Permanent solutions</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-500">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Sewer Backups</h3>
              <p className="text-gray-600 mb-4">
                Emergency sewer line clearing and repair to restore proper drainage.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Sewer line clearing</li>
                <li>• Root removal</li>
                <li>• Camera inspection</li>
                <li>• Line repair</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-500">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Water Heater Failures</h3>
              <p className="text-gray-600 mb-4">
                Emergency water heater repair and replacement when you need hot water.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Quick diagnostics</li>
                <li>• Emergency repairs</li>
                <li>• Temporary solutions</li>
                <li>• Same-day service</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-500">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Gas Leaks</h3>
              <p className="text-gray-600 mb-4">
                Emergency gas line repair and safety checks to prevent dangerous situations.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Gas leak detection</li>
                <li>• Emergency repairs</li>
                <li>• Safety inspections</li>
                <li>• Line replacement</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-500">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Clogged Drains</h3>
              <p className="text-gray-600 mb-4">
                Emergency drain clearing when water won&apos;t drain and you need immediate help.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• High-pressure jetting</li>
                <li>• Snake clearing</li>
                <li>• Video inspection</li>
                <li>• Root removal</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-500">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">No Water</h3>
              <p className="text-gray-600 mb-4">
                Emergency water service restoration when you have no water supply.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Main line repair</li>
                <li>• Valve replacement</li>
                <li>• Pressure issues</li>
                <li>• Service restoration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Emergency Service */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Why Choose Our Emergency Service?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">24/7 Availability</h3>
                    <p className="text-gray-600">We&apos;re available around the clock for emergency calls.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Fast Response</h3>
                    <p className="text-gray-600">Average response time of 30 minutes or less.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Licensed Technicians</h3>
                    <p className="text-gray-600">Certified professionals with emergency experience.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Fair Emergency Pricing</h3>
                    <p className="text-gray-600">Transparent emergency rates with no hidden fees.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Image
                src="/images/team-working.svg"
                alt="Emergency Plumbing Team"
                width={400}
                height={300}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Emergency Plumbing Hotline
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Don&apos;t wait! Call us immediately for urgent plumbing problems.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">24/7 Emergency Service</h3>
            <p className="text-4xl font-bold text-yellow-300 mb-2">(555) 123-4567</p>
            <p className="text-red-100">Available 24 hours a day, 7 days a week</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-yellow-400 text-red-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition"
            >
              Contact Us Now
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 