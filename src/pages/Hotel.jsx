import { motion } from 'framer-motion';

export default function Hotel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen bg-white"
    >
      {/* Hero Section */}
      <section className="bg-indigo-50 py-16 px-4 text-center">
        <h1 className="text-4xl font-bold text-indigo-700 mb-4">Relax. Recharge. Reconnect.</h1>
        <p className="text-lg text-indigo-600 mb-8">Stay at our award-winning resort in the heart of nature.</p>
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">Book Now</button>
      </section>
      {/* Room Showcase */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Our Rooms</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Deluxe", "Suite", "Villa"].map((room, i) => (
            <div key={room} className="bg-white rounded-lg shadow p-4 flex flex-col">
              <div className="h-40 bg-indigo-100 rounded mb-4 flex items-center justify-center">
                <span className="text-3xl text-indigo-400 font-bold">🛏️</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">{room} Room</h3>
              <p className="text-gray-500 mb-2">Spacious, comfortable, and fully equipped.</p>
              <span className="text-indigo-600 font-bold">From ₹4,999/night</span>
            </div>
          ))}
        </div>
      </section>
      {/* Amenities */}
      <section className="py-12 px-4 bg-indigo-50">
        <h2 className="text-2xl font-bold mb-6 text-indigo-700 text-center">Amenities</h2>
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
          <div className="flex-1 bg-white rounded-lg shadow p-6 text-center">
            <span className="text-4xl mb-2 block">🏊‍♂️</span>
            <h4 className="font-semibold mb-2">Swimming Pool</h4>
            <p className="text-gray-500">Relax in our infinity pool.</p>
          </div>
          <div className="flex-1 bg-white rounded-lg shadow p-6 text-center">
            <span className="text-4xl mb-2 block">🍽️</span>
            <h4 className="font-semibold mb-2">Fine Dining</h4>
            <p className="text-gray-500">Enjoy gourmet meals from top chefs.</p>
          </div>
          <div className="flex-1 bg-white rounded-lg shadow p-6 text-center">
            <span className="text-4xl mb-2 block">🌳</span>
            <h4 className="font-semibold mb-2">Nature Walks</h4>
            <p className="text-gray-500">Guided tours in lush surroundings.</p>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-12 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Testimonials</h2>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <blockquote className="text-lg italic text-gray-600 mb-4">“A perfect getaway! The rooms and service were outstanding.”</blockquote>
          <span className="font-semibold text-indigo-600">— Karan S., Delhi</span>
        </div>
      </section>
      {/* Booking CTA */}
      <section className="py-12 px-4 bg-indigo-50 text-center">
        <h2 className="text-2xl font-bold mb-4 text-indigo-700">Ready to Book Your Stay?</h2>
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">Book Now</button>
      </section>
    </motion.div>
  );
} 