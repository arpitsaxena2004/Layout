import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const featureImages = [
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
];
const howItWorksImages = [
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=200&q=80',
];
const logoImages = [
  'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=80&q=80',
  'https://images.unsplash.com/photo-1502767089025-6572583495b4?auto=format&fit=crop&w=80&q=80',
  'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=80&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=80&q=80',
];

export default function BusinessLanding() {
  const location = useLocation();
  const [showWelcome, setShowWelcome] = useState(location.state?.fromHome === true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen bg-gradient-to-br from-blue-900 via-cyan-900 to-blue-800"
    >
      {showWelcome && (
        <div className="max-w-2xl mx-auto mt-6 mb-4 bg-cyan-100 border border-cyan-300 rounded-lg p-4 flex items-center justify-between shadow">
          <span className="text-cyan-900 font-semibold">Welcome! Thanks for visiting the Business Landing site.</span>
          <button onClick={() => setShowWelcome(false)} className="ml-4 px-3 py-1 rounded bg-cyan-300 text-cyan-900 font-bold hover:bg-cyan-400">×</button>
        </div>
      )}
      <div className="min-h-screen flex flex-col items-center justify-center bg-transparent">
        <section className="glass-card p-10 mt-16 flex flex-col items-center max-w-2xl mx-auto shadow-glass">
          <h1 className="heading-modern text-center mb-4">Business Landing Page</h1>
          <p className="text-lg text-slate-700 text-center mb-6">A modern, professional landing page for your business. Impress your clients with a sleek, responsive design.</p>
          <button className="btn-modern">Get Started</button>
        </section>
        {/* Add more sections or cards as needed */}
      </div>
      {/* Features */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-cyan-300">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Analytics", "Automation", "Integrations"].map((feature, i) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-cyan-100 flex flex-col"
            >
              <div className="relative">
                <img src={featureImages[i]} alt={feature} className="w-full h-20 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/60 to-transparent opacity-80 group-hover:opacity-90 transition duration-300" />
                <h3 className="absolute bottom-2 left-4 text-xl font-bold text-cyan-700 drop-shadow-lg">{feature}</h3>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <p className="text-blue-900 mb-2">Powerful tools for your business growth.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* How it Works */}
      <section className="py-12 px-4 bg-gradient-to-r from-blue-800 via-cyan-900 to-blue-900 rounded-2xl">
        <h2 className="text-2xl font-bold mb-6 text-cyan-300 text-center">How it Works</h2>
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
          {[
            { icon: '1️⃣', title: 'Sign Up', desc: 'Create your free account in minutes.' },
            { icon: '2️⃣', title: 'Customize', desc: 'Tailor solutions to your business needs.' },
            { icon: '3️⃣', title: 'Grow', desc: 'Scale your business with our tools.' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex-1 bg-white rounded-2xl shadow-lg p-6 text-center group cursor-pointer border border-cyan-100"
            >
              <img src={howItWorksImages[i]} alt={item.title} className="w-16 h-16 mx-auto mb-2 rounded-full object-cover group-hover:scale-110 transition-transform duration-300 border-4 border-cyan-100" />
              <span className="text-4xl mb-2 block">{item.icon}</span>
              <h4 className="font-semibold mb-2 text-cyan-700">{item.title}</h4>
              <p className="text-blue-900">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Client Logos */}
      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6 text-cyan-300">Trusted by Leading Brands</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {logoImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-lg w-32 h-16 flex items-center justify-center text-cyan-700 font-bold text-lg border border-cyan-100 shadow group cursor-pointer"
            >
              <img src={img} alt="Logo" className="w-10 h-10 object-contain mr-2" />Logo
            </motion.div>
          ))}
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-12 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-cyan-300 text-center">Testimonials</h2>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <blockquote className="text-lg italic text-blue-900 mb-4">“Our growth skyrocketed after using these solutions!”</blockquote>
          <span className="font-semibold text-cyan-400">— Meera T., Startup Founder</span>
        </div>
      </section>
      {/* Pricing */}
      <section className="py-12 px-4 bg-gradient-to-r from-blue-900 via-cyan-700 to-blue-800 text-center rounded-t-3xl mt-12">
        <h2 className="text-2xl font-bold mb-4 text-white">Simple Pricing</h2>
        <div className="flex flex-col sm:flex-row gap-8 justify-center mt-8">
          <div className="bg-white rounded-lg shadow p-8 flex-1 min-w-[220px]">
            <h3 className="font-semibold text-lg mb-2 text-cyan-700">Starter</h3>
            <span className="text-3xl font-bold text-cyan-400 mb-2 block">Free</span>
            <p className="text-blue-900 mb-4">Basic features for individuals</p>
            <button className="bg-cyan-400 text-white px-6 py-2 rounded-lg font-semibold hover:bg-cyan-500 transition">Choose</button>
          </div>
          <div className="bg-white rounded-lg shadow p-8 flex-1 min-w-[220px] border-2 border-cyan-400">
            <h3 className="font-semibold text-lg mb-2 text-cyan-700">Pro</h3>
            <span className="text-3xl font-bold text-cyan-400 mb-2 block">₹999/mo</span>
            <p className="text-blue-900 mb-4">Advanced tools for teams</p>
            <button className="bg-cyan-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-cyan-800 transition">Choose</button>
          </div>
        </div>
      </section>
    </motion.div>
  );
} 