import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const roomImages = [
  'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80',
];
const amenityImages = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=200&q=80',
];

export default function Hotel() {
  const location = useLocation();
  const [showWelcome, setShowWelcome] = useState(location.state?.fromHome === true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen bg-gradient-to-br from-indigo-50 via-yellow-50 to-amber-100"
    >
      {showWelcome && (
        <div className="max-w-2xl mx-auto mt-6 mb-4 bg-amber-100 border border-amber-300 rounded-lg p-4 flex items-center justify-between shadow">
          <span className="text-amber-900 font-semibold">Welcome! Thanks for visiting the Hotel site.</span>
          <button onClick={() => setShowWelcome(false)} className="ml-4 px-3 py-1 rounded bg-amber-300 text-amber-900 font-bold hover:bg-amber-400">×</button>
        </div>
      )}
      <div className="min-h-screen flex flex-col items-center justify-center bg-transparent">
        <section className="glass-card p-10 mt-16 flex flex-col items-center max-w-2xl mx-auto shadow-glass">
          <h1 className="heading-modern text-center mb-4">Hotel Template</h1>
          <p className="text-lg text-slate-700 text-center mb-6">Showcase your hotel with a luxurious, modern website template. Attract more guests with stunning visuals and easy booking.</p>
          <button className="btn-modern">Book Now</button>
        </section>
        {/* Add more sections or cards as needed */}
      </div>
      {/* Room Showcase */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-indigo-700">Our Rooms</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Deluxe", "Suite", "Villa"].map((room, i) => (
            <motion.div
              key={room}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-amber-100 flex flex-col"
            >
              <div className="relative">
                <img src={roomImages[i]} alt={room} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent opacity-80 group-hover:opacity-90 transition duration-300" />
                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white drop-shadow-lg">{room} Room</h3>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <p className="text-indigo-700 mb-2">Spacious, comfortable, and fully equipped.</p>
                <span className="text-amber-600 font-bold mb-2">From ₹4,999/night</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Amenities */}
      <section className="py-12 px-4 bg-gradient-to-r from-indigo-100 via-yellow-50 to-amber-100 rounded-2xl">
        <h2 className="text-2xl font-bold mb-6 text-amber-700 text-center">Amenities</h2>
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
          {[
            { icon: '🏊‍♂️', title: 'Swimming Pool', desc: 'Relax in our infinity pool.' },
            { icon: '🍽️', title: 'Fine Dining', desc: 'Enjoy gourmet meals from top chefs.' },
            { icon: '🌳', title: 'Nature Walks', desc: 'Guided tours in lush surroundings.' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex-1 bg-white rounded-2xl shadow-lg p-6 text-center group cursor-pointer border border-amber-100"
            >
              <img src={amenityImages[i]} alt={item.title} className="w-16 h-16 mx-auto mb-2 rounded-full object-cover group-hover:scale-110 transition-transform duration-300 border-4 border-amber-100" />
              <span className="text-4xl mb-2 block">{item.icon}</span>
              <h4 className="font-semibold mb-2 text-amber-700">{item.title}</h4>
              <p className="text-indigo-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-12 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-indigo-700 text-center">Testimonials</h2>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <blockquote className="text-lg italic text-indigo-700 mb-4">“A perfect getaway! The rooms and service were outstanding.”</blockquote>
          <span className="font-semibold text-amber-600">— Karan S., Delhi</span>
        </div>
      </section>
      {/* Booking CTA */}
      <section className="py-12 px-4 bg-gradient-to-r from-indigo-900 via-amber-400 to-yellow-300 text-center rounded-t-3xl mt-12">
        <h2 className="text-2xl font-bold mb-4 text-white">Ready to Book Your Stay?</h2>
        <button className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-100 transition">Book Now</button>
      </section>
    </motion.div>
  );
} 