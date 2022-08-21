import React from "react";
import { useNavigate } from "react-router-dom";

import { Form } from "../../component/form/Form.component";
import { useFetchPost } from "../../hooks/hooks";
import { getToken, userData } from "../../utils/helper";

export const CreateUser = () => {
  const { fetchData } = useFetchPost(`${import.meta.env.VITE_API_URL}/users`);
  const navigate = useNavigate();

  const template = {
    tittle: "User",
    fields: [
      {
        type: "hidden",
        name: "sekolah_id",
        value: userData("sekolah_id"),
        readOnly: true,
        disabled: true,
      },
      {
        title: "username",
        type: "text",
        name: "username",
        readOnly: false,
        disabled: false,
      },
      {
        title: "no_telepon",
        type: "text",
        name: "no_telepon",
        readOnly: false,
        disabled: false,
      },
      {
        title: "email",
        type: "email",
        name: "email",
        readOnly: false,
        disabled: false,
      },
      {
        title: "password",
        type: "password",
        name: "password",
        readOnly: false,
        disabled: false,
      },
    ],
  };

  const handlerData = async (data) => {
    const fetchPost = await fetchData(data, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return Promise.resolve(fetchPost);
  };

  return <Form onSubmit={handlerData} template={template} />;
};
