import React, { useState, useEffect } from 'react';
import './HeroSection.css'; // Import your CSS file
import group1 from './Group 46.png';

const HeroSection = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [ "SEAMLESS", "RELIABLE", "EFFICIENT", "FRICTION FREE"]; // List of changing texts

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((textIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [textIndex]);

  return (
    <section className="hero">
      <div className="hero-left">
        <div className='text'>
        <h2 className="hero-heading">EXPERIENCE</h2>
        <h2 className="changing-text">{texts[textIndex]}</h2>
        <h2 className="hero-heading">LOGISTICS</h2>
        <form className="search-form">
          <input type="text" placeholder="Enter Tracking Number / PIN Code" className="search-input" />
          <button type="submit" className="search-button">Track</button>
        </form>
        </div>
        </div>
      <div className="hero-right">
      <div className='image-container'>
      <div className="image-container img">
      <img src={group1} alt="Description" />
        </div>
        </div>
 
      </div>
      
           </section>

  );
}

export default HeroSection;
