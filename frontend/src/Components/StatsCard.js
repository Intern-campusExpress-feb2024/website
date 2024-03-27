import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faTruck, faMapMarkerAlt,faPhone } from '@fortawesome/free-solid-svg-icons';
import './StatsCard.css';

const Stats = () => {
  return (
    <div className="stats-container">
      <div className="stat">
        <div className="stat-icon">
          <FontAwesomeIcon icon={faUsers} />
        </div>
        <h1 className="stat-number animated">10k+</h1>
        <span className="stat-label">Happy clients</span>
        <p className="stat-description">
          More than 10000 satisfied clients have availed of our services and solutions.
        </p>
      </div>
      <div className="stat">
        <div className="stat-icon">
          <FontAwesomeIcon icon={faTruck} />
        </div>
        <h1 className="stat-number animated">50k+</h1>
        <span className="stat-label">Shipments delivered</span>
        <p className="stat-description">
We have delivered 50,000+ shipments to various destinations
        </p>
      </div>
      <div className="stat">
        <div className="stat-icon">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </div>
        <h1 className="stat-number animated">28k+</h1>
        <span className="stat-label">Served Pincodes</span>
        <p className="stat-description">
        Our services cover more than 28,000 pincodes across the country.
        </p>
      </div>
      <div className="stat">
        <div className="stat-icon">
          <FontAwesomeIcon icon={faPhone} />
        </div>
        <h1 className="stat-number animated">24/7</h1>
        <span className="stat-label">Support</span>
        <p className="stat-description">      
We offer 24/7 exceptional customer support assistance.
        </p>
      </div>
    </div>
  );
};

export default Stats;
