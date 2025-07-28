

// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RealEstate from './pages/RealEstate';
import NGO from './pages/NGO';
import TravelAgency from './pages/TravelAgency';
import Hotel from './pages/Hotel';
import BusinessLanding from './pages/BusinessLanding';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/real-estate" element={<RealEstate />} />
      <Route path="/ngo" element={<NGO />} />
      <Route path="/travel-agency" element={<TravelAgency />} />
      <Route path="/hotel" element={<Hotel />} />
      <Route path="/business" element={<BusinessLanding />} />
    </Routes>
  </Router>
);

export default App;