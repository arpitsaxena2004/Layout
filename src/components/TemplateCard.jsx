import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TemplateCard = ({ title, description, image, link }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link to={link} className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        Preview Template
      </Link>
    </div>
  </motion.div>
);

export default TemplateCard;