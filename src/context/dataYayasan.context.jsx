import React, { createContext, useState, useEffect } from "react";

import { useFetchById } from "../hooks/hooks";
import { userData } from "../utils/helper";

export const DataYayasanContext = createContext({
  data: [],
});

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const { fetchData, loading } = useFetchById(
    `${import.meta.env.VITE_API_URL}/yayasan`
  );

  const getDatabyId = async (id) => {
    const getData = await fetchData(id);
    setData(getData.data);
    return Promise.resolve(getData);
  };

  useEffect(() => {
    getDatabyId(userData("sekolah_id"));
  }, []);

  const value = { data, loading };

  return (
    <DataYayasanContext.Provider value={value}>
      {children}
    </DataYayasanContext.Provider>
  );
};
