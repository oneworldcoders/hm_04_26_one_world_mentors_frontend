import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Main from "../layouts/Main";
import DashboardLayout from "../layouts/dashboardLayout"
import Landing from "../pages/Landing";
import Dashboard from "../pages/Dashboard";

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
        <Route path="/dashboard">
          <DashboardLayout>
            <Dashboard />
          </DashboardLayout>
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
);
export default AppRouter;
