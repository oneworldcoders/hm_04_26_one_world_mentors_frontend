import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import welcome from "../pages/welcome"
import Login from "../pages/Login";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={welcome} exact />
        <Route path="/login" component={Login} exact />
      </Switch>
    </div>
  </BrowserRouter>
);
export default AppRouter;