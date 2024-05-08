import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = ({ url }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const accessToken = localStorage.getItem("accessToken");

  const fetch = () => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch(() => {
        setData(null);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { data, error, loading, setData, refetchData: fetch };
};

export default useFetch;
