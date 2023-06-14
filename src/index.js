import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/Modules/app.js";
import reportWebVitals from "./reportWebVitals";
import Screen from "./App2.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
