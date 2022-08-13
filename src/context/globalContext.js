import { useState, useContext, createContext } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [global, setGlobal] = useState({
    token: "a3822d68-447f-4966-a751-23702f395f6e",
    user: null
  });

  return (
    <GlobalContext.Provider value={{ global, setGlobal }}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobal = () => useContext(GlobalContext);
