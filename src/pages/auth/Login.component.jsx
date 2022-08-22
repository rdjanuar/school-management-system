import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useFetchPost } from "../../hooks/hooks";
import { Form } from "../../component/form/Form.component";
import { setToken, setUser, setCookie } from "../../utils/helper";
import { validatorAuthSchema } from "../../utils/helper";

export const Login = () => {
  const { fetchData } = useFetchPost(
    `${import.meta.env.VITE_API_URL}/auths/login`
  );
  const navigate = useNavigate();

  const template = {
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
  };

  const handlerData = async (data) => {
    const fetchPost = await fetchData(data);

    return new Promise((resolve, reject) => {
      if (fetchPost.status === 200) {
        setUser(fetchPost.data.data.user);
        setToken(fetchPost.data.data.token);
        setCookie("token", fetchPost.data.data.token, 1);
        navigate("/dashboard");
        return resolve(fetchPost);
      } else {
        return reject(fetchPost);
      }
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white ">
      <Form
        onSubmit={handlerData}
        template={template}
        validatorSchema={validatorAuthSchema()}
        headerClass={"text-2xl font-bold text-center mb-2"}
        formClass={"bg-white flex flex-col p-20 shadow-xl rounded-lg"}
        mt={4}
        colorScheme={"teal"}
      />
      <ToastContainer transition={Slide} />
    </div>
  );
};
