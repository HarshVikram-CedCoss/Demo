import Header from "./Header";
import { useEffect, useState } from "react";
import Hotels from "./Hotels";
import Skeleton from "./Skeleton";
import { Link } from "react-router-dom";
const Body = () => {
  const [resturantsList, setresturantsList] = useState([]);
  const [filterResturants, setFilterResturants] = useState([]);
  const [searchtext, setSearchtext] = useState("");
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999"
    );
    const json = await data.json();
    setresturantsList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterResturants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  useEffect(() => {
    fetchData();
  }, []);
  // handle click event

  const handleClick = () => {
    if (searchtext === "") {
      alert("please enter hotel name");
      return;
    }
    const main_Data = resturantsList.filter((data: any) =>
      data.info.name.toLowerCase().includes(searchtext.toLowerCase())
    );
    setFilterResturants(main_Data);
  };
  console.log(resturantsList.length);

  return (
    <>
      <Header />
      <div className="body">
        {resturantsList.length === 0 ? (
          <Skeleton />
        ) : (
          <>
            <div className="filter flex">
              <div className="search m-4 p-4">
                <input
                  type="text"
                  className="border border-solid border- yellow"
                  placeholder="Enter Hotel Name"
                  value={searchtext}
                  onChange={(e) => {
                    setSearchtext(e.target.value);
                  }}
                />
                <button
                  className="px-2 py-2 bg-green-100 m-3 rounded-lg"
                  onClick={handleClick}
                >
                  Search
                </button>
              </div>
              <div className="search m-4 p-4 flex items-center">
                <button
                  className="px-4 py-2 bg-gray-100 rounded-lg"
                  onClick={() => {
                    const filteredList = resturantsList.filter(
                      (res: any) => res.info.avgRating > 4
                    );
                    setFilterResturants(filteredList);
                  }}
                >
                  Top Rated Restaurants
                </button>
              </div>
            </div>
            <div className="flex flex-wrap">
              {filterResturants.map((restaurant: any) => (
                <Link
                  key={restaurant?.info.id}
                  to={"/restaurants/" + restaurant?.info.id}
                >
                  {restaurant?.info.promoted ? (
                    <Hotels resData={restaurant?.info} />
                  ) : (
                    <Hotels resData={restaurant?.info} />
                  )}
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default Body;
