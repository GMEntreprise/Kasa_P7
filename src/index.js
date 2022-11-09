// Import des module
import React from "react";
import ReactDOM from "react-dom/client";

// Import des fichiers
import App from "./App";
import "./style/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
