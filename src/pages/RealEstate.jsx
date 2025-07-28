import { motion } from 'framer-motion';

export default function RealEstate() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen bg-white"
    >
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 px-4 text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Find Your Dream Home Today</h1>
        <p className="text-lg text-blue-600 mb-8">Explore premium properties across India’s top cities – trusted by thousands.</p>
        {/* Search Bar */}
        <div className="max-w-xl mx-auto flex bg-white rounded-lg shadow p-2">
          <input className="flex-1 px-4 py-2 rounded-l-lg outline-none" placeholder="Search by city, locality, or property..." />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-r-lg font-semibold hover:bg-blue-700 transition">Search</button>
        </div>
      </section>
      {/* Featured Listings */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Featured Listings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className="bg-gray-50 rounded-lg shadow p-4 flex flex-col">
              <div className="h-40 bg-gray-200 rounded mb-4 flex items-center justify-center">
                <span className="text-3xl text-blue-400 font-bold">🏠</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Modern Apartment #{i}</h3>
              <p className="text-gray-500 mb-2">2 BHK, 1200 sqft, Mumbai</p>
              <span className="text-blue-600 font-bold">₹1.2 Cr</span>
            </div>
          ))}
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-12 px-4 bg-blue-50">
        <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">Why Choose Us</h2>
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
          <div className="flex-1 bg-white rounded-lg shadow p-6 text-center">
            <span className="text-4xl mb-2 block">🔒</span>
            <h4 className="font-semibold mb-2">Trusted & Secure</h4>
            <p className="text-gray-500">Verified listings and secure transactions.</p>
          </div>
          <div className="flex-1 bg-white rounded-lg shadow p-6 text-center">
            <span className="text-4xl mb-2 block">⚡</span>
            <h4 className="font-semibold mb-2">Fast Support</h4>
            <p className="text-gray-500">24/7 customer support for all your needs.</p>
          </div>
          <div className="flex-1 bg-white rounded-lg shadow p-6 text-center">
            <span className="text-4xl mb-2 block">🏆</span>
            <h4 className="font-semibold mb-2">Top Rated</h4>
            <p className="text-gray-500">Thousands of happy customers.</p>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-12 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Testimonials</h2>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <blockquote className="text-lg italic text-gray-600 mb-4">“We found our perfect home in just a week! The process was smooth and transparent.”</blockquote>
          <span className="font-semibold text-blue-600">— Priya S., Mumbai</span>
        </div>
      </section>
      {/* Contact */}
      <section className="py-12 px-4 bg-blue-50 text-center">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Contact Us</h2>
        <p className="text-gray-600 mb-6">Ready to find your dream home? Get in touch with our experts today.</p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Contact Now</button>
      </section>
    </motion.div>
  );
} 