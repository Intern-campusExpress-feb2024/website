import React, { useState, useEffect } from 'react';
import './Pincode.css'; // Import your CSS file
import group1 from './image 6.png';
import group2 from './Rectangle 61.png';

const Pincode = () => {
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
    <section className="hero-pincode">
      
      <div className="hero-right-pincode">
      <div className='image-container-pincode'>
      <div className="image-container img">
      <img src={group1} alt="Description" />
        </div>
      </div>
        
      </div>
      <div className="hero-left-pincode">
      <div className='overlay-block'>
        <label1 htmlFor="inputField1"><br></br>&nbsp;&nbsp;&nbsp;&nbsp;Pincode Serviceability <br></br>&nbsp;&nbsp;&nbsp;&nbsp;Search by pincodes</label1>
       
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

export default Pincode;
