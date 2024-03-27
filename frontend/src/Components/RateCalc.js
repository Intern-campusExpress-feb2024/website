import React, { useState } from 'react';
import './RateCalc.css';
import pincodeData from '../Components/pincodeData';

const INVALID_PINCODE = 'Invalid Pincode';

const ShippingRatesPage = () => {
  const [originPincode, setOriginPincode] = useState('');
  const [destinationPincode, setDestinationPincode] = useState('');
  const [weight, setWeight] = useState('');
  const [items, setItems] = useState([{ quantity: '', length: '', height: '', width: '' }]);
  const [baseRate, setBaseRate] = useState('');
  const [docketCharge, setDocketCharge] = useState('');
  const [gst, setGST] = useState('');
  const [total, setTotal] = useState('');
  const [finalWeight, setfinalWeight] = useState('');
  const [odaCharges, setODACharges] = useState('');
  const [pincodeError, setPincodeError] = useState('');
  const [showBreakdown, setShowBreakdown] = useState(false);
  const zoneChargesMatrix = [
    [24, 24, 25, 25, 28, 27, 29, 30, 32, 28, 26, 24, 28, 45, 32, 35],
    [25, 25, 25, 25, 28, 27, 29, 30, 32, 28, 26, 24, 28, 45, 32, 35],
    [25, 26, 25, 25, 28, 27, 29, 30, 32, 28, 26, 24, 28, 45, 32, 35],
    [28, 27, 25, 25, 28, 27, 29, 30, 32, 28, 26, 24, 28, 45, 32, 35],
    [27, 28, 25, 25, 28, 27, 29, 30, 32, 28, 26, 24, 28, 45, 32, 35],
    [29, 29, 25, 25, 28, 27, 29, 30, 32, 28, 26, 24, 28, 45, 32, 35],
    [30, 30, 25, 25, 28, 27, 29, 30, 32, 28, 26, 24, 28, 45, 32, 35],
    [32, 31, 25, 25, 28, 27, 29, 30, 32, 28, 26, 24, 28, 45, 32, 35],
    [28, 32, 25, 25, 28, 27, 29, 30, 32, 28, 26, 24, 28, 45, 32, 35],
    [26, 33, 25, 25, 28, 27, 29, 30, 32, 28, 26, 24, 28, 45, 32, 35],
    [24, 34, 25, 25, 28, 27, 29, 30, 32, 28, 26, 24, 28, 45, 32, 35],
    [28, 35, 25, 25, 28, 27, 29, 30, 32, 28, 26, 24, 28, 45, 32, 35],
    [45, 36, 25, 25, 28, 27, 29, 30, 32, 28, 26, 24, 28, 45, 32, 35],
    [32, 37, 25, 25, 28, 27, 29, 30, 32, 28, 26, 24, 28, 45, 32, 35],
    [35, 38, 25, 25, 28, 27, 29, 30, 32, 28, 26, 24, 28, 45, 32, 35],
    [34, 39, 25, 25, 28, 27, 29, 30, 32, 28, 26, 24, 28, 45, 32, 35],
  ];

  const getZoneByPincode = (pincode) => {
    const pincodeDetails = pincodeData.find((item) => item.pincode === parseInt(pincode));
    return pincodeDetails ? zoneToIndex(pincodeDetails.Zone) : INVALID_PINCODE;
  };

  const zoneToIndex = (zone) => {
    const zoneMap = {
      N1: 0,
      N2: 1,
      N3: 2,
      N4: 3,
      C1: 4,
      C2: 5,
      W1: 6,
      W2: 7,
      S1: 8,
      S2: 9,
      S3: 10,
      S4: 11,
      E1: 12,
      E2: 13,
      NE1: 14,
      NE2: 15,
    };

    return zoneMap[zone];
  };

  const handleCalculate = () => {
    if (!originPincode || !destinationPincode || !weight || !itemsAreValid()) {
      setPincodeError('Please fill in all required fields.');
      return;
    }
  
    const originZone = getZoneByPincode(originPincode);
    const destinationZone = getZoneByPincode(destinationPincode);
    if (originZone === INVALID_PINCODE || destinationZone === INVALID_PINCODE) {
      setPincodeError('Invalid Pincode');
      return;
    }
  
    setPincodeError('');
  
    const zoneCharge = zoneChargesMatrix[originZone][destinationZone];
    const weightInput = parseFloat(weight);
  
    // Calculate the volumetric weight
    let volumetricWeight = 0;
    items.forEach((item) => {
      const quantity = Number(item.quantity);
      const length = Number(item.length);
      const height = Number(item.height);
      const width = Number(item.width);
  
      if (!isNaN(quantity) && !isNaN(length) && !isNaN(height) && !isNaN(width)) {
        const itemVolume = length * height * width;
        const itemVolumetricWeight = itemVolume / 4000; // Volumetric weight formula
        volumetricWeight += itemVolumetricWeight * quantity;
      }
    });
  
    // Compare volumetric weight with weight input and use the higher value
    const finalWeight = Math.max(weightInput, volumetricWeight,20);
  
    // Calculate base rate
    const finalRate = finalWeight * zoneCharge;
  
    // Check if base rate is NaN or zero
    if (isNaN(finalRate) || finalRate === 0) {
      // Set all rates to zero
      setBaseRate('0');
      setDocketCharge('0');
      setGST('0');
      setTotal('0');
      setODACharges('0');
      setfinalWeight('0');
      return;
    }
  
    // Calculate Docket Charge
    const docketChargeValue = 300;
  
    // Calculate ODA charges
    const pincodeDetails = pincodeData.find((item) => item.pincode === parseInt(destinationPincode));
    const isODA = pincodeDetails ? pincodeDetails.ODA === 'TRUE' : false;
    const odaChargesValue = isODA ? 700 : 0;
  
    // Calculate GST
    const gstAmount = (finalRate + docketChargeValue + odaChargesValue) * 0.18;
  
    // Calculate total
    const totalValue = finalRate + docketChargeValue + odaChargesValue + gstAmount;
  
    setBaseRate(finalRate.toFixed(2));
    setDocketCharge(docketChargeValue.toFixed(2));
    setGST(gstAmount.toFixed(2));
    setTotal(totalValue.toFixed(2));
    setODACharges(odaChargesValue.toFixed(2));
    setfinalWeight(finalWeight.toFixed(2));
  };
  

  const itemsAreValid = () => {
    for (const item of items) {
      if (!item.quantity || !item.length || !item.height || !item.width) {
        return false;
      }
    }
    return true;
  };

  const handleAddMore = () => {
    setItems([...items, { quantity: '', length: '', height: '', width: '' }]);
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    setItems(updatedItems);
  };

  const calculateTotalQuantity = () => {
    let sum = 0;
    items.forEach((item) => {
      const quantity = Number(item.quantity);
      if (!isNaN(quantity)) {
        sum += quantity;
      }
    });
    return sum;
  };
  const handleShowBreakdown = () => {
    setShowBreakdown(!showBreakdown);
  };
  return (
    <div className="shipping-rates-page">
      <div className="content-box">
        <h1>
          <b>Calculate Shipping Rate</b>
        </h1>
        <div className="input-row">
          <div className="input-group">
            <label htmlFor="origin-pincode">Origin Pincode:</label>
            <input
              type="text"
              id="origin-pincode"
              value={originPincode}
              onChange={(e) => {
                const input = e.target.value;
                const numericInput = input.replace(/\D/g, ''); // Remove non-numeric characters
                const sanitizedInput = numericInput.slice(0, 6); // Limit to 6 digits
                setOriginPincode(sanitizedInput);
              }}
              placeholder="Pickup Pincode"
              pattern="[0-9]{1,6}"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="destination-pincode">Dest Pincode:</label>
            <input
              type="text"
              id="destination-pincode"
              value={destinationPincode}
              onChange={(e) => {
                const input = e.target.value;
                const numericInput = input.replace(/\D/g, ''); // Remove non-numeric characters
                const sanitizedInput = numericInput.slice(0, 6); // Limit to 6 digits
                setDestinationPincode(sanitizedInput);
              }}
              placeholder="Delivery Pincode"
              pattern="[0-9]{1,6}"
              required
            />
          </div>
        </div>
        {pincodeError && <div className="pincode-error">{pincodeError}</div>}
        <div className="input-row">
          <div className="input-group">
            <label htmlFor="weight">Weight:</label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Weight"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="total-quantity">Total Quantity:</label>
            <input
              type="number"
              id="total-quantity"
              value={calculateTotalQuantity()}
              readOnly
              required
            />
          </div>
        </div>
        {items.map((item, index) => (
          <div key={index} className="input-row">
            <div className="input-group">
              <label htmlFor={`quantity-${index}`}>Quantity:</label>
              <input
                type="number"
                id={`quantity-${index}`}
                value={item.quantity}
                onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
                placeholder="Quantity"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor={`length-${index}`}>Length:</label>
              <input
                type="number"
                id={`length-${index}`}
                value={item.length}
                onChange={(e) => handleItemChange(index, 'length', e.target.value)}
                placeholder="in cm"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor={`height-${index}`}>Height:</label>
              <input
                type="number"
                id={`height-${index}`}
                value={item.height}
                onChange={(e) => handleItemChange(index, 'height', e.target.value)}
                placeholder="in cm"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor={`width-${index}`}>Width:</label>
              <input
                type="number"
                id={`width-${index}`}
                value={item.width}
                onChange={(e) => handleItemChange(index, 'width', e.target.value)}
                placeholder="in cm"
                required
              />
            </div>
            {index > 0 && (
              <div className="item-actions">
                <button className="delete-button" onClick={() => handleDeleteItem(index)}>
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
        <div className="add-more-container">
          <div className="item-actions">
            <button className="add-more-button" onClick={handleAddMore}>
              +
            </button>
          </div>
          <span className="add-more-label">Add More</span>
        </div>
        <button className="calculate-button" onClick={handleCalculate}>
          Calculate
        </button>
        {pincodeError && <div className="error-message">{pincodeError}</div>}
      </div>
      {total === INVALID_PINCODE && <div className="invalid-pincode-message">Invalid Pincode</div>}
        {total !== '' && (
          <div>
            {!showBreakdown && (
            <div className="total-amount">
              <h2>Your Total Cost = {total}</h2>
            </div>
          )}
            {!showBreakdown && (
              <div className="breakdown-button">
                <button className="calculate-button" onClick={handleShowBreakdown}>
                  Show
                </button>
              </div>
            )}
            {showBreakdown && (
              <div>
                <div className="ta">
                  <h3>Charged Weight: {finalWeight} kgs</h3>
                  <h3>Base Rate&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {baseRate}</h3>
                  <h3>ODA Charges&nbsp;&nbsp;&nbsp;&nbsp;: {odaCharges}</h3>
                  <h3>Docket Charge&nbsp;&nbsp;: {docketCharge}</h3>
                  <h3>GST(18%)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {gst}</h3>
                  <h3>Total    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {total}</h3>
                </div>
                <div className="breakdown-button">
                  <button className="calculate-button" onClick={handleShowBreakdown}>
                    Hide
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      
  );
};

export default ShippingRatesPage;
