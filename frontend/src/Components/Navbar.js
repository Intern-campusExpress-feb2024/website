import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './webpic.png';

export default function Navbar() {
  const openBookingForm = () => {
    window.location.href = 'https://forms.gle/Qqe1kxEw6oZDoyEy9';
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top">
      <div className="container-fluid">
        <div className="d-flex">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars my-icon"></i> {/* Replace with desired Font Awesome icon */}
        </button>
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" className="navbar-logo" />
          </Link>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/Home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/media" >
                Media
              </a>
            </li>
          </ul>
        </div>
        <button className="btn0" type="submit" onClick={openBookingForm}>
          Book Now
        </button>
      </div>
    </nav>
  );
}
