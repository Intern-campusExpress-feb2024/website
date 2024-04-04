import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import "./App.css";
import Login from "./Components/Login";
import Cards from "./Components/Cards";
import UserRegistration from "./pages/UserRegistration";
import OrderCreation from "./pages/OrderCreation";
import LoginOTP from "./Components/LoginOTP";
import Flowchart from "./Components/Flowchart";
import HappyClients from "./Components/HappyClients";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* <Route path="/api/createUser" component={UserRegistration} />
          <Route path="/api/createOrder" component={OrderCreation} /> */}
        </Switch>
      </div>
      {/* <Login></Login>
      <LoginOTP></LoginOTP> */}
      {/* <Cards></Cards> */}
      {/* <Flowchart></Flowchart> */}
      <HappyClients></HappyClients>
    </Router>
  );
}

export default App;
