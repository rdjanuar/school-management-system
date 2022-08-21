import React, { createContext, useState } from "react";

export const MenuContext = createContext({
  menu: "hidden",
  handleMenu: () => {},
});

export const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState("hidden");

  const handleMenu = () => {
    setMenu((prevMenu) => (prevMenu === "hidden" ? "block" : "hidden"));
  };

  const value = { menu, handleMenu };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};
