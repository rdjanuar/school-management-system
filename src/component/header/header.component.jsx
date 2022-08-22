import React, { useContext, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

import { Toggle } from "../toggle/toggle.component";
import { ThemeContext } from "../../context/theme.context";
import { logout } from "../../utils/helper";
import { MenuDropDown } from "../action/Menu.action.component";
import { MenuContext } from "../../context/menu.context";

export const Header = ({ position }) => {
  const { toggleTheme } = useContext(ThemeContext);
  const { handleMenu } = useContext(MenuContext);
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const path = pathname.split("/")[1];

  const handlerTheme = () => {
    toggleTheme();
  };

  const logoutAction = () => {
    logout(() => {
      navigate("/");
    });
  };

  const handlerMenu = () => {
    handleMenu();
  };

  return (
    <div className={`mx-auto container ${position}  sm:z-10  w-[85%]`}>
      <div className="flex justify-between mx-[2.2rem] my-10 dark:text-white items-center">
        <div>
          {path === "dashboard" ? (
            <>
              <svg
                className="w-11 h-11 hidden sm:block"
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
              <svg
                className="w-10 h-10 block sm:hidden cursor-pointer "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                onClick={handlerMenu}
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </>
          ) : (
            <svg
              className="w-11 h-11 "
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
          )}
        </div>
        <div className="flex space-x-6 items-center ">
          <Toggle HandlerClick={handlerTheme} />
          <button
            id="dropdownUserAvatarButton"
            data-dropdown-toggle="dropdownAvatar"
            className="flex"
            type="button"
            onClick={() => setDropdown(!dropdown)}
          >
            <span className="sr-only">Open user menu</span>
            <svg
              className="w-11 h-12"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
            {dropdown && (
              <MenuDropDown
                right={"right-1"}
                top={"top-10"}
                onClick={logoutAction}
              />
            )}
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
