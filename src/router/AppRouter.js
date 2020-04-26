import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "../layouts/Main"
import Landing from "../pages/Landing"
// import welcome from "../pages/welcome"
import Login from "../pages/Login";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" exact>
          <Main>
            <Landing />
          </Main>
        </Route>
        <Route path="/login" exact>
          <Main>
            <Login />
          </Main>
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
);
export default AppRouter;
