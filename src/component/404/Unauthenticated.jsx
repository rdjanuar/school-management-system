import React from "react";
import { useLocation } from "react-router-dom";

import { isLogin } from "../../utils/helper";
import { checkCookie } from "../../utils/helper";
import { Error } from "./Error";

export const Authenticated = ({ children }) => {
  const location = useLocation();
  const { pathname } = location;
  const path = pathname.split("/")[1];

  return (
    <>
      {isLogin() ? (
        children
      ) : (
        <Error
          response={401}
          header={
            checkCookie("token")
              ? `Mohon maaf sesi anda telah berakhir`
              : `Mohon maaf anda belum login`
          }
          message={` Untuk mengakses halaman ${
            path[0].toUpperCase() + path.slice(1)
          } silahkan login terlebih dahulu`}
          btnMessage={"Kembali ke Login Page"}
        />
      )}
    </>
  );
};
