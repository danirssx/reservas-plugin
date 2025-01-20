import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

const container = document.getElementById("reservas-root");

if (container) {
  const root = createRoot(container); // React 18 utiliza createRoot
  root.render(<App />);
}
