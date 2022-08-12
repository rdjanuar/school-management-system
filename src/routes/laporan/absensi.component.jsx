import React, { useContext } from "react";

import { Breadcrubms } from "../../component/breadcrumbs/breadcrubms.component";
import { Table } from "../../component/table/table.component";
import { DataContext } from "../../context/data.context";

export const Absensi = () => {
  const headers = ["Nama", "Tanggal", "Jam Masuk", "Jam Keluar", "Action"];
  const { data } = useContext(DataContext);
  return (
    <>
      <Breadcrubms />
      <Table headers={headers} data={data} title={"Absensi"} />
    </>
  );
};
