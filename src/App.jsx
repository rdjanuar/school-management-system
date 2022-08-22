import React, { useContext } from "react";

import { Router } from "./routes";
import { ThemeContext } from "./context/theme.context";
import { setTheme } from "./utils/helper";

const App = () => {
  const { theme } = useContext(ThemeContext);
  // Save to localstorage
  setTheme(theme);

  return (
    <div className={theme}>
      <div className="flex flex-col  bg-bgColor dark:bg-[#121212] ease-in-out duration-500">
        <Router />
      </div>
    </div>
  );
};

export default App;
