import React, { createContext, useState } from "react";
import DATA from "../data/dummy.json";

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [data] = useState(DATA);
  const value = { data };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
