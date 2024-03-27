import React from 'react';
import Navbar from './Navbar';
import Contact from './Contact';
import Footer from './Footer';
import HeroSection from './HeroSection';
import StatsCard from './StatsCard';
import ClientsSection from './ClientsSection';
import ShipRates from './ShipRates';
import { Link } from 'react-router-dom';
import Line from './Line';
import './Home.css'; // Import a custom CSS file for Home component styles
const Home = () => {
  return (
    <div className="home-container">
      <HeroSection />
      <StatsCard />
      <ClientsSection />
      <Footer />
    </div>
  );
};

export default Home;
