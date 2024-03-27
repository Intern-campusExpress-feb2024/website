import React, { useState, useRef, useEffect } from 'react';
import './PinCode.css';
import pincodeData from '../Components/pincodeData';

const Pincode = () => {
  const [originPincode, setOriginPincode] = useState('');
  const [destinationPincode, setDestinationPincode] = useState('');
  const [pincodeDetails, setPincodeDetails] = useState(null);
  const [serviceMessage, setServiceMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [shouldScroll, setShouldScroll] = useState(false);

  const pincodeDetailsRef = useRef(null);

  useEffect(() => {
    if (shouldScroll && pincodeDetailsRef.current) {
      setTimeout(() => {
        pincodeDetailsRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 50); // Delay the scroll action
      setShouldScroll(false); // Reset the scroll trigger after scroll action
    }
  }, [shouldScroll]);

  const handleCheckAvailability = () => {
    const originDetails = pincodeData.find(
      (item) => item.pincode === parseInt(originPincode)
    );
    const destinationDetails = pincodeData.find(
      (item) => item.pincode === parseInt(destinationPincode)
    );

    if (!originDetails || !destinationDetails) {
      setPincodeDetails(null);
      setServiceMessage(
        'Currently, we are not servicing in this area (or) Invalid Pincode.'
      );
    } else {
      setPincodeDetails({ originDetails, destinationDetails });
      setServiceMessage(null);
      setShouldScroll(true); // Set the scroll trigger
    }
  };

  const handleOriginPincodeChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,6}$/.test(value)) {
      setOriginPincode(value);
      setErrorMessage('');
    } else {
      setErrorMessage('Please enter a 6-digit pincode');
    }
  };

  const handleDestinationPincodeChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,6}$/.test(value)) {
      setDestinationPincode(value);
      setErrorMessage('');
    } else {
      setErrorMessage('Please enter a 6-digit pincode');
    }
  };

  return (
    <div className="pincode-serviceability-page">
      <header>
        <div className="header-content">
          <h1>Search by Pincodes</h1>
          <div className="input-container">
            <div className="input-group">
              <label htmlFor="origin-pincode">Origin Pincode:</label>
              <input
                type="text"
                id="origin-pincode"
                value={originPincode}
                onChange={handleOriginPincodeChange}
                pattern="\d{6}"
                title="Please enter a 6-digit pincode"
                placeholder="Pickup Pincode"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="destination-pincode">Destination Pincode:</label>
              <input
                type="text"
                id="destination-pincode"
                value={destinationPincode}
                onChange={handleDestinationPincodeChange}
                pattern="\d{6}"
                title="Please enter a 6-digit pincode"
                placeholder="Delivery Pincode"
                required
              />
            </div>
          </div>
          <button className="check-button" onClick={handleCheckAvailability}>
            Check
          </button>
        </div>
      </header>
      {pincodeDetails && (
        <div ref={pincodeDetailsRef} className="pincode-details">
          <table>
            <thead>
              <tr>
                <th>Pincode</th>
                <th>Service</th>
                <th>City</th>
                <th>State</th>
                <th>ODA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{pincodeDetails.originDetails.pincode}</td>
                <td>Yes</td>
                <td>{pincodeDetails.originDetails.city}</td>
                <td>{pincodeDetails.originDetails.state}</td>
                <td>N/A</td>
              </tr>
              <tr>
                <td>{pincodeDetails.destinationDetails.pincode}</td>
                <td>Yes</td>
                <td>{pincodeDetails.destinationDetails.city}</td>
                <td>{pincodeDetails.destinationDetails.state}</td>
                <td>{pincodeDetails.destinationDetails.ODA}</td>
              </tr>
            </tbody>
          </table>
          <div className="statement">
            *IF ODA(Out of Delivery Area) IS TRUE EXTRA CHARGES ARE APPLICABLE
          </div>
        </div>
      )}
      {serviceMessage && (
        <div className="service-message">{serviceMessage}</div>
      )}
    </div>
  );
};

export default Pincode;
