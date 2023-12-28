import { useEffect, useState } from "react";
import { API } from "./Constant";

const useResturantlist = () => {
  const [resturantsList, setresturantsList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  // fetch the data
  const fetchData = async () => {
    const data = await fetch(API);
    const json = await data.json();
    console.log(json, "real");
    setresturantsList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return resturantsList;
};

export default useResturantlist;
