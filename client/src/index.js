import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import GlobalStyles from "./app/assets/js/globalStyles";
import App from "./app/app";

ReactDOM.render(
  <Router>
    <GlobalStyles />
    <App />
  </Router>,
  document.querySelector("#root")
);
