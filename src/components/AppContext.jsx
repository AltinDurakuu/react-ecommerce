import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || []);

  // const isTokenValid = (serverToken) => {
  //   return token === serverToken;
  // };

  const handleLogout = () => {
    setIsUserLogged(false);
    setToken("");
    localStorage.removeItem("token");
  };

  const handleLoginToken = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("token", serverToken);
  };

  return (
    <AppContext.Provider
      value={{
        isUserLogged,
        setIsUserLogged,
        token,
        handleLogout,
        handleLoginToken,
        cartItems,
        setCartItems
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };