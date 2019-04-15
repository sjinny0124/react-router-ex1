import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import TabApp from "./examples/TabApp";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/home" component={TabApp} />
      <Redirect from="/" to="/home" />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("root"));
