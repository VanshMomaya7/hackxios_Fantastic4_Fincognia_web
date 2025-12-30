import { create } from 'zustand';

const useAuthStore = create((set) => ({
  isLoginOpen: false,
  isSignUpOpen: false,
  user: null,

  openLogin: () => set({ isLoginOpen: true, isSignUpOpen: false }),
  openSignUp: () => set({ isSignUpOpen: true, isLoginOpen: false }),
  closeModals: () => set({ isLoginOpen: false, isSignUpOpen: false }),
  
  // Simulated Google Login
  loginWithGoogle: () => {
    // In a real app, you'd trigger Firebase or Supabase here
    set({ user: { name: "Guest User", email: "guest@fincognia.ai" }, isLoginOpen: false, isSignUpOpen: false });
  },
  logout: () => set({ user: null }),
}));

export default useAuthStore