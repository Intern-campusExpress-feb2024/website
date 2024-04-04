import React, { useState, useEffect } from "react";
import rect5 from "../assets/Rectangle 19.svg";
import rect6 from "../assets/Rectangle 20.svg";
import rect7 from "../assets/Rectangle 21.svg";
import rect8 from "../assets/Rectangle 15.svg";
import ornament from "../assets/Ornament 13 (1).svg";
import ornament2 from "../assets/Ornament 42 (1).svg";
import ornament3 from "../assets/Ornament 43.svg";
import ornament4 from "../assets/Ornament 44.svg";
import "../index.css";
import man from "../assets/full-picture-till-waist-of-a-seasoned-man-smiling--deep-skin-and-a-piercing-gaze-he-sports-a-labo-971324508 (3) 1 (1).png";

function HappyClients() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="main" id="main">
        <div>
          <img
            src={rect8}
            alt="L rectangle"
            style={{ width: "75%", height: "70%" }}
          />
          <img
            src={rect7}
            alt="Rectangle Image3"
            style={{
              width: "350px",
              height: "400px",
              marginLeft: "44rem",
              marginTop: "-34rem",
            }}
          />
        </div>
        <div>
          <img
            src={rect6}
            alt="Rectangle Image2"
            style={{
              width: "250px",
              height: "350px",
              marginLeft: "30rem",
              marginTop: "-49rem",
            }}
          />
        </div>
        <div>
          <img
            src={rect6}
            alt="Rectangle Image2"
            style={{
              width: "250px",
              height: "350px",
              marginLeft: "30rem",
              marginTop: "-28rem",
            }}
          />
        </div>

        <div>
          <img
            src={rect5}
            alt="Rectangle Image1"
            style={{
              width: "500px",
              height: "400px",
              marginLeft: "30rem",
              marginTop: "-85rem",
            }}
          />
        </div>
        <div>
          <img
            src={man}
            alt="Man Image"
            className="rounded-full"
            style={{
              width: "442px",
              height: "400px",
              marginLeft: "1.2rem",
              marginTop: "-49rem",
            }}
          />
          {/* <img
            src={ornament}
            alt="ornament Image"
            className="rounded-full"
            style={{
              width: "200px",
              height: "200px",
              marginLeft: "-20rem",
              marginTop: "-64rem",
            }}
          /> */}
        </div>
      </div>
      <div className="text-center ">
        <p
          className="font-extrabold text-4xl"
          style={{
            fontSize: "46px",
            fontFamily: "Archivo",
            backgroundImage:
              "linear-gradient(90deg, #5B1C6A 12.37%, rgba(102, 0, 233, 0.82) 83.32%, #7000FF 97.45%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            fontWeight: "900",
          }}
        >
          10000+
        </p>
        <p
          style={{
            fontSize: "46px",
            fontFamily: "Archivo",
            backgroundImage:
              "linear-gradient(90deg, #5B1C6A 12.37%, rgba(102, 0, 233, 0.82) 83.32%, #7000FF 97.45%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            fontWeight: "900",
            marginTop: "-50rem",
          }}
        >
          Happy Clients
        </p>
      </div>

      {/* <div className="text-center">
        <p className="text-4xl font-bold">50k+</p>
        <p className="text-gray-600">Shipment Delivered</p>
      </div>
      <div className="text-center">
        <p className="text-4xl font-bold">28k+</p>
        <p className="text-gray-600">Served Pincodes</p>
      </div> */}
    </div>
  );
}

export default HappyClients;
