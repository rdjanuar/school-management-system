import React, { createContext, useState } from "react";
import { userData } from "../utils/helper";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user] = useState(userData("username" || null));

  const value = { user };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
