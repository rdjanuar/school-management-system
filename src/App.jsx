import React, { useContext } from "react";

import { Router } from "./routes";
import { ThemeContext } from "./context/theme.context";
import { setTheme } from "./utils/helper";

const App = () => {
  const { theme } = useContext(ThemeContext);
  // Set to localstorage
  setTheme(theme);

  return (
    <div className={theme}>
      <div className="flex flex-col dark:bg-gray-800">
        <Router />
      </div>
    </div>
  );
};

export default App;
