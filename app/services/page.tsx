// app/services/page.tsx
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <section className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Plumbing Services</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="border rounded p-6 shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Drain Cleaning</h2>
          <p>Expert drain cleaning services to clear clogs and keep your plumbing flowing smoothly.</p>
          <Link 
            href="/services/drain-cleaning"
            className="text-blue-600 hover:underline mt-3 inline-block"
          >
            Learn More &rarr;
          </Link>
        </div>

        <div className="border rounded p-6 shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Leak Detection</h2>
          <p>Advanced leak detection services to protect your home from water damage.</p>
          <Link 
            href="/services/leak-detection"
            className="text-blue-600 hover:underline mt-3 inline-block"
          >
            Learn More &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
