import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { MenuContext } from "../../context/menu.context";

export const Sidebar = ({ menus }) => {
  const [subMenu, setSubMenu] = useState(false);
  const [id, setId] = useState(0);
  const { menu, handleMenu } = useContext(MenuContext);

  const handlerMenu = () => {
    handleMenu();
  };

  return (
    <>
      <aside
        className={` w-52 text-xl  ${menu} fixed z-10  sm:block  font-sidebarFont `}
        aria-label="Sidebar"
      >
        <div className="h-screen scrollbar dark:scrollbar-thumb-zinc-500 scrollbar-thumb-zinc-200   py-4 px-3 bg-white dark:bg-SidebarColor ease-in-out duration-500 scrollbar-medium">
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <a
                href="#"
                className="flex  items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span className="ml-3">Dashboard</span>
              </a>
              <svg
                className="w-6 h-6 sm:hidden block cursor-pointer dark:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                onClick={handlerMenu}
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            {menus.map((menu, index) => (
              <li key={index}>
                <div
                  className="flex items-center"
                  onClick={() => setSubMenu(!subMenu) || setId(menu.id)}
                >
                  <span className="py-2 mx-2 font-semibold rounded-lg  text-base dark:text-darkSidebarColor hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                    {menu.name}
                  </span>
                  {subMenu && menu.id === id ? (
                    <svg
                      className="w-3 h-3 dark:text-white -mx-1 cursor-pointer"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      className="w-3 h-3 dark:text-white -mx-1 cursor-pointer"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  )}
                </div>
                {subMenu && menu.id === id && (
                  <ul className="space-y-2">
                    {menu.submenus.map(({ name, link }, index) => (
                      <li key={index}>
                        <Link
                          to={link}
                          className={
                            "flex items-center p-2 text-sm font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:focus:bg-gray-700 dark:hover:bg-gray-700"
                          }
                        >
                          <p className="ml-2">{name}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};
