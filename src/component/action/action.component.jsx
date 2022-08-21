import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Search } from "../search/search.component";
import { Button } from "../buttons/buttons.component";
import { MenuDropDown } from "./Menu.action.component";

export const Action = ({ handlerChange, link }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="container mx-auto">
        <div className="mx-10  items-center  sm:flex sm:justify-between ">
          <Search handleChange={handlerChange} />
          <Link to={link}>
            <Button name={"Add Data"} />
          </Link>
        </div>
      </div>
      <div className="block relative translate-x-1/2 cursor-pointer sm:hidden">
        <button
          id="dropdownUserAvatarButton"
          data-dropdown-toggle="dropdownAvatar"
          className="flex"
          type="button"
          onClick={() => setShow(!show)}
        >
          <span className="sr-only">Open user menu</span>
          {show && <MenuDropDown right={"-right-24 top-5"} />}
        </button>
      </div>
    </>
  );
};
