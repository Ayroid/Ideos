import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { DarkModeProvider } from "./contexts/darkModeContext";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeProvider>
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </DarkModeProvider>
  </React.StrictMode>
);
