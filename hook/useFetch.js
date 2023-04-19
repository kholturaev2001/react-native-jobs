import { useState, useEffect } from "react";
import axios from "axios";
import { data } from "../fakeData/fakeData";

const useFetch = (endpoint, query) => {
  const isLoading = false;
  const error = false;
  // const [data, setData] = useState([]);
  //   console.log("🚀 ~ file: useFetch.js:9 ~ useFetch ~ data:", data)
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const options = {
  //   method: "GET",
  //   url: `https://jsearch.p.rapidapi.com/${endpoint}`,
  //   headers: {
  //     "X-RapidAPI-Key": "cb4ede6c23msh629610e0c766335p1bb530jsnefe9d698eba8",
  //     "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  //   },
  //   params: { ...query },
  //   // params: {
  //   //   query: "Python developer in Texas, USA",
  //   //   page: "1",
  //   //   num_pages: "1",
  //   // },
  // };

  // const fetchData = async () => {
  //   setIsLoading(true);

  //   try {
  //     const response = await axios.request(options);

  //     setData(response.data.data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     setError(error);
  //     alert("There is an error");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const refetch = () => {
  //   setIsLoading(true);
  //   fetchData();
  // };

  return { data, isLoading, error, /* refetch */ };
};

export default useFetch;
