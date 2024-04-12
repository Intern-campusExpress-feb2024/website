import React, { useState, useEffect } from 'react';
import './HeroSection.css'; // Import your CSS file
import group1 from './image 6.png';
import group2 from './Rectangle 61.png';

const HeroSection = () => {
  // State to store input values for both text boxes
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');

  // Event handler for input change for first text box
  const handleChange1 = (event) => {
    setInputValue1(event.target.value);
  };

  // Event handler for input change for second text box
  const handleChange2 = (event) => {
    setInputValue2(event.target.value);
  };

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Here you can handle form submission logic, e.g., send data to server
    console.log('Form submitted:', inputValue1, inputValue2);
    setInputValue1(''); // Clear first input after submit
    setInputValue2(''); // Clear second input after submit
  };

  return (
    <section className="hero">
      
      <div className="hero-right">
      <div className='image-container'>
      <div className="image-container img">
      <img src={group1} alt="Description" />
        </div>
        </div>
        
      </div>
      <div className="hero-left">
      <div className='heading'>
        <label1 htmlFor="inputField1">Pincode Servicebilit <br></br>Search by pincodes</label1>
        <label1 htmlFor="inputField1">       </label1>

      </div>
  
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="inputField1">Origin Pincode</label>
        <input
          type="text"
          id="inputField1"
          value={inputValue1}
          onChange={handleChange1}
        />
      </div>
      <div>
        <label htmlFor="inputField2">Destination Pincode</label>
        <input
          type="text"
          id="inputField2"
          value={inputValue2}
          onChange={handleChange2}
        />
      </div>
      <button type="submit" style={{ backgroundColor: 'purple', color: 'white' }}>
        Check
      </button>
    </form>
        </div>
      
      
           </section>

  );
}

export default HeroSection;
