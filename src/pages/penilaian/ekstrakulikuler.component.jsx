import React, { useContext, useMemo, useState } from "react";

import { DataContext } from "../../context/data.context";
import { Breadcrubms } from "../../component/breadcrumbs/breadcrubms.component";
import { Table } from "../../component/table/table.component";

export const NilaiEkstrakulikuler = () => {
  const headers = ["Nama", "nisn", "nis", "Kelas", "Action"];
  const { data } = useContext(DataContext);
  const [pageCount, setPageCount] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [dataOffset, setDataOffset] = useState([]);

  const itemsPerPage = 6;

  const handlerPageChange = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setDataOffset(newOffset);
  };

  useMemo(() => {
    const indexOfLastBook = dataOffset + itemsPerPage;
    setCurrentData(data.slice(dataOffset, indexOfLastBook));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [data, dataOffset, itemsPerPage]);

  return (
    <>
      <Breadcrubms />
      <Table
        headers={headers}
        data={currentData}
        title={"Absensi"}
        onPageChange={handlerPageChange}
        pageCount={pageCount}
        url={"form/yayasan"}
      />
    </>
  );
};
