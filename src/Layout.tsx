import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";
import AuthModal from "./Components/AuthModal";

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#1E3A2F] font-sans selection:bg-[#CFE3D8] overflow-hidden">
      
      <NavBar />
      <AuthModal />
      <Outlet />
    </div>
  );
}
