import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { LibraryProvider } from "./Contexts/LibraryContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <LibraryProvider>
      <App />
    </LibraryProvider>
  </BrowserRouter>
);
