import { useState, useEffect } from "react";
import axios from "axios";
import { errorMessage } from "../error/error";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYxLCJpYXQiOjE2NjA0MDUzODgsImV4cCI6MTY2MDQwODk4OH0.n7Y7UiQ87lyajN1OA1vksVw3gifng-FMlH_n10xMD_I",
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
  }, []);

  return { data, loading, error, fetchData };
};

export const useFetchPost = (url, data) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      await axios.post(url, data, {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYzLCJpYXQiOjE2NjA0MDE2OTAsImV4cCI6MTY2MDQwNTI5MH0.HVZzye-TYtM3_SsFEMNnHfwBVFrK-94ooSEMne0jHbo",
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

export const useFetchDelete = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      await axios.delete(url, {
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
