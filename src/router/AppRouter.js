import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register"
import Main from "../layouts/Main/Main";
import DashboardLayout from "../layouts/Dashboard/dashboardLayout"
import Landing from "../pages/Landing/Landing";
import Dashboard from "../pages/Dashboard/Dashboard";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile"
import ResetPassword from "../pages/ResetPassword/ResetPassword";

const AppRouter = () => (
  <BrowserRouter>
      <ToastContainer />

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
        <Route path="/reset" exact>
          <Main>
            <ResetPassword />
          </Main>
        </Route>
        <Route path="/dashboard">
          <DashboardLayout>
            <Dashboard />
          </DashboardLayout>
        </Route>
        <Route path="/profile/update">
          <DashboardLayout>
            <UpdateProfile />
          </DashboardLayout>
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
);
export default AppRouter;
