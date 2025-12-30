import React from "react";
import useAuthStore from "../store/useAuthStore";

const NavBar = () => {

    const { openLogin, openSignUp, user, logout } = useAuthStore()
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl h-14 bg-white/40 backdrop-blur-xl border border-[#CFE3D8]/30 rounded-full flex items-center justify-between px-8 z-50">
      <div className="text-lg font-black tracking-tighter text-[#1E3A2F]">
        FINCOGNIA
      </div>
      <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-widest text-gray-400">
        <span>Forecast</span>
        <span>Security</span>
        <span>Ledger</span>
      </div>
      <div className="flex items-center gap-4">
          {user ? (
            
            <button onClick={logout} className="text-[11px] font-bold uppercase tracking-widest text-gray-400 hover:text-red-500">Logout</button>
          ) : (
            <>
            <button onClick={openLogin} className="bg-[#1E3A2F] text-white px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl active:scale-95 transition-all">Login</button>
            <button onClick={openSignUp} className="bg-[#1E3A2F] text-white px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl active:scale-95 transition-all">Sign Up</button>
            </>
          )}
          
        </div>
      <div className="w-8 h-8 bg-[#1E3A2F] rounded-full flex items-center justify-center text-white text-[10px] cursor-pointer">
        ↗
      </div>
    </nav>
  );
};

export default NavBar;
