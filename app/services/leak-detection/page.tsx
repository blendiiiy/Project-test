// app/services/leak-detection/page.tsx
import Link from 'next/link';

export default function LeakDetectionPage() {
  return (
    <section className="max-w-5xl mx-auto p-6">
      <div className="mb-8">
        <Link href="/services" className="text-blue-600 hover:underline">
          ← Back to Services
        </Link>
      </div>
      
      <h1 className="text-4xl font-bold mb-6">Leak Detection Services</h1>
      
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Advanced Leak Detection</h2>
          <p className="text-gray-700 mb-4">
            Our specialized leak detection services use cutting-edge technology to find hidden leaks 
            before they cause extensive damage to your property.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Detection Methods:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Electronic leak detection</li>
            <li>Thermal imaging cameras</li>
            <li>Acoustic leak detection</li>
            <li>Video pipe inspection</li>
            <li>Pressure testing</li>
            <li>Moisture mapping</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-3">Why Early Detection Matters</h3>
          <div className="space-y-3">
            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-semibold">Prevent Water Damage</h4>
              <p className="text-gray-600">Stop leaks before they cause structural damage</p>
            </div>
            
            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-semibold">Save Money</h4>
              <p className="text-gray-600">Early detection prevents costly repairs</p>
            </div>
            
            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-semibold">Protect Your Health</h4>
              <p className="text-gray-600">Prevent mold growth and health issues</p>
            </div>
            
            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-semibold">Insurance Benefits</h4>
              <p className="text-gray-600">Documented leaks help with insurance claims</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="border rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Residential Leak Detection</h3>
          <p className="text-gray-600">
            Comprehensive leak detection for homes, apartments, and residential properties.
          </p>
        </div>
        
        <div className="border rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Commercial Leak Detection</h3>
          <p className="text-gray-600">
            Specialized services for office buildings, retail spaces, and commercial properties.
          </p>
        </div>
        
        <div className="border rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Emergency Detection</h3>
          <p className="text-gray-600">
            24/7 emergency leak detection services for urgent situations.
          </p>
        </div>
      </div>
      
      <div className="mt-8 p-6 bg-red-50 rounded-lg">
        <h3 className="text-xl font-semibold mb-3">Don&apos;t Wait - Detect Leaks Early</h3>
        <p className="text-gray-700 mb-4">
          Hidden leaks can cause thousands in damage. Contact our experts for professional 
          leak detection services today.
        </p>
        <Link 
          href="/contact" 
          className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
        >
          Schedule Detection Service
        </Link>
      </div>
    </section>
  );
} 