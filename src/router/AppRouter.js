import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import welcome from "../pages/welcome"

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={welcome} exact />
      </Switch>
    </div>
  </BrowserRouter>
);
export default AppRouter;