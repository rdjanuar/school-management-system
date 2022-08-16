import React from "react";
import { useLocation } from "react-router-dom";

import { checkCookie } from "../../utils/helper";
import { Error } from "./Error";

export const Expired = ({ children }) => {
  const location = useLocation();
  const { pathname } = location;
  const path = pathname.split("/")[1];

  return (
    <>
      {checkCookie("token") ? (
        children
      ) : (
        <>
          <Error
            response={401}
            header={`Mohon maaf sesi anda telah berakhir`}
            message={` Untuk mengakses halaman ${
              path[0].toUpperCase() + path.slice(1)
            } silahkan login kembali`}
            btnMessage={"Kembali ke login page"}
          />
          {localStorage.removeItem("token") && localStorage.removeItem("user")}
        </>
      )}
    </>
  );
};
