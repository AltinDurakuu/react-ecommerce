import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isUserLogged, setIsUserLogged] = useState(null);

  return (
    <AppContext.Provider value={{ isUserLogged, setIsUserLogged }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };