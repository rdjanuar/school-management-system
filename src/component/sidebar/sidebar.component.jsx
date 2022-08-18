import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Sidebar = ({ menus }) => {
  const [sidebar, setSidebar] = useState(false);
  const [id, setId] = useState(0);
  const location = useLocation();
  const { pathname } = location;
  const path = pathname.split("/")[1];

  return (
    <>
      <aside className=" w-64 text-xl" aria-label="Sidebar">
        <div
          className={
            path === "dashboard"
              ? "h-screen py-4 px-3 bg-white dark:bg-SidebarColor"
              : "h-screen py-4 px-3 bg-white dark:bg-SettingSidebarColor"
          }
        >
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
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
            </li>
            {menus.map((menu, index) => (
              <li key={index}>
                <div
                  className="flex items-center"
                  onClick={() => setSidebar(!sidebar) || setId(menu.id)}
                >
                  <span className="py-2 mx-2 font-semibold rounded-lg  text-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                    {menu.name}
                  </span>
                  {sidebar && menu.id === id ? (
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
                {sidebar && menu.id === id && (
                  <ul className="space-y-2">
                    {menu.submenus.map(({ name, link }, index) => (
                      <li key={index}>
                        <Link
                          to={link}
                          // Active Link
                          className={
                            "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:focus:bg-gray-700 dark:hover:bg-gray-700"
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
