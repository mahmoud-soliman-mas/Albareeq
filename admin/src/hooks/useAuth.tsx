'use client';

import { createContext, useContext, useEffect, useState } from 'react';

interface AuthContextValue {
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

// غيّر القيم هنا إلى البريد وكلمة المرور الخاصة بك
const ADMIN_CREDENTIALS = {
  // Updated to match README default credentials
  email: 'admin@albariq.com',
  password: 'Admin#2025',
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('albariq_admin_token') : null;
    setIsAuthenticated(Boolean(stored));
  }, []);

  const signIn = async (email: string, password: string) => {
    await new Promise((resolve) => setTimeout(resolve, 450));

    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
      localStorage.setItem('albariq_admin_token', 'authenticated');
      setIsAuthenticated(true);
      return;
    }

    throw new Error('Invalid credentials');
  };

  const signOut = () => {
    localStorage.removeItem('albariq_admin_token');
    setIsAuthenticated(false);
  };

  return <AuthContext.Provider value={{ isAuthenticated, signIn, signOut }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
