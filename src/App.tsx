import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Loginpage from "./Loginpage";

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
