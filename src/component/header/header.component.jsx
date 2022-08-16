import React, { useContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import images from "../../assets/avatar.png";

import { Toggle } from "../toggle/toggle.component";
import { ThemeContext } from "../../context/theme.context";
import { logout } from "../../utils/helper";
import { MenuDropDown } from "../action/Menu.action.component";

export const Header = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();

  const handlerTheme = () => {
    toggleTheme();
  };

  const logoutAction = () => {
    logout(() => {
      navigate("/");
    });
  };

  return (
    <div className="mx-auto container">
      <div className="flex justify-between m-10 dark:text-white items-center">
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
        <div className="flex space-x-6 items-center ">
          <Toggle HandlerClick={handlerTheme} />
          <button
            id="dropdownUserAvatarButton"
            data-dropdown-toggle="dropdownAvatar"
            class="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            type="button"
            onClick={() => setDropdown(!dropdown)}
          >
            <span class="sr-only">Open user menu</span>
            <img class="w-10 h-10 rounded-full" src={images} alt="user photo" />
            {dropdown && <MenuDropDown onClick={logoutAction} />}
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
