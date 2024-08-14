import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import "primereact/resources/themes/lara-light-cyan/theme.css"; //Prime Theme
import "primeicons/primeicons.css"; //Prime Icons
import "primeflex/primeflex.css"; //Prime Flex

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
