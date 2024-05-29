import React, { useState, useEffect, useRef } from "react";
import "./TrackOrder.css";
import timg from "../assets/trackingImage.png";

const formatDate = (dateString) => {
  const options = { month: "short", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-UK", options);
};

const getStatusText = (status) => {
  switch (status) {
    case "DELIVERED":
      return "DELIVERED";
    case "MANIFESTED":
      return "Placed";
    case "REACH_DESTINATION":
      return "REACHED DESTINATION CITY";
    case "UNDEL_REATTEMPT":
      return "IN-TRANSIT";
    case "LEFT_ORIGIN":
      return "IN-TRANSIT";
    case "OFD":
      return "OUT FOR DELIVERY";
    default:
      return status;
  }
};

const TrackOrder = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingDetails, setTrackingDetails] = useState(null);
  const [error, setError] = useState(null);
  const [showProgressBar, setShowProgressBar] = useState(false);
  const [progressBarClass, setProgressBarClass] = useState("");
  const resultsRef = useRef(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const trackingNumber = urlParams.get("trackingNumber");
    if (trackingNumber) {
      handleTrackOrder(trackingNumber);
      setTrackingNumber(trackingNumber);
    }
  }, []);

  useEffect(() => {
    if (trackingDetails) {
      updateProgressBar(trackingDetails.status);
      if (resultsRef.current) {
        resultsRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [trackingDetails]);

  const updateProgressBar = (status) => {
    switch (status) {
      case "MANIFESTED":
        setProgressBarClass("manifested");
        break;
      case "REACH_DESTINATION":
      case "UNDEL_REATTEMPT":
      case "LEFT_ORIGIN":
        setProgressBarClass("left-origin");
        break;
      case "OFD":
        setProgressBarClass("out-of-delivery");
        break;
      case "DELIVERED":
        setProgressBarClass("delivered");
        break;
      default:
        setProgressBarClass("can");
        break;
    }
  };

  const handleTrackOrder = (trackingNumber) => {
    setShowProgressBar(true);
    fetch(`https://btob.api.delhivery.com/v2/track/${trackingNumber}`)
      .then((response) => response.json())
      .then((data) => {
        if (!data || Object.keys(data).length === 0) {
          setError("Please enter a valid tracking number.");
          setTrackingDetails(null);
        } else {
          setTrackingDetails(data);
          setError(null);
        }
      })
      .catch((error) => {
        console.error("Error fetching tracking details:", error);
        setError("Error fetching tracking details. Please try again.");
        setTrackingDetails(null);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleTrackOrder(trackingNumber);
  };

  return (
    <div className="tracking-container">
      <div className="timage-container">
        <h1 className="tadd">Welcome To Campus Express Tracking Page</h1>
        <img src={timg} alt="Tracking" className="independent-image" />
      </div>
      <div className="ttext-container">
        <form onSubmit={handleSubmit}>
          <div className="tbox-container">
            <div class="tbox-line"></div>

            <h2 className="tmain-heading gradient-text">
              TRACK YOUR ORDER NOW
            </h2>
            <p className="tsub-heading">
              Your Shortcut to Instant Shipment Updates!
            </p>
            <h4 className="tbox-subheading">LRN Number:</h4>
            <input
              type="text"
              className="tracking-input"
              style={{
                textAlign: "center",
              }}
              placeholder=" Enter Your 9 Digit LRN Number"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
            />
            <button className="track-button" type="submit">
              TRACK ORDER
            </button>
            {/*  here make it link or href tags if needed */}
            <div className="needhelp">Need Help?</div>
          </div>
        </form>
        {error && <p className="error-message">{error}</p>}
        {showProgressBar && trackingDetails && (
          <div className="tracking-details" ref={resultsRef}>
            <h3>Tracking Details:</h3>
            <div className="wrapper">
              <div className="margin-area">
                <div className={`dotone ${progressBarClass}`}>1</div>
                <div className={`dottwo ${progressBarClass}`}>2</div>
                <div className={`dotthree ${progressBarClass}`}>3</div>
                <div className={`dotfour ${progressBarClass}`}>4</div>
                <div className={`progress-barfirst ${progressBarClass}`}></div>
                <div className={`progress-barsecond ${progressBarClass}`}></div>
                <div className={`progress-barthird ${progressBarClass}`}></div>
                <div className="message message-1">Picked up</div>
                <div className="message message-2">In-Transit</div>
                <div className="message message-3">Out for delivery</div>
                <div className="message message-4">Delivered</div>
              </div>
            </div>
            <div className="del-status">
              <div className="arrival-info">
                {trackingDetails.status === "DELIVERED" ? (
                  <div className="arrival-text">Delivered on</div>
                ) : (
                  <div className="arrival-text">Arriving on</div>
                )}
              </div>
              <div className="status">
                <div className="status-text">
                  {getStatusText(trackingDetails.status)}
                </div>
              </div>
              <div className="estimated-date">
                {formatDate(trackingDetails.estimated_date)}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackOrder;
