import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast, Slide } from "react-toastify";

import { Breadcrubms } from "../../component/breadcrumbs/breadcrubms.component";
import { Table } from "../../component/table/table.component";

export const Kelas = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [pageCount, setPageCount] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [dataOffset, setDataOffset] = useState([]);

  const headers = ["Id", "title", "brand", "price", "Action"];

  // Get data
  const getData = async () => {
    const res = await axios.get(
      `https://dummyjson.com/products/search?q=${search}`
    );
    const mapData = res.data.products.map(({ id, title, brand, price }) => ({
      id,
      title,
      brand,
      price,
    }));
    setData(mapData);
  };

  // Delete data by id
  const onDelete = async (id) => {
    try {
      const res = await axios.delete(`https://dummyjson.com/products/${id}`);

      getData();
      toast.success(`Data Berhasil Dihapus!`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return res.data;
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
          });
          break;
      }
    }
  };

  // pagination
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

  useEffect(() => {
    getData();
  }, [search]);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col w-full">
        <Breadcrubms />
        <Table
          headers={headers}
          data={currentData}
          handlerchange={(e) => setSearch(e.target.value)}
          onPageChange={handlerPageChange}
          pageCount={pageCount}
          onDelete={onDelete}
          title={"Kelas"}
        />
      </div>
      <ToastContainer transition={Slide} />
    </div>
  );
};
