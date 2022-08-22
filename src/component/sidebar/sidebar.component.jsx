import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { TbChevronRight, TbChevronDown } from "react-icons/tb";
import { MdDashboard } from "react-icons/md";
import { GrPlan } from "react-icons/gr";
import { TbReport, TbDatabase } from "react-icons/tb";
import { BiAccessibility } from "react-icons/bi";

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
        className={` w-48 text-xl  ${menu} fixed z-10  sm:block   font-secondSidebarFont `}
        aria-label="Sidebar"
      >
        <div className="h-screen scrollbar  dark:scrollbar-thumb-zinc-500 scrollbar-thumb-zinc-200    py-4 px-3 bg-white dark:bg-SidebarColor ease-in-out duration-500 scrollbar-medium">
          <ul className="space-y-3 ">
            <li className="flex justify-between items-center ">
              <a
                href="#"
                className="flex  items-center p-2 text-lg font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <MdDashboard />
                <span className="ml-3 font-bold ">Dashboard</span>
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
                  className="flex items-center mx-2"
                  onClick={() => setSubMenu(!subMenu) || setId(menu.id)}
                >
                  {menu.name === "Perencanaan" && (
                    <GrPlan className="dark:text-white w-4 h-3" />
                  )}
                  {menu.name === "Laporan" && (
                    <TbReport className="dark:text-white w-4 h-4" />
                  )}
                  {menu.name === "Master Data" && (
                    <TbDatabase className="dark:text-white w-4 h-4" />
                  )}
                  {menu.name === "Penilaian" && (
                    <BiAccessibility className="dark:text-white w-4 h-4" />
                  )}
                  <p className="py-2 mx-2.5 font-semibold rounded-lg  text-sm dark:text-darkSidebarColor hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer tracking-wider">
                    {menu.name}
                  </p>
                  {subMenu && menu.id === id ? (
                    <TbChevronDown className="dark:text-gray-400 w-4 h-3  -mx-3" />
                  ) : (
                    <TbChevronRight className="dark:text-gray-400 w-4 h-3 -mx-3" />
                  )}
                </div>

                {subMenu && menu.id === id && (
                  <ul className="space-y-2">
                    {menu.submenus.map(({ name, link }, index) => (
                      <li key={index}>
                        <Link
                          to={link}
                          className={
                            "flex items-center p-2 text-xs font-normal text-gray-900 rounded-lg focus:bg-gray-200  hover:bg-gray-100 dark:focus:bg-gray-700 dark:hover:bg-gray-700"
                          }
                        >
                          <span className="ml-3 dark:text-subMenuColor hover:dark:text-white  hover:ease-in-out hover:duration-500 hover:translate-x-2">
                            {name}
                          </span>
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
