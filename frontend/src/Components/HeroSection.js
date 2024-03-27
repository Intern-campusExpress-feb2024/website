import React from 'react';
import videoBg from './videoBg.mp4';
import videoMob from './heromob.mp4';
import './HeroSection.css';

export default function HeroSection() {
  const openPincodePage = () => {
    window.location.href = '/pincode';
  };
  const openRateCalcPage = () => {
    window.location.href = '/rate-calc';
  };

  return (
    <div className="herosection">
      <div className="video-container">
      {window.innerWidth <= 767 ? (
        <video className="video-bg" src={videoMob} autoPlay loop muted />
      ) : (
        <video className="video-bg" src={videoBg} autoPlay loop muted />
      )}
      </div>
      <div className="content">
        <h1>EXPERIENCE FRICTION FREE LOGISTICS</h1>
        <p>
         Unlock Seamless logistics solutions, Book parcels securely for efficient transportation and delivery
        </p>
        <div className="button-container2">
          <button className="btn-1" onClick={openRateCalcPage}>Rate Calculator</button>
          <button className="btn-1" onClick={openPincodePage}>Pincode Serviceability</button>
        </div>
      </div>
    </div>
  );
}
