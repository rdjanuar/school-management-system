import React from "react";
import { useLocation } from "react-router-dom";
import { Error } from "./Error";

export const PageNotFound = () => {
  const location = useLocation();
  const { pathname } = location;
  const path = pathname.split("/")[1];
  return (
    <Error
      response={404}
      header={` Sorry, we couldn't find ${
        path[0].toUpperCase() + path.slice(1)
      } page`}
      message={
        "But dont worry, you can find plenty of other things on our homepage."
      }
      btnMessage={"Back to Home Page"}
    />
  );
};
