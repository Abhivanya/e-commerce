import React, { useState } from "react";
const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const storedToken = localStorage.getItem("token");
  const [token, setToken] = useState(storedToken);
  const isLoggedIn = !!token;

  const handleLogin = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };
  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const contextValue = {
    token: token,
    isLoggedIn: isLoggedIn,
    login: handleLogin,
    logout: handleLogout,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
