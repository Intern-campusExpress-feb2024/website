import React, { useState } from "react";
import "../App.css";

function OrderCreation() {
  const [orderData, setOrderData] = useState({
    source: "",
    destination: "",
    weight: "",
    quantity: "",
    length: "",
    width: "",
    height: "",
    paymentmode: "",
    invoicevalue: "",
    insurance: false, // Assuming default value is false
  });

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/createOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });
      if (!response.ok) {
        throw new Error("Failed to create order");
      }
      const data = await response.json();
      console.log(data);
      // Handle success response if needed
    } catch (error) {
      console.error("Error:", error);
      // Handle error response if needed
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData({ ...orderData, [name]: value });
  };

  return (
    <div className="container">
      <h1>Place New Order</h1>
      <form onSubmit={handleOrderSubmit}>
        <label htmlFor="source">Source Address:</label>
        <input
          type="text"
          id="source"
          name="source"
          value={orderData.source}
          onChange={handleChange}
        />
        <label htmlFor="destination">Destination Address:</label>
        <input
          type="text"
          id="destination"
          name="destination"
          value={orderData.destination}
          onChange={handleChange}
        />
        <label htmlFor="weight">Weight:</label>
        <input
          type="text"
          id="weight"
          name="weight"
          value={orderData.weight}
          onChange={handleChange}
        />
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="text"
          id="quantity"
          name="quantity"
          value={orderData.quantity}
          onChange={handleChange}
        />
        <label htmlFor="length">Length:</label>
        <input
          type="text"
          id="length"
          name="length"
          value={orderData.length}
          onChange={handleChange}
        />
        <label htmlFor="width">Width:</label>
        <input
          type="text"
          id="width"
          name="width"
          value={orderData.width}
          onChange={handleChange}
        />
        <label htmlFor="height">Height:</label>
        <input
          type="text"
          id="height"
          name="height"
          value={orderData.height}
          onChange={handleChange}
        />
        <label htmlFor="paymentmode">Payment Mode:</label>
        <input
          type="text"
          id="paymentmode"
          name="paymentmode"
          value={orderData.paymentmode}
          onChange={handleChange}
        />
        <label htmlFor="invoicevalue">Invoice Value:</label>
        <input
          type="text"
          id="invoicevalue"
          name="invoicevalue"
          value={orderData.invoicevalue}
          onChange={handleChange}
        />
        <div>
          <label>Insurance:</label>
          <label htmlFor="insuranceYes">Yes</label>
          <input
            type="radio"
            id="insuranceYes"
            name="insurance"
            value="true"
            checked={orderData.insurance}
            onChange={handleChange}
          />
          <label htmlFor="insuranceNo">No</label>
          <input
            type="radio"
            id="insuranceNo"
            name="insurance"
            value="false"
            checked={!orderData.insurance}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default OrderCreation;
