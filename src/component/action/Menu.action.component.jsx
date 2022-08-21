import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export const MenuDropDown = ({ onClick, right, top }) => {
  const location = useLocation();
  const { pathname } = location;
  const path = pathname.split("/").filter((x) => x);

  return (
    <div className="relative inline-block text-left">
      <div
        className={`origin-top-right absolute ${right} ${top} mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-slate-800  ring-1 ring-black ring-opacity-5 focus:outline-none `}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex="-1"
      >
        {path[0] === "dashboard" ? (
          <div className="py-1 divide-y divide-gray-300 " role="none">
            <Link
              to={"/settings"}
              className="text-gray-700 dark:text-gray-400 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
            >
              Account settings
            </Link>
            <span
              className="text-gray-700 dark:text-gray-400 block w-full text-left px-4 py-2 text-sm"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-3"
              onClick={onClick}
            >
              Logout
            </span>
          </div>
        ) : (
          <div className="py-1 divide-y divide-gray-300 " role="none">
            <Link
              to={"/dashboard"}
              className="text-gray-700 dark:text-gray-400 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
            >
              Back To Dashboard
            </Link>
            <span
              className="text-gray-700 dark:text-gray-400 block w-full text-left px-4 py-2 text-sm"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-3"
              onClick={onClick}
            >
              Logout
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
