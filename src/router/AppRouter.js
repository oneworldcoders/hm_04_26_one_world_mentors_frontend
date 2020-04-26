import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../components/Register/Register"
import Main from "../layouts/Main/Main";
import DashboardLayout from "../layouts/Dashboard/dashboardLayout"
import Landing from "../pages/Landing/Landing";
import Dashboard from "../pages/Dashboard/Dashboard";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
      <Route path="/" exact>
          <Main>
            <Landing />
          </Main>
        </Route>
        <Route path="/signup">
          <Main>
            <Register />
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
