import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const apartmentImages = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80',
];
const featureImages = [
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=200&q=80',
];

export default function RealEstate() {
  const location = useLocation();
  const [showWelcome, setShowWelcome] = useState(location.state?.fromHome === true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-100"
    >
      {showWelcome && (
        <div className="max-w-2xl mx-auto mt-6 mb-4 bg-cyan-100 border border-cyan-300 rounded-lg p-4 flex items-center justify-between shadow">
          <span className="text-cyan-900 font-semibold">Welcome! Thanks for visiting the Real Estate site.</span>
          <button onClick={() => setShowWelcome(false)} className="ml-4 px-3 py-1 rounded bg-cyan-300 text-cyan-900 font-bold hover:bg-cyan-400">×</button>
        </div>
      )}
      <div className="min-h-screen flex flex-col items-center justify-center bg-transparent">
        <section className="glass-card p-10 mt-16 flex flex-col items-center max-w-2xl mx-auto shadow-glass">
          <h1 className="heading-modern text-center mb-4">Real Estate Template</h1>
          <p className="text-lg text-slate-700 text-center mb-6">Showcase properties with a sleek, modern website. Attract buyers and sellers with interactive listings and beautiful design.</p>
          <button className="btn-modern">View Listings</button>
        </section>
        {/* Add more sections or cards as needed */}
      </div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-600 via-blue-500 to-teal-400 py-16 px-4 text-center rounded-b-3xl shadow-lg">
        <h1 className="text-4xl font-bold text-white mb-4 drop-shadow">Find Your Dream Home Today</h1>
        <p className="text-lg text-cyan-100 mb-8">Explore premium properties across India’s top cities – trusted by thousands.</p>
        {/* Search Bar */}
        <div className="max-w-xl mx-auto flex bg-white rounded-lg shadow p-2">
          <input className="flex-1 px-4 py-2 rounded-l-lg outline-none" placeholder="Search by city, locality, or property..." />
          <button className="bg-teal-500 text-white px-6 py-2 rounded-r-lg font-semibold hover:bg-teal-600 transition">Search</button>
        </div>
      </section>
      {/* Featured Listings */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-cyan-700">Featured Listings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-cyan-100 flex flex-col"
            >
              <div className="relative">
                <img src={apartmentImages[i-1]} alt={`Apartment ${i}`} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/60 to-transparent opacity-80 group-hover:opacity-90 transition duration-300" />
                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white drop-shadow-lg">Modern Apartment #{i}</h3>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <p className="text-cyan-700 mb-2">2 BHK, 1200 sqft, Mumbai</p>
                <span className="text-teal-600 font-bold mb-2">₹1.2 Cr</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-12 px-4 bg-gradient-to-r from-cyan-100 via-blue-50 to-teal-100 rounded-2xl">
        <h2 className="text-2xl font-bold mb-6 text-cyan-700 text-center">Why Choose Us</h2>
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
          {[
            { icon: '🔒', title: 'Trusted & Secure', desc: 'Verified listings and secure transactions.' },
            { icon: '⚡', title: 'Fast Support', desc: '24/7 customer support for all your needs.' },
            { icon: '🏆', title: 'Top Rated', desc: 'Thousands of happy customers.' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex-1 bg-white rounded-2xl shadow-lg p-6 text-center group cursor-pointer border border-cyan-100"
            >
              <img src={featureImages[i]} alt={item.title} className="w-16 h-16 mx-auto mb-2 rounded-full object-cover group-hover:scale-110 transition-transform duration-300 border-4 border-cyan-100" />
              <span className="text-4xl mb-2 block">{item.icon}</span>
              <h4 className="font-semibold mb-2 text-cyan-700">{item.title}</h4>
              <p className="text-cyan-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-12 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-cyan-700 text-center">Testimonials</h2>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <blockquote className="text-lg italic text-cyan-700 mb-4">“We found our perfect home in just a week! The process was smooth and transparent.”</blockquote>
          <span className="font-semibold text-teal-600">— Priya S., Mumbai</span>
        </div>
      </section>
      {/* Contact */}
      <section className="py-12 px-4 bg-gradient-to-r from-cyan-600 via-blue-500 to-teal-400 text-center rounded-t-3xl mt-12">
        <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
        <p className="text-cyan-100 mb-6">Ready to find your dream home? Get in touch with our experts today.</p>
        <button className="bg-white text-cyan-700 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-100 transition">Contact Now</button>
      </section>
    </motion.div>
  );
} 