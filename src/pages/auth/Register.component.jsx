import React, { useMemo } from "react";
import { Form } from "../../component/form/Form.component";
export const Register = () => {
  const template = useMemo(
    () => ({
      tittle: "Register",
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
        {
          title: "Confirm Password",
          type: "password",
          name: "confirmPassword",
        },
      ],
    }),
    []
  );
  const handlerData = (data) => {
    console.log(data);
  };
  return <Form onSubmit={handlerData} template={template} />;
};
