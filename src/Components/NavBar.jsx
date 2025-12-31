import React from "react";
import useAuthStore from "../store/useAuthStore";
import { useNavigate, useLocation } from "react-router-dom";

const NavBar = () => {
  const { openLogin, openSignUp, user, logout } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === '/dashboard' || location.pathname === '/agents' || location.pathname === '/policy-agent' || location.pathname === '/taxation-agent') return null;

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl h-14 bg-white/40 backdrop-blur-xl border border-[#CFE3D8]/30 rounded-full flex items-center justify-between px-8 z-50">
      <div className="text-lg font-black tracking-tighter text-[#1E3A2F] cursor-pointer" onClick={() => navigate('/')}>
        FINCOGNIA
      </div>

      {/* Public Links - Hidden if logged in */}
      {!user && (
        <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-widest text-gray-400">
          <span>Forecast</span>
          <span>Security</span>
          <span>Ledger</span>
        </div>
      )}

      {/* Auth Controls */}
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <div className="hidden md:block text-right mr-2">
              <div className="text-[9px] font-bold uppercase tracking-widest text-emerald-600">Active Agent</div>
              <div className="text-[10px] font-bold text-[#1E3A2F]">{user.email?.split('@')[0]}</div>
            </div>

            {/* Dashboard Link - Visible if on mobile or if needed. 
                Since user is logged in, they might benefit from a clear "Dashboard" button if they navigate to home.
             */}
            {/* Note: User asked for "single navbar". We will show user info and Logout. 
                 Maybe a small "Dashboard" button if not on dashboard?
                 For simplicity, let's keep "Dashboard" button always visible when logged in to allow easy navigation.
             */}
            <button onClick={() => navigate('/dashboard')} className="bg-[#1E3A2F] text-white px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl active:scale-95 transition-all">Dashboard</button>

            <button
              onClick={async () => {
                await logout();
                navigate('/');
              }}
              className="text-[11px] font-bold uppercase tracking-widest text-gray-400 hover:text-red-500"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button onClick={openLogin} className="bg-[#1E3A2F] text-white px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl active:scale-95 transition-all">Login</button>
            <button onClick={openSignUp} className="bg-[#1E3A2F] text-white px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl active:scale-95 transition-all">Sign Up</button>
          </>
        )}
      </div>

      {!user && (
        <div className="w-8 h-8 bg-[#1E3A2F] rounded-full flex items-center justify-center text-white text-[10px] cursor-pointer">
          ↗
        </div>
      )}
    </nav>
  );
};

export default NavBar;
