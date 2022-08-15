import React from "react";
import { Form } from "../../component/form/Form.component";
export const Login = () => {
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
  const handlerData = (data) => {
    console.log(data);
  };
  return <Form onSubmit={handlerData} template={template} />;
};
