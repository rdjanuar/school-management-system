import React, { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { useFetchPost } from "../../hooks/hooks";
import { Form } from "../../component/form/Form.component";
import { setToken, setUser, userData } from "../../utils/helper";
import { ToastContainer, Slide } from "react-toastify";
import { setCookie } from "../../utils/helper";

export const Login = () => {
  const { fetchData } = useFetchPost(
    `${import.meta.env.VITE_API_URL}/auths/login`
  );
  const navigate = useNavigate();

  const template = useMemo(
    () => ({
      tittle: "Login",
      fields: [
        {
          title: "Username",
          type: "text",
          name: "username",
        },
        {
          title: "Password",
          type: "password",
          name: "password",
        },
      ],
    }),
    []
  );
  const handlerData = async (data) => {
    const roles = ["administrator", "guru"];
    const fetchPost = await fetchData(data);

    if (fetchPost) {
      setUser(fetchPost.data.user);
      setToken(fetchPost.data.token);
      setCookie("token", fetchPost.data.token, 1);

      const user = userData("roles");
      return user.map((p) => p.nama).filter((p) => roles.includes(p)).length
        ? navigate("/dashboard")
        : navigate("/yayasan");
    }
  };
  return (
    <>
      <Form onSubmit={handlerData} template={template} />
      <ToastContainer transition={Slide} />
    </>
  );
};
