import TemplateCard from '../components/TemplateCard';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const templates = [
  {
    title: 'Real Estate',
    description: 'Find your dream home with our modern real estate template.',
    link: '/real-estate',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=400&q=80', // Modern house exterior
  },
  {
    title: 'NGO',
    description: 'Inspire change and hope with a beautiful NGO website.',
    link: '/ngo',
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=400&q=80', // Hands holding heart (charity)
  },
  {
    title: 'Travel Agency',
    description: 'Adventure awaits! Preview our travel agency template.',
    link: '/travel-agency',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Hotel',
    description: 'Showcase your hotel or resort with elegance and style.',
    link: '/hotel',
    image: 'https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=',
  },
  {
    title: 'Business Landing',
    description: 'Accelerate your business with a modern landing page.',
    link: '/business',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
  },
];

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen flex flex-col items-center justify-center bg-transparent"
    >
      <section className="glass-card p-10 mt-16 flex flex-col items-center max-w-2xl mx-auto shadow-glass">
        <h1 className="heading-modern text-center mb-4">Welcome to Layouts</h1>
        <p className="text-lg text-slate-700 text-center mb-6">Discover stunning, ready-to-use website templates for every business. Modern, responsive, and easy to customize.</p>
        <button className="btn-modern">Browse Templates</button>
      </section>
      <section className="w-full max-w-6xl mx-auto mt-16">
        <h2 className="heading-modern text-3xl mb-8">Popular Templates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((tpl) => (
            <TemplateCard key={tpl.title} {...tpl} linkState={{ fromHome: true }} />
          ))}
        </div>
      </section>
    </motion.div>
  );
} 