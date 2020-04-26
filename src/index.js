import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "../src/router/AppRouter";
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);