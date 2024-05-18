import React from "react";
import "./RateCalculator.css";

function RateCalculator() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="relative">
          <div className="text-container">
            <p className="gradient-text">Express</p>
            <p className="rc-text">Rate Calculator</p>
          </div>
          <div className="rectangle">
            <div className="container">
              <div className="input-container">
                <div className="placeholder-text">Origin Pincode</div>
                <div className="origin-pincode">
                  <input type="text" />
                </div>
              </div>
              <div className="input-container">
                <div className="placeholder-text">Delivery Pincode</div>
                <div className="del-pincode">
                  <input type="text" />
                </div>
              </div>
              <div className="input-container">
                <div className="placeholder-text">Weight</div>
                <div className="wt">
                  <input type="text" />
                </div>
              </div>
              <div className="input-container">
                <div className="placeholder-text">Quantity</div>
                <div className="qt">
                  <input type="text" />
                </div>
              </div>
              <div className="input-container">
                <div className="placeholder-text">Height</div>
                <div className="ht">
                  <input type="text" />
                </div>
              </div>
              <div className="input-container">
                <div className="placeholder-text">Total Quantity</div>
                <div className="total-qt">
                  <input type="text" />
                </div>
              </div>
              <div className="input-container">
                <div className="placeholder-text">Length</div>
                <div className="length">
                  <input type="text" />
                </div>
              </div>
              <div className="input-container">
                <div className="placeholder-text">Width</div>
                <div className="width">
                  <input type="text" />
                </div>
              </div>
              <button className="button">Calculate now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RateCalculator;
