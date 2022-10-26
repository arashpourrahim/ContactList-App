import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ContactProvider from "./Store/ContactProviders";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContactProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContactProvider>
  </React.StrictMode>
);
