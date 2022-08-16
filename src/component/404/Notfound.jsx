import React from "react";
import { useLocation } from "react-router-dom";

import { Error } from "./Error";
import { isLogin } from "../../utils/helper";

export const PageNotFound = () => {
  const location = useLocation();
  const { pathname } = location;
  const path = pathname.split("/")[1];
  return (
    <Error
      response={404}
      header={` Maaf, kami tidak dapat menemukan  halaman ${
        path[0].toUpperCase() + path.slice(1)
      } `}
      message={`Tapi jangan khawatir, Anda dapat menemukan banyak hal lain di ${
        isLogin() ? "Dashboard" : "Homepage"
      }.`}
      btnMessage={isLogin() ? "Kembali Ke Dashboard" : "Kembali Ke Home Page"}
    />
  );
};
