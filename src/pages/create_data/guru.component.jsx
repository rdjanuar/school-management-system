import React from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

import { Breadcrubms } from "../../component/breadcrumbs/breadcrubms.component";
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
        title: "Nik",
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
        title: "No Telp",
        type: "text",
        name: "no_telepon",
        readOnly: false,
        disabled: false,
      },
      {
        title: "Email",
        type: "text",
        name: "email",
        readOnly: false,
        disabled: false,
      },
      {
        title: "Alamat",
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
    <>
      <div className="flex justify-between">
        <Breadcrubms />
        <IoArrowBack
          className="mx-10 w-6 h-6 cursor-pointer dark:text-white"
          onClick={() => window.history.back()}
        />
      </div>
      <div className="mx-10">
        <Form
          headerClass={"text-center text-xl font-bold"}
          onSubmit={handlerData}
          template={template}
          validatorSchema={validatorGuru()}
          formClass={"space-y-2"}
        />
      </div>
    </>
  );
};
