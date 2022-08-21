import React from "react";

import { Form } from "../../component/form/Form.component";
import { useFetchPost } from "../../hooks/hooks";
import { getToken, userData } from "../../utils/helper";

export const CreateTahunAjaran = () => {
  const { fetchData } = useFetchPost(
    `${import.meta.env.VITE_API_URL}/tahun-ajaran`
  );

  const template = {
    tittle: "Create Tahun Ajaran",
    fields: [
      {
        type: "hidden",
        name: "sekolah_id",
        value: userData("sekolah_id"),
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

  return (
    <Form onSubmit={handlerData} template={template} height={"h-screen"} />
  );
};
