import React from "react";
import "./Media.css";

import image6 from './m-1.jpeg';
import image2 from './m-2.jpeg';
import image5 from './m-3.jpeg';
import image1 from './m-4.jpeg';
import image4 from './m-5.1.jpeg';
import image3 from './m-6.jpeg';

const MediaPage = () => {
  const images = [
    image1, image2, image3, image4, image5, image6
  ];

  return (
    <div className="media-page">
      <h2 className="media-heading"></h2>
      <div className="media-grid">
        {images.map((image, index) => (
          <div key={index} className="media-item">
            <img src={process.env.PUBLIC_URL + image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaPage;
