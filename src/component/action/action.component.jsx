import React from "react";
import { Link } from "react-router-dom";

import { Breadcrubms } from "../breadcrumbs/breadcrubms.component";
import { Search } from "../search/search.component";
import { Button } from "../buttons/buttons.component";

export const Action = ({ handlerChange }) => {
  return (
    <div className="container mx-auto">
      <div className="mb-10">
        <Breadcrubms />
      </div>
      <div className="flex justify-between  mx-10 items-center ">
        <Search handleChange={handlerChange} />
        <Link to={"/form"}>
          <Button name={"Add Data"} />
        </Link>
      </div>
    </div>
  );
};
