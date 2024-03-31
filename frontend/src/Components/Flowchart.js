import React, { useState, useEffect } from "react";
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

  const [containerStyle, setContainerStyle] = useState({
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
  });

  useEffect(() => {
    function handleResize() {
      // Update containerStyle based on screen width
      if (window.innerWidth < 1139) {
        setContainerStyle({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "auto", // Center the container horizontally
        });
      } else {
        setContainerStyle({
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
        });
      }
    }

    // Call handleResize on initial render and window resize
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flow" style={containerStyle}>
      {/* Render ellipse images */}
      {[...Array(5)].map((_, index) => (
        <div
          key={`ellipse-${index}`}
          style={{
            ...ellipseStyle,
            backgroundImage: `url(${ellipseImage})`,
            marginBottom: "20px", // Add spacing between ellipses
          }}
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
