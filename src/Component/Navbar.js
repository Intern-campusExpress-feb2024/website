import React from 'react';
import './Navbarstyles.css'; // Import your CSS file
import group1 from './webpic 1logo.png';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo"><img src={group1} alt="Description" /></div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Track Order</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="buttons">
        <button className="orange-button">Book Now</button>
        <button className="purple-button">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
