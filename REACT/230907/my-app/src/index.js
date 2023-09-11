import React from "react";
import ReactDOM from "react-dom/client";

import ReactFragment from "./ReactFragment";
import ReactFragmentPractice from "./ReactFragmentPractice";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <ReactFragment />
    <ReactFragmentPractice />
  </React.StrictMode>
);
