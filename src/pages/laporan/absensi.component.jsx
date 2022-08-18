import React, { useContext, useState, useMemo } from "react";

import { Breadcrubms } from "../../component/breadcrumbs/breadcrubms.component";
import { Table } from "../../component/table/table.component";
import { DataContext } from "../../context/data.context";
import { Action } from "../../component/action/action.component";

export const Absensi = () => {
  const headers = ["Nama", "nisn", "nis", "Kelas", "Action"];
  const { data } = useContext(DataContext);
  const [pageCount, setPageCount] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [dataOffset, setDataOffset] = useState([]);

  const itemsPerPage = 5;

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
      <div className="flex flex-col">
        <Breadcrubms />
        <Action handlerChange={(e) => setSearch(e.target.value)} />

        <Table
          headers={headers}
          data={currentData}
          title={"Absensi"}
          onPageChange={handlerPageChange}
          pageCount={pageCount}
        />
      </div>
    </>
  );
};
