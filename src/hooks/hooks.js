import { useState, useEffect } from "react";
import axios from "axios";
import { errorMessage } from "../error/error";
import { toast } from "react-toastify";

/**
 *
 * @param {url} url pass url to fetch data
 * @returns
 */

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYxLCJpYXQiOjE2NjA0NTkxMjMsImV4cCI6MTY2MDQ2MjcyM30.AU82s2t0rsrWnIGQW82CbpQA9-UiZfHrmijTiAsbrzc",
        },
      });
      setData(response.data.result.books);
      setLoading(false);
      return response.data;
    } catch (error) {
      setError(true);
      errorMessage(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error, fetchData };
};

/**
 *
 * @param {*} url pass url to fetch data
 * @param {*} data  pass data to post
 * @returns
 */

export const useFetchPost = (url, data) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      await axios.post(url, data, {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYxLCJpYXQiOjE2NjA0NTkxMjMsImV4cCI6MTY2MDQ2MjcyM30.AU82s2t0rsrWnIGQW82CbpQA9-UiZfHrmijTiAsbrzc",
        },
      });
      setLoading(false);
    } catch (error) {
      setError(true);
      errorMessage(error);
    }
  };

  return { loading, error, fetchData };
};

/**
 *
 * @param {*} url pass url to fetch data
 * @param {id} id pass id data
 * @returns
 */

export const useFetchDelete = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async (url, id) => {
    try {
      await axios.delete(`${url}/${id}`, {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYxLCJpYXQiOjE2NjA0NTkxMjMsImV4cCI6MTY2MDQ2MjcyM30.AU82s2t0rsrWnIGQW82CbpQA9-UiZfHrmijTiAsbrzc",
        },
      });
      setLoading(false);
      toast.success("Data Berhasil Dihapus", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "dark:bg-black dark:text-white",
      });
    } catch (error) {
      errorMessage(error);
      setError(true);
    }
  };

  return { loading, error, fetchData };
};

/**
 *
 * @param {*} url pass url to fetch data
 * @param {*} data  pass data to put
 * @returns
 */

export const useFetchUpdate = (url, data) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      await axios.put(url, data, {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYzLCJpYXQiOjE2NjA0MDE2OTAsImV4cCI6MTY2MDQwNTI5MH0.HVZzye-TYtM3_SsFEMNnHfwBVFrK-94ooSEMne0jHbo",
        },
      });
      setLoading(false);
    } catch (error) {
      errorMessage(error);
      setError(true);
    }
  };

  return { loading, error, fetchData };
};
