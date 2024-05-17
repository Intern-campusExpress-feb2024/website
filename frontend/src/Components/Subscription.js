import React from "react";
import subscription from "../assets/subscription.svg";
import "./Subscription.css";

function Subscription() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="rectangle relative">
        <p className="rectangle-text">
          LOREM IPSUM <br></br> "reach out to us for seamless courier solutions"
        </p>
        <div className="email">
          <input type="text" placeholder="Enter Your Email Address" />
          <button className="button">Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Subscription;
