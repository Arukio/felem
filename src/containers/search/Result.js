/*eslint-disable */
import React, { Fragment, useState, useEffect } from "react";

const useFetchData = search => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const base = "https://api.themoviedb.org/3";
  const key = "88ef16f0da1b0867a47e0845eb3f74c9";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${base}/search/movie/?api_key=${key}&query=${search}`
        );
        const json = await res.json();
        setResponse(json);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  return { response, error };
};

const Result = ({ search }) => {
  const { response } = useFetchData("");

  if (!response) {
    return <h1>Loading..</h1>;
  }

  console.log(response);

  return <Fragment />;
};

export default Result;
