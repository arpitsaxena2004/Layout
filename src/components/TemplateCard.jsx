import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TemplateCard = ({ title, description, image, link, linkState }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    whileHover={{ scale: 1.06, boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}
    whileTap={{ scale: 0.97 }}
    className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-100"
  >
    <div className="glass-card p-6 flex flex-col items-center shadow-glass hover:scale-105 transition-transform duration-300">
      <img src={image} alt={title} className="w-20 h-20 mb-4 rounded-xl shadow-lg" />
      <h3 className="heading-modern text-center mb-2">{title}</h3>
      <p className="text-slate-600 text-center mb-4">{description}</p>
      <button className="btn-modern mt-auto">View Template</button>
    </div>
  </motion.div>
);

export default TemplateCard;