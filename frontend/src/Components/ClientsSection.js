import React, { useState, useEffect } from 'react';
import './ClientsSection.css';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import logo1 from '../assets/IIM1.png';
import logo2 from '../assets/IIM2.png';
import logo3 from '../assets/IIM3.png';
import logo4 from '../assets/IIM4.png';
import logo5 from '../assets/ISB.png';
import logo6 from '../Components/BITS_Pilani.png';
import logo7 from '../Components/IIM Jammu.png';
import logo8 from '../Components/IIM_Ahemedabad.png';
import logo9 from '../Components/IIM_Kashipur_Logo.png';
import logo10 from '../Components/IIM_Raipur_logo.png';
import logo11 from '../Components/IIM_Ranchi.png';
import logo12 from '../Components/IIM_Sambalpur.png';
import logo13 from '../Components/IIM_Shilong.png';
import logo14 from '../Components/IIM_Trichy_Logo.png';
import logo15 from '../Components/IIM_Udaipur_Logo.png';
import logo16 from '../Components/IIM_Visakhapatnam_Logo.png';
import logo17 from '../Components/IIMNagpur-logo-1.png';
import logo18 from '../Components/IIT_Kanpur.png';
import logo19 from '../Components/IIT_Kharagpur.png';
import logo20 from '../Components/IIT_Gandhi Nagar.png';
import logo21 from '../Components/IIM_Rohtak.png';
import logo22 from '../Components/NMIMS.png';
import logo23 from '../Components/XLRI_Logo.png';
import logo24 from '../Components/IIT_Madras.png';
import logo25 from '../Components/NIT_Calicut.png';
import logo26 from '../Components/NIT_SURATHKAL.png';
import logo27 from '../Components/NIT_Trichy.png';
import logo28 from '../Components/NIT_Warangal-1.png';
import logo29 from '../Components/NIT_Calicut.png';
import logo30 from '../Components/manipal.png';
import logo31 from '../Components/VIT_Vellore.png';
import logo32 from '../Components/srm.png';


const ClientsSection = () => {
  // State to store the current centerSlidePercentage based on the screen size
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(25);

  // Function to update the centerSlidePercentage based on screen size
  const updateCenterSlidePercentage = () => {
    const isMobile = window.innerWidth <= 768; // You can adjust the breakpoint as needed
    setCenterSlidePercentage(isMobile ? 35 : 25);
  };

  // Add an event listener to update the centerSlidePercentage on window resize
  useEffect(() => {
    updateCenterSlidePercentage();
    window.addEventListener('resize', updateCenterSlidePercentage);
    return () => {
      window.removeEventListener('resize', updateCenterSlidePercentage);
    };
  }, []);

  const openContact = () => {
    window.location.href = '/contact'; // Replace '/contact' with the correct contact page URL
  };
  // Define your responsive settings for the Carousel
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 768 },
      items: 4,
      slidesToSlide: 4,
      partialVisibilityGutter: 40,
      centerMode: true,
      centerSlidePercentage: centerSlidePercentage, // Use the dynamic value here
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 1000,
      centerMode: false,
      centerSlidePercentage: centerSlidePercentage, // Use the dynamic value here
    },
  };

  // Your client logos
  const clientLogos = [
    logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10,
    logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20,
    logo21, logo22, logo23, logo24, logo25, logo26, logo27, logo28, logo29, logo30,
    logo31, logo32
  ];

  return (
    <div className="clients-section">
      <h2>Our Clients</h2>
      <br></br>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={true}
        showStatus={false}
        interval={1000}
        showArrows={false}
        showIndicators={false}
        renderIndicator={() => null}
        renderArrowPrev={() => null}
        renderArrowNext={() => null}
        selectedItem={1}
        centerMode={true}
        centerSlidePercentage={centerSlidePercentage}
      >
        {clientLogos.map((logo, index) => (
          <div className="client" key={index}>
            <div className="logo-container">
              <a>
                <img src={logo} alt={`logo${index}`} className="img-fluid" />
              </a>
            </div>
          </div>
        ))}
      </Carousel>
      

      <button className="b2" onClick={openContact}>
        Wanna Collaborate with Us?
      </button>
    </div>
    
  );
};

export default ClientsSection;
