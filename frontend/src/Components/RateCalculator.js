import React, { useState } from "react";
import Modal from "react-modal";
import "./RateCalculator.css";
import pincodeData from "../Components/pincodeData";
import image1 from "../assets/TIK MANIPAL (7) 2.png";
import image2 from "../assets/ultra-realistic-3d-model-of-a-calculator-pronounced-buttons-casting-soft-shadows-emerging-from-a-d-897079567 1.png";
import image3 from "../assets/upper_chunk.png";
import littleman from "../assets/a-lifelike-pen-and-ink-illustration-of-an-artist-sketching-a-detailed-landscape-artist-located-at-f-119878496 1.png";
const INVALID_PINCODE = "Invalid Pincode";

Modal.setAppElement("#root"); // Set the app root element for accessibility

const RateCalculator = () => {
  const [originPincode, setOriginPincode] = useState("");
  const [destinationPincode, setDestinationPincode] = useState("");
  const [weight, setWeight] = useState("");
  const [quantity, setQuantity] = useState("");
  const [height, setHeight] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [baseRate, setBaseRate] = useState("");
  const [docketCharge, setDocketCharge] = useState("");
  const [gst, setGST] = useState("");
  const [total, setTotal] = useState("");
  const [finalWeight, setFinalWeight] = useState("");
  const [odaCharges, setODACharges] = useState("");
  const [pincodeError, setPincodeError] = useState("");
  const [showBreakdown, setShowBreakdown] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
    const pincodeDetails = pincodeData.find(
      (item) => item.pincode === parseInt(pincode)
    );
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
    if (
      !originPincode ||
      !destinationPincode ||
      !weight ||
      !quantity ||
      !height ||
      !length ||
      !width
    ) {
      setPincodeError("Please fill in all required fields.");
      return;
    }

    const originZone = getZoneByPincode(originPincode);
    const destinationZone = getZoneByPincode(destinationPincode);
    if (originZone === INVALID_PINCODE || destinationZone === INVALID_PINCODE) {
      setPincodeError("Invalid Pincode");
      return;
    }

    setPincodeError("");

    const zoneCharge = zoneChargesMatrix[originZone][destinationZone];
    const weightInput = parseFloat(weight);

    // Calculate the volumetric weight
    const volumetricWeight =
      (parseFloat(length) *
        parseFloat(height) *
        parseFloat(width) *
        parseFloat(quantity)) /
      4000;

    // Compare volumetric weight with weight input and use the higher value
    const finalWeight = Math.max(weightInput, volumetricWeight, 20);

    // Calculate base rate
    const finalRate = finalWeight * zoneCharge;

    // Check if base rate is NaN or zero
    if (isNaN(finalRate) || finalRate === 0) {
      // Set all rates to zero
      setBaseRate("0");
      setDocketCharge("0");
      setGST("0");
      setTotal("0");
      setODACharges("0");
      setFinalWeight("0");
      return;
    }

    // Calculate Docket Charge
    const docketChargeValue = 300;

    // Calculate ODA charges
    const pincodeDetails = pincodeData.find(
      (item) => item.pincode === parseInt(destinationPincode)
    );
    const isODA = pincodeDetails ? pincodeDetails.ODA === "TRUE" : false;
    const odaChargesValue = isODA ? 700 : 0;

    // Calculate GST
    const gstAmount = (finalRate + docketChargeValue + odaChargesValue) * 0.18;

    // Calculate total
    const totalValue =
      finalRate + docketChargeValue + odaChargesValue + gstAmount;

    setBaseRate(finalRate.toFixed(2));
    setDocketCharge(docketChargeValue.toFixed(2));
    setGST(gstAmount.toFixed(2));
    setTotal(totalValue.toFixed(2));
    setODACharges(odaChargesValue.toFixed(2));
    setFinalWeight(finalWeight.toFixed(2));

    setShowBreakdown(true);
    setModalIsOpen(true); // Open the modal
  };

  const handleScrollToBottom = () => {
    const bottomSection = document.getElementById("bottom-section");
    if (bottomSection) {
      bottomSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Element with id 'bottom-section' not found.");
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div className="top-section">
        <div>
          <img src={image3} alt="" className="top-image3" />
          <img src={image1} alt="tik" className="top-image1" />
        </div>

        <div className="text-container-top">
          <p className="gradient-text-top">Determine</p>
          <p className="text-top1">your shipping </p>
          <p className="text-top2">costs now</p>
          <p className="text-top3">
            Plan your eCommerce shipments in an instant.<br></br>Estimate
            courier charges using the Campus Express rate calculator.
          </p>
          <button className="button-top" onClick={handleScrollToBottom}>
            <img src={image2} className="button-img" alt="Calculate"></img>
            Calculate Now
          </button>
        </div>
      </div>
      <div className="bottom-section" id="bottom-section">
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
                    <input
                      type="text"
                      id="origin-pincode"
                      name="originPincode"
                      value={originPincode}
                      onChange={(e) => setOriginPincode(e.target.value)}
                    />
                  </div>
                </div>
                <div className="input-container">
                  <div className="placeholder-text">Delivery Pincode</div>
                  <div className="del-pincode">
                    <input
                      type="text"
                      id="destination-pincode"
                      name="destinationPincode"
                      value={destinationPincode}
                      onChange={(e) => setDestinationPincode(e.target.value)}
                    />
                  </div>
                </div>
                <div className="input-container">
                  <div className="placeholder-text">Weight</div>
                  <div className="wt">
                    <input
                      type="text"
                      id="weight"
                      name="weight"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                    />
                  </div>
                </div>
                <div className="input-container">
                  <div className="placeholder-text">Quantity</div>
                  <div className="qt">
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </div>
                </div>
                <div className="input-container">
                  <div className="placeholder-text">Height</div>
                  <div className="ht">
                    <input
                      type="text"
                      id="height"
                      name="height"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                    />
                  </div>
                </div>
                <div className="input-container">
                  <div className="placeholder-text">Length</div>
                  <div className="length">
                    <input
                      type="text"
                      id="length"
                      name="length"
                      value={length}
                      onChange={(e) => setLength(e.target.value)}
                    />
                  </div>
                </div>
                <div className="input-container">
                  <div className="placeholder-text">Width</div>
                  <div className="width">
                    <input
                      type="text"
                      id="width"
                      name="width"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                    />
                  </div>
                </div>
                <button className="button" onClick={handleCalculate}>
                  Calculate now
                </button>
                {pincodeError && <div className="error">{pincodeError}</div>}
                {showBreakdown && (
                  <div
                    style={{
                      padding: "16px",
                      borderRadius: "18px",
                      background: "linear-gradient(110deg, #ffffff, #D276FC)",
                      width: "500px",
                      height: "500px",
                      marginTop: "700px",
                      flexWrap: "wrap",
                      flexDirection: "column",
                      alignContent: "center",
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: "-800px",
                    }}
                  >
                    <div className="flex flex-row center">
                      <p className="text-result1">Your</p>
                      <p className="gradient-text-result">Total</p>
                      <p className="text-result2">Cost</p>
                    </div>
                    <p style={{ margin: "8px 0" }}>Base Rate: {baseRate}</p>
                    <p style={{ margin: "8px 0" }}>
                      Docket Charge: {docketCharge}
                    </p>
                    <p style={{ margin: "8px 0" }}>
                      Final Weight: {finalWeight}
                    </p>
                    <p style={{ margin: "8px 0" }}>ODA Charges: {odaCharges}</p>
                    <p style={{ margin: "8px 0" }}>GST: {gst}</p>
                    <p
                      style={{
                        margin: "8px 0",
                        fontWeight: "bolder",
                        fontSize: "1rem",
                      }}
                    >
                      Total: {total}
                    </p>
                    <img
                      src={littleman}
                      style={{
                        width: "250px",
                        height: "150px",
                        marginLeft:"250px",
                        marginTop: "-250px"
                      }}
                    ></img>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Rate Breakdown"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>Rate Breakdown</h2>
        {showBreakdown && (
          <div className="breakdown">
            <p>Base Rate: {baseRate}</p>
            <p>Docket Charge: {docketCharge}</p>
            <p>GST: {gst}</p>
            <p>ODA Charges: {odaCharges}</p>
            <p>Total: {total}</p>
            <p>Final Weight: {finalWeight}</p>
          </div>
        )}
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  );
};

export default RateCalculator;
