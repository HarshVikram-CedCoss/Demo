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
    setresturantsList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return resturantsList;
};

export default useResturantlist;
