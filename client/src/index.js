import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./components/App";
import Login from "./components/Login";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Login />
      {/* <App /> */}
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
