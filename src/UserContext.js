import React, { createContext, useState } from "react";

// @ts-ignore
export const UserContext = createContext();

// This context provider is passed to any component requiring the context
export const UserProvider = ({ children }) => {
  const [name, setName] = useState("William");
  const [location, setLocation] = useState("Mars");

  return (
    <UserContext.Provider
      value={{
        name,
        location,
        setName,
        setLocation
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
