import React, { useState, useEffect, useMemo, memo } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast, Slide } from "react-toastify";

import { Table } from "../../component/table/table.component";
import { Spinner } from "../../component/spinner/spinner.component";
import { Action } from "../../component/action/action.component";
import { useFetch } from "../../hooks/hooks";

export const Kelas = ({ itemsPerPage = 5 }) => {
  const [search, setSearch] = useState("");
  const { data, loading, fetchData } = useFetch(
    `http://127.0.0.1:8080/api/v1/book?name=${search}`
  );
  const [pageCount, setPageCount] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [dataOffset, setDataOffset] = useState([]);
  const headers = [
    "id",
    "name",
    "year",
    "Author",
    "Summary",
    "publisher",
    "PageCount",
    "ReadCount",
    "Action",
  ];

  // Get data
  const mapData = useMemo(
    () =>
      data.map(
        ({
          id,
          name,
          year,
          author,
          summary,
          publisher,
          pageCount,
          readCount,
        }) => ({
          id,
          name,
          year,
          author,
          summary,
          publisher,
          pageCount,
          readCount,
        })
      ),
    [data]
  );

  // Delete data by id
  const onDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8080/api/v1/book/${id}`, {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYxLCJpYXQiOjE2NjA0MDUzODgsImV4cCI6MTY2MDQwODk4OH0.n7Y7UiQ87lyajN1OA1vksVw3gifng-FMlH_n10xMD_I",
        },
      });
      toast.success(`Data Berhasil Dihapus!`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "dark:bg-black dark:text-white",
      });
      return fetchData();
    } catch (error) {
      switch (error.message) {
        case "Network Error":
          toast.error("Mohon Cek Koneksi Internet", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            className: "dark:bg-black dark:text-white",
          });
          break;
        default:
          toast.error("Terjadi Kesalahan", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            className: "dark:bg-black dark:text-white",
          });
          break;
      }
    }
  };

  // pagination

  useMemo(() => {
    const indexOfLastBook = dataOffset + itemsPerPage;
    setCurrentData(mapData.slice(dataOffset, indexOfLastBook));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [mapData, dataOffset, itemsPerPage]);

  const handlerPageChange = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setDataOffset(newOffset);
  };

  return (
    <>
      <Action handlerChange={(e) => setSearch(e.target.value)} />
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="flex flex-col">
            <Table
              headers={headers}
              data={currentData}
              onPageChange={handlerPageChange}
              pageCount={pageCount}
              onDelete={onDelete}
              title={"Example"}
            />
          </div>
        </>
      )}
      <ToastContainer transition={Slide} />
    </>
  );
};
