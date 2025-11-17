import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Fetch from "./FetchWeather/Fetch";
// import Accordion from "./Accodion/Accordion.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Fetch/>
    </BrowserRouter>
  </StrictMode>
);
