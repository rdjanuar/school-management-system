import React, { useContext } from "react";
import { Outlet } from "react-router-dom";

import { Toggle } from "../toggle/toggle.component";
import { ThemeContext } from "../../context/theme.context";

export const Header = ({ name }) => {
  const { toggleTheme } = useContext(ThemeContext);

  const handlerTheme = () => {
    toggleTheme();
  };

  return (
    <div className="mx-auto container">
      <div className="flex justify-between m-10 dark:text-white">
        <div>
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            ></path>
          </svg>
        </div>
        <div className="flex space-x-6 items-center">
          <Toggle HandlerClick={handlerTheme} />
          <p>{name}</p>
          <p>Logout</p>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
