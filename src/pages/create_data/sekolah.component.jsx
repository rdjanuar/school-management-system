import React from "react";
import { useNavigate } from "react-router-dom";

import { Form } from "../../component/form/Form.component";
import { useFetchPost } from "../../hooks/hooks";
import { getToken, userData } from "../../utils/helper";

export const CreateSekolah = () => {
  const { fetchData } = useFetchPost(`${import.meta.env.VITE_API_URL}/sekolah`);
  const navigate = useNavigate();

  const template = {
    tittle: "Sekolah",
    fields: [
      {
        type: "hidden",
        name: "yayasan_id",
        value: userData("yayasan_id") || 0,
        readOnly: true,
        disabled: true,
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
      {
        title: "website",
        type: "text",
        name: "website",
        readOnly: false,
        disabled: false,
      },
      {
        title: "logo",
        type: "text",
        name: "logo",
        readOnly: false,
        disabled: false,
      },
      {
        title: "Jenjang",
        name: "jenjang",
        type: "hidden",
        options: [
          {
            value: "TK",
            label: "TK",
          },
          {
            value: "SD",
            label: "SD",
          },
          {
            value: "SMP",
            label: "SMP",
          },
          {
            value: "SMA",
            label: "SMA",
          },
          {
            value: "SMK",
            label: "SMK",
          },
        ],
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
