import React from 'react';
import './ShipRates.css';

const ShipRates = () => {
  const openContact = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="banner">
      <div className="content">
        <h1 className="text19">
        </h1>
        <button className="btn-2" onClick={openContact}>Wanna Colloborate with Us?</button>
      </div>
    </div>
  );
};

export default ShipRates;