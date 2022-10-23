import React from "react";
import "./styles.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { List } from "./components/List";
import { Checkout } from "./components/Checkout";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/order" component={Checkout} />
          <Route path="/" component={List} />
        </Switch>
      </Router>
    </div>
  );
}
