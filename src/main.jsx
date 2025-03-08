import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MainHead from "./MainHead.jsx";
import Cource from "./Cource.jsx";
import CourceCal2 from "./CourceCal2.jsx";
import CourceCol3 from "./CourceCol3.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <MainHead />
    <Cource />
    <CourceCal2 />
    <CourceCol3 />
  </StrictMode>
);
