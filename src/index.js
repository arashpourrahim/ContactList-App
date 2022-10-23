import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ContactProvider from "./Store/ContactProviders";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContactProvider>
      <App />
    </ContactProvider>
  </React.StrictMode>
);
