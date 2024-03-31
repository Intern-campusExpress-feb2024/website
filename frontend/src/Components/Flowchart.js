import React from "react";
import ellipseImage from "../assets/Ellipse 17.png";
import circleImage1 from "../assets/flowchart1.png";
import circleImage2 from "../assets/flowchart2.svg";
import circleImage3 from "../assets/flowchart3.svg";
import circleImage4 from "../assets/flowchart4.png";
import circleImage5 from "../assets/truckImageFlowchart.png";
import "../index.css";

function Flowchart() {
  const circleImages = [
    circleImage1,
    circleImage2,
    circleImage3,
    circleImage4,
    circleImage5,
  ];

  const ellipseStyle = {
    width: "150px",
    height: "150px",
    backgroundSize: "cover",
    position: "relative", // Set position to relative
  };

  const circleStyle = {
    width: "45px",
    height: "45px",
    backgroundSize: "cover",
    position: "absolute", // Set position to absolute
    top: "50%", // Position at the center vertically
    left: "50%", // Position at the center horizontally
    transform: "translate(-60%, -60%)", // Center the circle image
  };

  return (
    <div className="flow">
      {/* Render ellipse images */}
      {[...Array(5)].map((_, index) => (
        <div
          key={`ellipse-${index}`}
          style={{ ...ellipseStyle, backgroundImage: `url(${ellipseImage})` }}
          className="m-2 flowchart"
        >
          {/* Render circle image on top of ellipse */}
          <div
            key={`circle-${index}`}
            style={{
              ...circleStyle,
              backgroundImage: `url(${circleImages[index]})`,
            }}
            className={`circle-image-${index}`} // Unique class name for each circle
          ></div>
        </div>
      ))}
    </div>
  );
}

export default Flowchart;
