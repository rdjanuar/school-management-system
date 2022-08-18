import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";

import { useFetchPost } from "../../hooks/hooks";
import { Form } from "../../component/form/Form.component";
import {
  setToken,
  setUser,
  setCookie,
  determineRoles,
} from "../../utils/helper";

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
    const fetchPost = await fetchData(data);

    if (fetchPost.status === 200) {
      setUser(fetchPost.data.data.user);
      setToken(fetchPost.data.data.token);
      setCookie("token", fetchPost.data.data.token, 1);
      return navigate("/dashboard");
    }
  };
  return (
    <>
      <Form onSubmit={handlerData} template={template} height={"h-screen"} />
      <ToastContainer transition={Slide} />
    </>
  );
};
