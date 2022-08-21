import React from "react";

import { Form } from "../../component/form/Form.component";
import { useFetchPost } from "../../hooks/hooks";
import { userData, getToken } from "../../utils/helper";
import { validatorMatapelajaran } from "../../utils/helper";

export const CreateMataPelajaran = () => {
  const { fetchData } = useFetchPost(
    `${import.meta.env.VITE_API_URL}/matapelajaran`
  );

  const template = {
    tittle: "Create Mata Pelajaran",
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
      {
        title: "Tahun Ajaran",
        name: "types",
        type: "hidden",
        options: [
          {
            value: "utama",
            label: "utama",
          },
          {
            value: "mulok",
            label: "mulok",
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

  return (
    <Form
      onSubmit={handlerData}
      template={template}
      validatorSchema={validatorMatapelajaran()}
      formClass={"w-1/2 translate-x-1/2"}
      headerClass={"text-center font-bold"}
    />
  );
};
