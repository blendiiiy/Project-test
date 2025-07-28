// app/about/page.tsx
import Link from 'next/link';

export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto p-6">
      <div className="mb-8">
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-8 text-center">About PlumbingPro</h1>

      {/* Company Story */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-blue-600">Our Story</h2>
        <div className="bg-blue-50 p-8 rounded-lg">
          <p className="text-gray-700 mb-4 leading-relaxed">
            Started as a family business in Austin, with a simple mission: to help the local 
            community with reliable and professional plumbing services.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            With more than 10 years of experience in installations and repairs, our team has developed 
            the expertise needed to handle any type of plumbing problem.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Founded to help the local community, our company has grown from a small team 
            into a reliable organization serving Austin and surrounding areas.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-blue-600">Our Mission</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Quick Solutions</h3>
            <p className="text-gray-600">
              To provide quick and professional solutions for plumbing problems 
              with modern technology and proven expertise.
            </p>
          </div>

          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Trust & Relationships</h3>
            <p className="text-gray-600">
              To build trust and long-term relationships with clients through quality 
              services and transparent communication.
            </p>
          </div>

          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">#1 Company</h3>
            <p className="text-gray-600">
              To be the #1 company for emergency services in Austin, becoming the 
              first choice for any plumbing problem.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-blue-600">Our Values</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="text-center bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Reliability</h3>
            <p className="text-gray-600 text-sm">
              Every job is done with dedication and high quality, respecting your time and budget.
            </p>
          </div>

          <div className="text-center bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">24/7 Help</h3>
            <p className="text-gray-600 text-sm">
              Always ready for emergencies, we offer 24/7 services for urgent plumbing problems.
            </p>
          </div>

          <div className="text-center bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Transparency</h3>
            <p className="text-gray-600 text-sm">
              Prices and services are clear, with no hidden costs or unexpected surprises.
            </p>
          </div>

          <div className="text-center bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Quality</h3>
            <p className="text-gray-600 text-sm">
              Every intervention is done with quality materials and perfect technique for lasting results.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gray-50 p-8 rounded-lg">
        <h3 className="text-2xl font-semibold mb-4">Ready to Work With Us?</h3>
        <p className="text-gray-600 mb-6">
          Experience the PlumbingPro difference. Contact us today for reliable, professional plumbing services.
        </p>
        <div className="space-x-4">
          <Link 
            href="/services" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition inline-block"
          >
            View Our Services
          </Link>
          <Link 
            href="/contact" 
            className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition inline-block"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
} 