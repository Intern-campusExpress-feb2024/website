import React, { useState, useEffect } from "react";
import imageForScreen from "../assets//flowchartImg.svg";
import "../index.css";

function Flowchart() {
  const [isSmallerScreen, setIsSmallerScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      // Update isSmallerScreen based on screen width
      setIsSmallerScreen(window.innerWidth < 768); // Adjust threshold as needed
    }

    // Call handleResize on initial render and window resize
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="centered-image-container">
      <img
        src={imageForScreen}
        alt="Centered Image"
        style={{
          width: "auto",
          height: "auto",
          maxWidth: "100%",
          maxHeight: "100%",
          transform: isSmallerScreen ? "rotate(90deg)" : "none",
        }}
      />
    </div>
  );
}

export default Flowchart;
