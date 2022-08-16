import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { useFetchPost } from "../../hooks/hooks";
import { Form } from "../../component/form/Form.component";
import { setToken, setUser } from "../../utils/helper";
import { ToastContainer, Slide } from "react-toastify";

export const Login = () => {
  const { fetchData } = useFetchPost();
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
    try {
      const fetchPost = await fetchData(
        "http://18.133.255.126/auths/login",
        data
      );
      console.log(fetchPost.data.user);
      setUser(fetchPost.data.findUser);
      setToken(fetchPost.data.token);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <Form onSubmit={handlerData} template={template} />
      <ToastContainer transition={Slide} />
    </>
  );
};
