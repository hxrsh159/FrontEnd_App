// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { withAuthenticator } from "@aws-amplify/ui-react";
import Home from "./Home";
import Portal from "./Portal";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/portal">Portal</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/portal" component={Portal} />
      </Switch>
    </Router>
  );
}

export default withAuthenticator(App);
