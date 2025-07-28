import { motion } from 'framer-motion';

export default function NGO() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen bg-white"
    >
      {/* Hero Section */}
      <section className="bg-green-50 py-16 px-4 text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-4">Be the Change. Bring Hope.</h1>
        <p className="text-lg text-green-600 mb-8">Join us in our mission to uplift lives through education, food, and healthcare.</p>
        <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition">Donate Now</button>
      </section>
      {/* Our Mission */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Our Mission</h2>
        <p className="text-gray-600 mb-4">We strive to create a better world by providing education, food, and healthcare to underprivileged communities.</p>
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          <div className="flex-1 bg-white rounded-lg shadow p-6 text-center">
            <span className="text-4xl mb-2 block">📚</span>
            <h4 className="font-semibold mb-2">Education</h4>
            <p className="text-gray-500">Empowering children with quality education.</p>
          </div>
          <div className="flex-1 bg-white rounded-lg shadow p-6 text-center">
            <span className="text-4xl mb-2 block">🍲</span>
            <h4 className="font-semibold mb-2">Food</h4>
            <p className="text-gray-500">Providing nutritious meals to families in need.</p>
          </div>
          <div className="flex-1 bg-white rounded-lg shadow p-6 text-center">
            <span className="text-4xl mb-2 block">🩺</span>
            <h4 className="font-semibold mb-2">Healthcare</h4>
            <p className="text-gray-500">Ensuring access to basic healthcare services.</p>
          </div>
        </div>
      </section>
      {/* Campaigns */}
      <section className="py-12 px-4 bg-green-50">
        <h2 className="text-2xl font-bold mb-6 text-green-700 text-center">Current Campaigns</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {[1,2].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-lg mb-2">Campaign #{i}</h3>
              <p className="text-gray-500 mb-2">Help us reach our goal to support 1000+ families.</p>
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">Support</button>
            </div>
          ))}
        </div>
      </section>
      {/* Impact */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Our Impact</h2>
        <div className="flex flex-col md:flex-row gap-8 text-center">
          <div className="flex-1">
            <span className="text-3xl font-bold text-green-600">10,000+</span>
            <p className="text-gray-500">Children Educated</p>
          </div>
          <div className="flex-1">
            <span className="text-3xl font-bold text-green-600">50,000+</span>
            <p className="text-gray-500">Meals Served</p>
          </div>
          <div className="flex-1">
            <span className="text-3xl font-bold text-green-600">5,000+</span>
            <p className="text-gray-500">Medical Camps</p>
          </div>
        </div>
      </section>
      {/* Volunteer CTA */}
      <section className="py-12 px-4 bg-green-50 text-center">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Become a Volunteer</h2>
        <p className="text-gray-600 mb-6">Join our team and make a difference in your community.</p>
        <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition">Sign Up</button>
      </section>
      {/* Testimonials */}
      <section className="py-12 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Testimonials</h2>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <blockquote className="text-lg italic text-gray-600 mb-4">“Volunteering here changed my life. The impact is real!”</blockquote>
          <span className="font-semibold text-green-600">— Rahul M., Volunteer</span>
        </div>
      </section>
    </motion.div>
  );
} 