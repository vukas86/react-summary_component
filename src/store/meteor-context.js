import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";

const MeteorContext = createContext();

export function useMeteorDataContext() {
  return useContext(MeteorContext);
}

export function DataProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://data.nasa.gov/resource/gh4g-9sfh.json"
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        console.error("Error fetching data", err);
      }
    }

    fetchData();
  }, []);

  return (
    <MeteorContext.Provider value={data}>{children}</MeteorContext.Provider>
  );
}

export default MeteorContext;
