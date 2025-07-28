// app/services/drain-cleaning/page.tsx
import Link from 'next/link';

export default function DrainCleaningPage() {
  return (
    <section className="max-w-5xl mx-auto p-6">
      <div className="mb-8">
        <Link href="/services" className="text-blue-600 hover:underline">
          ← Back to Services
        </Link>
      </div>
      
      <h1 className="text-4xl font-bold mb-6">Drain Cleaning Services</h1>
      
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Professional Drain Cleaning</h2>
          <p className="text-gray-700 mb-4">
            Our expert plumbers provide comprehensive drain cleaning services to keep your plumbing system 
            flowing smoothly and prevent costly repairs.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Services We Offer:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Kitchen sink drain cleaning</li>
            <li>Bathroom drain cleaning</li>
            <li>Shower and bathtub drain cleaning</li>
            <li>Main sewer line cleaning</li>
            <li>Hydro jetting services</li>
            <li>Preventive maintenance</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-3">Why Choose Our Drain Cleaning?</h3>
          <div className="space-y-3">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold">Advanced Equipment</h4>
              <p className="text-gray-600">State-of-the-art drain cleaning tools and hydro jetting equipment</p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold">Experienced Technicians</h4>
              <p className="text-gray-600">Licensed and certified plumbers with years of experience</p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold">24/7 Emergency Service</h4>
              <p className="text-gray-600">Available round the clock for urgent drain issues</p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold">Competitive Pricing</h4>
              <p className="text-gray-600">Fair and transparent pricing with no hidden fees</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 p-6 bg-blue-50 rounded-lg">
        <h3 className="text-xl font-semibold mb-3">Contact Us Today</h3>
        <p className="text-gray-700 mb-4">
          Don&apos;t let clogged drains disrupt your daily routine. Contact our professional team 
          for reliable drain cleaning services.
        </p>
        <Link 
          href="/contact" 
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Get Free Quote
        </Link>
      </div>
    </section>
  );
} 