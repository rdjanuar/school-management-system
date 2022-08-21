import React from "react";

import { Form } from "../../component/form/Form.component";
import { useFetchPost } from "../../hooks/hooks";
import { getToken } from "../../utils/helper";

export const CreateYayasan = () => {
  const { fetchData } = useFetchPost(`${import.meta.env.VITE_API_URL}/yayasan`);

  const template = {
    tittle: "Create Yayasan",
    fields: [
      {
        title: "Nama Yayasan",
        type: "text",
        name: "nama",
      },
      {
        title: "Alamat",
        type: "text",
        name: "alamat",
      },
      {
        title: "No. Telp",
        type: "text",
        name: "no_telepon",
      },
      {
        title: "Email",
        type: "text",
        name: "email",
      },
      {
        title: "Website",
        type: "text",
        name: "website",
      },
      {
        title: "Logo",
        type: "text",
        name: "logo",
      },
    ],
  };

  const handlerData = async (data) => {
    const fetchPost = await fetchData(data, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    console.log(fetchPost);
  };

  return (
    <Form onSubmit={handlerData} template={template} height={"h-screen"} />
  );
};
