import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useFetchPost } from "../../hooks/hooks";
import { Form } from "../../component/form/Form.component";
import { setToken, setUser, setCookie } from "../../utils/helper";
import { validatorAuthSchema } from "../../utils/helper";
import { SubmitContext } from "../../context/submit.context";

export const Login = () => {
  const { fetchData } = useFetchPost(
    `${import.meta.env.VITE_API_URL}/auths/login`
  );
  const navigate = useNavigate();

  const { handleSubmited } = useContext(SubmitContext);

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
    <div className="bg-cyan-500 h-screen">
      <Form
        onSubmit={handlerData}
        template={template}
        validatorSchema={validatorAuthSchema()}
        labelClass={
          "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        }
        inputClass={
          "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        }
      />
      <ToastContainer transition={Slide} />
    </div>
  );
};
