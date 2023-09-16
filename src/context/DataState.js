import React, { useState, useEffect } from "react";
import { datacontext } from "./datacontext";


const DataState = ({ children }) => {
  
  const [data, setdata] = useState([]);
  const url = "https://api.coinlore.net/api/tickers/?start=0&limit=4";

  const getData = async () => {
    const fetchData = await fetch(url);
    const response = await fetchData.json();
    setdata(response.data);
  };
  

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <datacontext.Provider value={{ data }}>{children}</datacontext.Provider>
  );
};

export default DataState;
