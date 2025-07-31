

// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import RealEstate from './pages/RealEstate';
import NGO from './pages/NGO';
import TravelAgency from './pages/TravelAgency';
import Hotel from './pages/Hotel';
import BusinessLanding from './pages/BusinessLanding';

const Navbar = () => (
  <nav className="glass-card fixed top-4 left-1/2 -translate-x-1/2 z-50 flex gap-6 px-10 py-3 items-center shadow-glass backdrop-blur-lg rounded-full border border-white/30">
    <Link to="/" className="font-bold text-lg text-primary-dark hover:text-accent-purple transition">Home</Link>
    <Link to="/real-estate" className="text-slate-700 hover:text-accent-blue transition">Real Estate</Link>
    <Link to="/ngo" className="text-slate-700 hover:text-accent-teal transition">NGO</Link>
    <Link to="/travel-agency" className="text-slate-700 hover:text-accent-orange transition">Travel Agency</Link>
    <Link to="/hotel" className="text-slate-700 hover:text-accent-purple transition">Hotel</Link>
    <Link to="/business" className="text-slate-700 hover:text-accent-blue transition">Business</Link>
  </nav>
);

const Footer = () => (
  <footer className="w-full py-6 mt-24 flex flex-col items-center justify-center bg-transparent">
    <div className="glass-card px-8 py-3 rounded-full shadow-glass flex items-center gap-2">
      <span className="text-slate-600 text-sm">© {new Date().getFullYear()} Layouts. All rights reserved.</span>
    </div>
  </footer>
);

const App = () => (
  <Router>
    <Navbar />
    <div className="pt-24">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/real-estate" element={<RealEstate />} />
        <Route path="/ngo" element={<NGO />} />
        <Route path="/travel-agency" element={<TravelAgency />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/business" element={<BusinessLanding />} />
      </Routes>
    </div>
    <Footer />
  </Router>
);

export default App;