import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-heading">Address:</h3>
            <p>
              Sriven Skypark, Doddakammanahalli Main Rd, Central Excise Layout, Phase 2, 3rd Cross, Bengaluru(Bangalore) Urban, Karnataka, 560083
            </p>
          </div>
          <div className="footer-section">
            <h3 className="footer-heading">Contact Us</h3>
            <p>
              Phone: +91 9945590393
              <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +91 9945588363
              <br />
              <p>
                    
              </p>
              Email: support@campusexpress.org.in
            </p>
          </div>
          <div className="footer-section">
            <h3 className="footer-heading">Follow Us</h3>
            <div className="social-icons">
              <a href="https://wa.me/+919945590393" target="_blank" className="social-icon">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a href="https://www.instagram.com/campus__express/" target="_blank" className="social-icon">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.linkedin.com/company/campusexpress/" target="_blank" className="social-icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Campus Express. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
