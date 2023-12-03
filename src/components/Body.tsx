import Header from "./Header";
import { useEffect, useState } from "react";
import Hotels from "./Hotels";
const Body = () => {
  const [resturantsList, setresturantsList] = useState([]);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999"
    );
    const json = await data.json();
    setresturantsList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(resturantsList);
  return (
    <>
      <Header />
      <div className="body">
        <div className="filter flex">
          <div className="search m-4 p-4">
            <input type="text" className="border border-solid border- red" />
            <button className="px-4 py-2 bg-green-100 m-4 rounded-lg">
              Search
            </button>
          </div>
          <div className="search m-4 p-4 flex items-center">
            <button
              className="px-4 py-2 bg-gray-100 rounded-lg"
              onClick={() => {
                //   const filteredList = listOfRestaurants.filter(
                //     (res) => res.info.avgRating > 4
                //   );
                //   setFilteredRestaurant(filteredList);
              }}
            >
              Top Rated Restaurants
            </button>
          </div>
        </div>
        <div className="flex flex-wrap">
          {resturantsList.map((restaurant: any) => (
            <Hotels resData={restaurant?.info} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Body;
