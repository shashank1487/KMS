import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "./components/landing";
import Register from "./components/register";
import Login from "./components/login";
import Home from "./components/home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/register" component={Register}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/home" component={Home}></Route>
      <Route path="/" exact component={Landing}></Route>
    </Switch>
  );
};

export default Routes;
