import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    isLoading: true,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    const data = localStorage.getItem("data");
    if (token) {
      setAuth({
        user: JSON.parse(data),
        isLoading: false,
      });
    } else {
      setAuth({
        user: null,
        isLoading: false,
      });
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("menu");
    localStorage.removeItem("data");
    setAuth({
      user: null,
      isLoading: false,
    });
  };

  const login = (user) => {
    setAuth({
      user,
      isLoading: false,
    });
  };

  return (
    <AuthContext.Provider value={{ login, logout, auth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
