import React from "react";
import * as ReactDomClient from "react-dom/client";
import "./index.css";
import App from "./App";

const container = document.getElementById("root");
const root = ReactDomClient.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
