import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const destinationImages = [
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80',
];
const featureImages = [
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=200&q=80',
];

export default function TravelAgency() {
  const location = useLocation();
  const [showWelcome, setShowWelcome] = useState(location.state?.fromHome === true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen bg-gradient-to-br from-sky-50 via-orange-50 to-teal-100"
    >
      {showWelcome && (
        <div className="max-w-2xl mx-auto mt-6 mb-4 bg-sky-100 border border-sky-300 rounded-lg p-4 flex items-center justify-between shadow">
          <span className="text-sky-900 font-semibold">Welcome! Thanks for visiting the Travel Agency site.</span>
          <button onClick={() => setShowWelcome(false)} className="ml-4 px-3 py-1 rounded bg-sky-300 text-sky-900 font-bold hover:bg-sky-400">×</button>
        </div>
      )}
      <div className="min-h-screen flex flex-col items-center justify-center bg-transparent">
        <section className="glass-card p-10 mt-16 flex flex-col items-center max-w-2xl mx-auto shadow-glass">
          <h1 className="heading-modern text-center mb-4">Travel Agency Template</h1>
          <p className="text-lg text-slate-700 text-center mb-6">Inspire wanderlust with a vibrant, modern travel website. Highlight destinations, packages, and customer stories.</p>
          <button className="btn-modern">Explore Now</button>
        </section>
        {/* Add more sections or cards as needed */}
      </div>
      {/* Destinations */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-sky-700">Top Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Goa", "Manali", "Kerala"].map((place, i) => (
            <motion.div
              key={place}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-sky-100 flex flex-col"
            >
              <div className="relative">
                <img src={destinationImages[i]} alt={place} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/60 to-transparent opacity-80 group-hover:opacity-90 transition duration-300" />
                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white drop-shadow-lg">{place}</h3>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <p className="text-sky-700 mb-2">Special packages available</p>
                <span className="text-orange-600 font-bold mb-2">From ₹9,999</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Why Us */}
      <section className="py-12 px-4 bg-gradient-to-r from-sky-100 via-orange-50 to-teal-100 rounded-2xl">
        <h2 className="text-2xl font-bold mb-6 text-orange-700 text-center">Why Us?</h2>
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
          {[
            { icon: '🛡️', title: 'Safe & Secure', desc: 'Your safety is our priority.' },
            { icon: '💸', title: 'Best Prices', desc: 'Affordable packages for all budgets.' },
            { icon: '⭐', title: 'Top Rated', desc: 'Loved by 10,000+ travelers.' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex-1 bg-white rounded-2xl shadow-lg p-6 text-center group cursor-pointer border border-orange-100"
            >
              <img src={featureImages[i]} alt={item.title} className="w-16 h-16 mx-auto mb-2 rounded-full object-cover group-hover:scale-110 transition-transform duration-300 border-4 border-sky-100" />
              <span className="text-4xl mb-2 block">{item.icon}</span>
              <h4 className="font-semibold mb-2 text-orange-700">{item.title}</h4>
              <p className="text-sky-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Customer Stories */}
      <section className="py-12 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-sky-700 text-center">Customer Stories</h2>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <blockquote className="text-lg italic text-sky-700 mb-4">“Best trip ever! Everything was perfectly organized.”</blockquote>
          <span className="font-semibold text-orange-600">— Aditi R., Pune</span>
        </div>
      </section>
      {/* Newsletter Signup */}
      <section className="py-12 px-4 bg-gradient-to-r from-sky-400 via-teal-400 to-orange-300 text-center rounded-t-3xl mt-12">
        <h2 className="text-2xl font-bold mb-4 text-white">Get Travel Deals in Your Inbox</h2>
        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
          <input type="email" placeholder="Your email address" className="flex-1 px-4 py-2 rounded-lg border outline-none" />
          <button className="bg-white text-orange-600 px-6 py-2 rounded-lg font-semibold hover:bg-orange-100 transition">Subscribe</button>
        </form>
      </section>
    </motion.div>
  );
} 