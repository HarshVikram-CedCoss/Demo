/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { API } from "./Constant";

const useResturant = (id: any) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  // calling the menu API
  const fetchData = async () => {
    const data = await fetch(API + id);
    const json = await data.json();
    setData(json.data);
  };

  return data;
};
export default useResturant;
