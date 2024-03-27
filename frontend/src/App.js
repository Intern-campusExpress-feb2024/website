import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";

import UserRegistration from "./pages/UserRegistration";
import OrderCreation from "./pages/OrderCreation";
import LoginOTP from "./Components/LoginOTP";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/api/createUser" component={UserRegistration} />
          <Route path="/api/createOrder" component={OrderCreation} />
        </Switch>
      </div>
      <Login></Login>
      <LoginOTP></LoginOTP>
    </Router>
  );
}

export default App;
