import React, { createContext, useState } from "react";

// Crée un contexte
export const UserContext = createContext();

// Fournisseur du contexte
export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState("Valeur initiale");

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
};
