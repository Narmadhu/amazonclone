import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Checkout from "./components/checkout/Checkout";
import { store } from "./redux/store/store";
import { Provider } from "react-redux";
import Loginpage from "./components/login/Loginpage";
import SignupPage from "./components/signup/SignUp";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Loginpage />
            </Route>
            <Route path="/signup">
              <SignupPage />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
