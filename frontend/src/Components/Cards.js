import React, { useState, useEffect } from "react";
import { Paper, Text, Button, MantineProvider } from "@mantine/core";
import pincodeImage1 from "../assets/pincodeImage1.png";
import rateCalcImg from "../assets/RateCalcImg.png";
import location from "../assets/Group 72.svg";

function Cards() {
  const [isStacked, setIsStacked] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsStacked(window.innerWidth < 1139);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MantineProvider>
      <div
        style={{
          backgroundColor: "",
          padding: "5rem",
          display: "flex",
          flexDirection: isStacked ? "column" : "row",
        }}
      >
        <Paper
          style={{
            borderRadius: "50px",
            backgroundColor: "white",
            backgroundImage: `url(${pincodeImage1})`,
            backgroundSize: "cover",
            width: "40vw",
            height: "70vh",
            marginRight: isStacked ? "0" : "3rem",
            marginBottom: isStacked ? "3rem" : "0",
          }}
        >
          <div className="mx-3 my-5">
            <Text
              fw={900}
              style={{
                color: "#0E0E0E",
                fontFamily: "Archivo",
                fontSize: "44.904px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal",
                letterSpacing: "2.245px",
              }}
            >
              Serviceable
            </Text>
          </div>

          <div>
            <Text
              fw={900}
              style={{
                marginTop: "-2rem",
                marginLeft: "1rem",
                color: "#902FC6",
                fontFamily: "Archivo",
                fontSize: "44.904px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal",
                letterSpacing: "2.245px",
                textTransform: "capitalize",
              }}
            >
              Pincodes
            </Text>
          </div>

          <img
            src={location}
            alt="Location Icon"
            style={{
              width: "250px",
              height: "250px",
              marginLeft: isStacked ? "12rem" : "20rem",
              marginTop: "-3rem",
            }}
          />

          <div>
            <Text
              style={{
                color: "#000000",
                fontFamily: "Archivo",
                fontSize: "14.904px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
                letterSpacing: "2.245px",
                textTransform: "capitalize",
                paddingTop: "0.5rem",
                paddingBottom: "2rem",
                marginTop: "-12rem",
                marginLeft: "1rem",
              }}
            >
              lorem
            </Text>
          </div>

          <Button
            style={{
              alignSelf: "center",
              marginTop: "6rem",
              marginLeft: "1rem",
              backgroundColor: "#902FC6",
              color: "white",
              border: "transparent",
              fontSize: "0.8rem",
              borderRadius: "8px",
            }}
          >
            Get Started
          </Button>
        </Paper>

        <Paper
          style={{
            borderRadius: "50px",
            backgroundColor: "rgb(88, 50, 168,0.75)",
            backgroundImage: `url(${rateCalcImg})`,
            backgroundSize: "cover",
            width: "40vw",
            height: "70vh",
            marginRight: isStacked ? "0" : "3rem",
            marginBottom: isStacked ? "0" : "0",
          }}
        >
          <div className="mx-3 my-5">
            <Text
              fw={900}
              style={{
                color: "white",
                fontFamily: "Archivo",
                fontSize: "44.904px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal",
                letterSpacing: "2.245px",
              }}
            >
              Shipping Rate
            </Text>
          </div>

          <div>
            <Text
              fw={900}
              style={{
                marginTop: "-2rem",
                marginLeft: "1rem",
                color: "white",
                fontFamily: "Archivo",
                fontSize: "44.904px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal",
                letterSpacing: "2.245px",
                textTransform: "capitalize",
              }}
            >
              Calculator
            </Text>
          </div>

          <div>
            <Text
              style={{
                color: "#000000",
                fontFamily: "Archivo",
                fontSize: "14.904px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
                letterSpacing: "2.245px",
                textTransform: "capitalize",
                paddingTop: "0.5rem",
                paddingBottom: "2rem",
                marginTop: "1.5rem",
                marginLeft: "1rem",
              }}
            >
              lorem
            </Text>
          </div>

          <Button
            style={{
              alignSelf: "center",
              marginTop: "6rem",
              marginLeft: "1rem",
              backgroundColor: "#902FC6",
              color: "white",
              border: "transparent",
              fontSize: "0.8rem",
              borderRadius: "8px",
            }}
          >
            Explore
          </Button>
        </Paper>
      </div>
    </MantineProvider>
  );
}

export default Cards;
