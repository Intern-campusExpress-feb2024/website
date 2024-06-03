import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import Subscription from "./Components/Subscription";
import Login from "./Components/Login";
import Cards from "./Components/Cards";
import UserRegistration from "./pages/UserRegistration";
import OrderCreation from "./pages/OrderCreation";
import LoginOTP from "./Components/LoginOTP";
import Flowchart from "./Components/Flowchart";
import HappyClients from "./Components/HappyClients";
import NavbarTrack from "./Components/NavbarTrack";
import RateCalculator from "./Components/RateCalculator";
import TrackOrder from "./Components/TrackOrder";
function App() {
  return (
    <Router>
      <NextUIProvider>
    <RateCalculator></RateCalculator>
      </NextUIProvider>
    </Router>
  );
}

export default App;
