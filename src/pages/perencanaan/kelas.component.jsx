import React, { useState, useMemo } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Slide } from "react-toastify";

import { Table } from "../../component/table/table.component";
import { Spinner } from "../../component/spinner/spinner.component";
import { Action } from "../../component/action/action.component";
import { useFetch, useFetchDelete } from "../../hooks/hooks";

export const Kelas = ({ itemsPerPage = 5 }) => {
  const [search, setSearch] = useState("");
  const [pageCount, setPageCount] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [dataOffset, setDataOffset] = useState([]);
  const { data, loading, fetchData } = useFetch(
    `http://127.0.0.1:8080/api/v1/book?name=${search}`
  );
  const { fetchData: fetchDeleteData } = useFetchDelete();
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

  const handleDelete = async (id) => {
    const res = await fetchDeleteData(`http://127.0.0.1:8080/api/v1/book`, id);
    const updateData = await fetchData();
    return Promise.race([res, updateData]);
  };

  // create new array data
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
              onDelete={handleDelete}
              title={"Kelas"}
            />
          </div>
        </>
      )}
      <ToastContainer transition={Slide} />
    </>
  );
};
