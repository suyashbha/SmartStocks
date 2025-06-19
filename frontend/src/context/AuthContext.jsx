import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE;

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Save token and extract user info
  const saveUserFromToken = (token) => {
    localStorage.setItem('token', token);
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      setUser({ username: payload.sub, name: payload.name });
    } catch {
      logout();
    }
  };

  // Regular login
  const login = async ({ username, password }) => {
    const res = await axios.post(`${API_BASE}/login`, { username, password });
    saveUserFromToken(res.data.access_token);
  };

  // Register new user
  const register = async ({ username, password, name }) => {
    const res = await axios.post(`${API_BASE}/register`, { username, password, name });
    saveUserFromToken(res.data.access_token);
  };

const googleLogin = async (tokenId) => {
  const res = await axios.post(`${API_BASE}/google-login`, { token: tokenId });
  saveUserFromToken(res.data.access_token);
};



  // Logout
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  // Auto-login if token exists
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        setUser({ username: payload.sub, name: payload.name });
      } catch {
        logout();
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, register, googleLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
