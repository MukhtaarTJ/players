import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(response);

      setData(response.data);
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return <div></div>;
};

export default FetchData;
