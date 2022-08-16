import { useState, useEffect } from "react";
import axios from "axios";
import { errorMessage, errorMessageAuth } from "../error/error";
import { toast } from "react-toastify";
import { getToken } from "../utils/helper";

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
          Authorization: `Bearer ${getToken()}`,
        },
      });
      setData(response.data.result.books);
      setLoading(false);
      return response.data;
    } catch (error) {
      setError(true);
      errorMessage(error);
    }

    useEffect(() => {
      fetchData();
    }, [url]);
  };

  return { data, loading, error, fetchData };
};

/**
 *
 * @param {*} url pass url to fetch data
 * @param {*} data  pass data to post
 * @returns
 */

export const useFetchPost = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async (data, ...rest) => {
    try {
      const response = await axios.post(url, data, ...rest);
      setLoading(false);
      return response.data;
    } catch (error) {
      setError(true);
      errorMessage(error);
      errorMessageAuth(error);
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

export const useFetchDelete = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async (id) => {
    try {
      await axios.delete(`${url}/${id}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
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
          Authorization: `Bearer ${getToken()}`,
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

export const useFetchById = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async (id) => {
    try {
      const response = await axios.get(`${url}/${id}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      setData(response.data);
      setLoading(false);
      return response.data;
    } catch (error) {
      setError(true);
      errorMessage(error);
    }
  };

  return { data, loading, error, fetchData };
};
