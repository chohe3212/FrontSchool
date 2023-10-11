import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css"; // css 초기화가 먼저 이뤄져야 한다.
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
