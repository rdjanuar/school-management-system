import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { useFetchPost } from "../../hooks/hooks";
import { Form } from "../../component/form/Form.component";
import { setToken, setUser } from "../../utils/helper";
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
    const fetchPost = await fetchData(data);
    if (fetchPost) {
      setUser(fetchPost.data.user);
      setToken(fetchPost.data.token);
      setCookie("token", fetchPost.data.token, 1);
      return navigate("/dashboard");
    }
  };
  return (
    <>
      <Form onSubmit={handlerData} template={template} />
      <ToastContainer transition={Slide} />
    </>
  );
};
