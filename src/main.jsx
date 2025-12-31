import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Layout from "./Layout";
import Dashboard from "./Components/Dashboard";
import Agents from "./Components/Agents";
import PolicyPage from "./Components/PolicyPage";
import TaxationPage from "./Components/TaxationPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/policy-agent" element={<PolicyPage />} />
          <Route path="/taxation-agent" element={<TaxationPage />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
