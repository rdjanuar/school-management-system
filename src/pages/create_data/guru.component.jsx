import React from "react";
import { useNavigate } from "react-router-dom";

import { Form } from "../../component/form/Form.component";
import { useFetchPost } from "../../hooks/hooks";
import { getToken, userData } from "../../utils/helper";
import { validatorGuru } from "../../utils/helper";

export const CreateGuru = () => {
  const { fetchData } = useFetchPost(`${import.meta.env.VITE_API_URL}/guru`);
  const navigate = useNavigate();

  const template = {
    tittle: "Guru",
    fields: [
      {
        type: "hidden",
        name: "sekolah_id",
        value: userData("sekolah_id"),
        readOnly: true,
        disabled: true,
      },
      {
        title: "nik",
        type: "text",
        name: "nik",
        readOnly: false,
        disabled: false,
      },
      {
        title: "Nama",
        type: "text",
        name: "nama",
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
        type: "text",
        name: "email",
        readOnly: false,
        disabled: false,
      },
      {
        title: "alamat",
        type: "text",
        name: "alamat",
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
    navigate("/dashboard/data/guru");
    return Promise.resolve(fetchPost);
  };

  return (
    <Form
      onSubmit={handlerData}
      template={template}
      validatorSchema={validatorGuru()}
    />
  );
};
