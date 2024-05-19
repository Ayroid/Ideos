import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { DarkModeProvider } from "./contexts/darkModeContext";

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeProvider>
      <Router>
        <App />
      </Router>
    </DarkModeProvider>
  </React.StrictMode>
);
