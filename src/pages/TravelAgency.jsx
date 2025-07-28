import { motion } from 'framer-motion';

export default function TravelAgency() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen bg-white"
    >
      {/* Hero Section */}
      <section className="bg-yellow-50 py-16 px-4 text-center">
        <h1 className="text-4xl font-bold text-yellow-700 mb-4">Adventure Awaits. Let’s Travel.</h1>
        <p className="text-lg text-yellow-600 mb-8">Explore 50+ destinations with luxury & budget-friendly packages.</p>
        <button className="bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition">Explore Packages</button>
      </section>
      {/* Destinations */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Top Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Goa", "Manali", "Kerala"].map((place, i) => (
            <div key={place} className="bg-white rounded-lg shadow p-4 flex flex-col">
              <div className="h-40 bg-yellow-100 rounded mb-4 flex items-center justify-center">
                <span className="text-3xl text-yellow-400 font-bold">🌏</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">{place}</h3>
              <p className="text-gray-500 mb-2">Special packages available</p>
              <span className="text-yellow-600 font-bold">From ₹9,999</span>
            </div>
          ))}
        </div>
      </section>
      {/* Why Us */}
      <section className="py-12 px-4 bg-yellow-50">
        <h2 className="text-2xl font-bold mb-6 text-yellow-700 text-center">Why Us?</h2>
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
          <div className="flex-1 bg-white rounded-lg shadow p-6 text-center">
            <span className="text-4xl mb-2 block">🛡️</span>
            <h4 className="font-semibold mb-2">Safe & Secure</h4>
            <p className="text-gray-500">Your safety is our priority.</p>
          </div>
          <div className="flex-1 bg-white rounded-lg shadow p-6 text-center">
            <span className="text-4xl mb-2 block">💸</span>
            <h4 className="font-semibold mb-2">Best Prices</h4>
            <p className="text-gray-500">Affordable packages for all budgets.</p>
          </div>
          <div className="flex-1 bg-white rounded-lg shadow p-6 text-center">
            <span className="text-4xl mb-2 block">⭐</span>
            <h4 className="font-semibold mb-2">Top Rated</h4>
            <p className="text-gray-500">Loved by 10,000+ travelers.</p>
          </div>
        </div>
      </section>
      {/* Customer Stories */}
      <section className="py-12 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Customer Stories</h2>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <blockquote className="text-lg italic text-gray-600 mb-4">“Best trip ever! Everything was perfectly organized.”</blockquote>
          <span className="font-semibold text-yellow-600">— Aditi R., Pune</span>
        </div>
      </section>
      {/* Newsletter Signup */}
      <section className="py-12 px-4 bg-yellow-50 text-center">
        <h2 className="text-2xl font-bold mb-4 text-yellow-700">Get Travel Deals in Your Inbox</h2>
        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
          <input type="email" placeholder="Your email address" className="flex-1 px-4 py-2 rounded-lg border outline-none" />
          <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition">Subscribe</button>
        </form>
      </section>
    </motion.div>
  );
} 