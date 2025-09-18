import { StrictMode } from "react";
import { createRoot, ReactDOM } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { HeadProvider } from "react-head";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HeadProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HeadProvider>
  </StrictMode>
);
