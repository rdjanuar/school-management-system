import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext({
  data: [],
});

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
      const mapData = res.data.map(({ userId, id, title, body }) => ({
        userId,
        id,
        title,
        body,
      }));
      setData(mapData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const value = { data };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
