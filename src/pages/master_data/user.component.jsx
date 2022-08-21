import React, { useState, useMemo, useEffect } from "react";
import { ToastContainer, Slide } from "react-toastify";

import { Breadcrubms } from "../../component/breadcrumbs/breadcrubms.component";
import { Table } from "../../component/table/table.component";
import { Action } from "../../component/action/action.component";
import { useFetchById } from "../../hooks/hooks";
import { userData } from "../../utils/helper";
import { Spinner } from "../../component/spinner/spinner.component";

export const User = () => {
  const headers = ["username", "no Telp", "email", "Action"];
  const [pageCount, setPageCount] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [dataOffset, setDataOffset] = useState([]);
  const { data, loading, fetchData } = useFetchById(
    `${import.meta.env.VITE_API_URL}/users`
  );

  const itemsPerPage = 5;

  const handlerPageChange = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setDataOffset(newOffset);
  };

  const getDatabyId = async (id) => {
    const res = await fetchData(id);
    return Promise.resolve(res);
  };

  useEffect(() => {
    getDatabyId(userData("sekolah_id"));
  }, []);

  const mapData = useMemo(
    () =>
      data.map(({ username, no_telepon, email, alamat }) => ({
        username,
        no_telepon,
        email,
      })),
    [data]
  );

  useMemo(() => {
    const indexOfLastBook = dataOffset + itemsPerPage;
    setCurrentData(mapData.slice(dataOffset, indexOfLastBook));
    setPageCount(Math.ceil(mapData.length / itemsPerPage));
  }, [mapData, dataOffset, itemsPerPage]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col">
          <Breadcrubms />
          <Action
            handlerChange={(e) => setSearch(e.target.value)}
            link={"/form/user"}
          />

          <Table
            headers={headers}
            data={currentData}
            onPageChange={handlerPageChange}
            pageCount={pageCount}
            title={"Guru"}
          />
        </div>
      )}
      <ToastContainer transition={Slide} />
    </>
  );
};
