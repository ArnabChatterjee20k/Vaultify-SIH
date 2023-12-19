import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { thirdWebConfig } from "./data.js";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThirdwebProvider clientId={thirdWebConfig.id}>
        <App />
      </ThirdwebProvider>
    </BrowserRouter>
  </React.StrictMode>
);
