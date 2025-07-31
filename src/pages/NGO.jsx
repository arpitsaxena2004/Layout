import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const missionImages = [
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
];
const campaignImages = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=200&q=80',
];

export default function NGO() {
  const location = useLocation();
  const [showWelcome, setShowWelcome] = useState(location.state?.fromHome === true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-orange-100"
    >
      {showWelcome && (
        <div className="max-w-2xl mx-auto mt-6 mb-4 bg-green-100 border border-green-300 rounded-lg p-4 flex items-center justify-between shadow">
          <span className="text-green-900 font-semibold">Welcome! Thanks for visiting the NGO site.</span>
          <button onClick={() => setShowWelcome(false)} className="ml-4 px-3 py-1 rounded bg-green-300 text-green-900 font-bold hover:bg-green-400">×</button>
        </div>
      )}
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 via-yellow-500 to-orange-400 py-16 px-4 text-center rounded-b-3xl shadow-lg">
        <h1 className="text-4xl font-bold text-white mb-4 drop-shadow">Be the Change. Bring Hope.</h1>
        <p className="text-lg text-yellow-100 mb-8">Join us in our mission to uplift lives through education, food, and healthcare.</p>
        <button className="bg-orange-400 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-500 transition">Donate Now</button>
      </section>
      {/* Our Mission */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-green-700">Our Mission</h2>
        <p className="text-green-700 mb-4">We strive to create a better world by providing education, food, and healthcare to underprivileged communities.</p>
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          {[
            { icon: '📚', title: 'Education', desc: 'Empowering children with quality education.' },
            { icon: '🍲', title: 'Food', desc: 'Providing nutritious meals to families in need.' },
            { icon: '🧺', title: 'Healthcare', desc: 'Ensuring access to basic healthcare services.' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex-1 bg-white rounded-2xl shadow-lg p-6 text-center group cursor-pointer border border-green-100"
            >
              <img src={missionImages[i]} alt={item.title} className="w-16 h-16 mx-auto mb-2 rounded-full object-cover group-hover:scale-110 transition-transform duration-300 border-4 border-yellow-100" />
              <span className="text-4xl mb-2 block">{item.icon}</span>
              <h4 className="font-semibold mb-2 text-green-700">{item.title}</h4>
              <p className="text-green-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Campaigns */}
      <section className="py-12 px-4 bg-gradient-to-r from-green-100 via-yellow-50 to-orange-100 rounded-2xl">
        <h2 className="text-2xl font-bold mb-6 text-orange-700 text-center">Current Campaigns</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {[1,2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 group cursor-pointer border border-yellow-100"
            >
              <img src={campaignImages[i-1]} alt="Campaign" className="w-16 h-16 mx-auto mb-2 rounded-full object-cover group-hover:scale-110 transition-transform duration-300 border-4 border-orange-200" />
              <h3 className="font-semibold text-lg mb-2 text-orange-700">Campaign #{i}</h3>
              <p className="text-orange-600 mb-2">Help us reach our goal to support 1000+ families.</p>
              <button className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500 transition">Support</button>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Impact */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-green-700 text-center">Our Impact</h2>
        <div className="flex flex-col md:flex-row gap-8 text-center">
          <div className="flex-1">
            <span className="text-3xl font-bold text-orange-600">10,000+</span>
            <p className="text-green-700">Children Educated</p>
          </div>
          <div className="flex-1">
            <span className="text-3xl font-bold text-orange-600">50,000+</span>
            <p className="text-green-700">Meals Served</p>
          </div>
          <div className="flex-1">
            <span className="text-3xl font-bold text-orange-600">5,000+</span>
            <p className="text-green-700">Medical Camps</p>
          </div>
        </div>
      </section>
      {/* Volunteer CTA */}
      <section className="py-12 px-4 bg-gradient-to-r from-green-600 via-yellow-500 to-orange-400 text-center rounded-t-3xl mt-12">
        <h2 className="text-2xl font-bold mb-4 text-white">Become a Volunteer</h2>
        <p className="text-yellow-100 mb-6">Join our team and make a difference in your community.</p>
        <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-100 transition">Sign Up</button>
      </section>
      {/* Testimonials */}
      <section className="py-12 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-green-700 text-center">Testimonials</h2>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <blockquote className="text-lg italic text-green-700 mb-4">“Volunteering here changed my life. The impact is real!”</blockquote>
          <span className="font-semibold text-orange-600">— Rahul M., Volunteer</span>
        </div>
      </section>
    </motion.div>
  );
} 