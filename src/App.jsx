import { BrowserRouter, Routes, Route } from "react-router-dom";
import FincogniaLandingPage from "./Components/FincogniaLandingPage";
import Dashboard from "./Components/Dashboard";
import CreditPage from "./Components/CreditPage";
import Agents from "./Components/Agents";
import PolicyPage from "./Components/PolicyPage";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<FincogniaLandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/credit" element={<CreditPage />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/policy-agent" element={<PolicyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
