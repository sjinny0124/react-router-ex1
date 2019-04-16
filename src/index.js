import React from "react";
import ReactDOM from "react-dom";
import TabApp from "./examples/TabApp";
import "./App.css";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/home" component={TabApp} />
      <Redirect from="/" to="/home" />
    </Switch>
  </BrowserRouter>
);
ReactDOM.render(routes, document.getElementById("root"));
