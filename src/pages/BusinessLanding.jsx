import { motion } from 'framer-motion';

export default function BusinessLanding() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen bg-white"
    >
      {/* Hero Section */}
      <section className="bg-gray-900 py-16 px-4 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Accelerate Your Business Growth</h1>
        <p className="text-lg text-gray-200 mb-8">Smart solutions for startups, entrepreneurs, and digital leaders.</p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Get Started</button>
      </section>
      {/* Features */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Analytics", "Automation", "Integrations"].map((feature, i) => (
            <div key={feature} className="bg-white rounded-lg shadow p-4 flex flex-col">
              <div className="h-20 bg-blue-100 rounded mb-4 flex items-center justify-center">
                <span className="text-3xl text-blue-400 font-bold">🚀</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature}</h3>
              <p className="text-gray-500 mb-2">Powerful tools for your business growth.</p>
            </div>
          ))}
        </div>
      </section>
      {/* How it Works */}
      <section className="py-12 px-4 bg-gray-50">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">How it Works</h2>
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
          <div className="flex-1 bg-white rounded-lg shadow p-6 text-center">
            <span className="text-4xl mb-2 block">1️⃣</span>
            <h4 className="font-semibold mb-2">Sign Up</h4>
            <p className="text-gray-500">Create your free account in minutes.</p>
          </div>
          <div className="flex-1 bg-white rounded-lg shadow p-6 text-center">
            <span className="text-4xl mb-2 block">2️⃣</span>
            <h4 className="font-semibold mb-2">Customize</h4>
            <p className="text-gray-500">Tailor solutions to your business needs.</p>
          </div>
          <div className="flex-1 bg-white rounded-lg shadow p-6 text-center">
            <span className="text-4xl mb-2 block">3️⃣</span>
            <h4 className="font-semibold mb-2">Grow</h4>
            <p className="text-gray-500">Scale your business with our tools.</p>
          </div>
        </div>
      </section>
      {/* Client Logos */}
      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Trusted by Leading Brands</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[1,2,3,4].map((i) => (
            <div key={i} className="bg-gray-200 rounded-lg w-32 h-16 flex items-center justify-center text-gray-500 font-bold text-lg">Logo</div>
          ))}
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-12 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Testimonials</h2>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <blockquote className="text-lg italic text-gray-600 mb-4">“Our growth skyrocketed after using these solutions!”</blockquote>
          <span className="font-semibold text-blue-600">— Meera T., Startup Founder</span>
        </div>
      </section>
      {/* Pricing */}
      <section className="py-12 px-4 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Simple Pricing</h2>
        <div className="flex flex-col sm:flex-row gap-8 justify-center mt-8">
          <div className="bg-white rounded-lg shadow p-8 flex-1 min-w-[220px]">
            <h3 className="font-semibold text-lg mb-2">Starter</h3>
            <span className="text-3xl font-bold text-blue-600 mb-2 block">Free</span>
            <p className="text-gray-500 mb-4">Basic features for individuals</p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition">Choose</button>
          </div>
          <div className="bg-white rounded-lg shadow p-8 flex-1 min-w-[220px] border-2 border-blue-500">
            <h3 className="font-semibold text-lg mb-2">Pro</h3>
            <span className="text-3xl font-bold text-blue-600 mb-2 block">₹999/mo</span>
            <p className="text-gray-500 mb-4">Advanced tools for teams</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">Choose</button>
          </div>
        </div>
      </section>
    </motion.div>
  );
} 