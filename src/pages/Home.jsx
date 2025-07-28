import TemplateCard from '../components/TemplateCard';
import { motion } from 'framer-motion';

const templates = [
  {
    title: 'Real Estate',
    description: 'Find your dream home with our modern real estate template.',
    link: '/real-estate',
  },
  {
    title: 'NGO',
    description: 'Inspire change and hope with a beautiful NGO website.',
    link: '/ngo',
  },
  {
    title: 'Travel Agency',
    description: 'Adventure awaits! Preview our travel agency template.',
    link: '/travel-agency',
  },
  {
    title: 'Hotel',
    description: 'Showcase your hotel or resort with elegance and style.',
    link: '/hotel',
  },
  {
    title: 'Business Landing',
    description: 'Accelerate your business with a modern landing page.',
    link: '/business',
  },
];

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Showcase Templates</h1>
        <p className="text-lg text-gray-600">Preview 5 modern website templates for your next project.</p>
      </div>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {templates.map((tpl) => (
          <TemplateCard key={tpl.title} {...tpl} />
        ))}
      </div>
    </motion.div>
  );
} 