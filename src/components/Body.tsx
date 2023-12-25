import Header from "./Header";
import { useEffect, useState } from "react";
import Hotels, { withPromtedLabel } from "./Hotels";
import Skeleton from "./Skeleton";
import { Link } from "react-router-dom";
import { API } from "../Utilities/Constant";
import useOnlineStatus from "../Utilities/useOnlineStatus";
import { NoInternet } from "./Svg/Svg";
import useResturantlist from "../Utilities/useResturantlist";
const Body = () => {
  const [filterResturants, setFilterResturants] = useState([]);
  const [searchtext, setSearchtext] = useState("");
  const isUserOnline = useOnlineStatus();
  const resturantsList = useResturantlist();

  // fetch the hotels name
  const fetchData = async () => {
    const data = await fetch(API);
    const json = await data.json();
    console.log(json);
    setFilterResturants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const Promotedlabel = withPromtedLabel(Hotels);

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

  // if the user is offline
  if (!isUserOnline) {
    return (
      <>
        {NoInternet}
        <h2>Please turn on your internet to use the App.</h2>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="body">
        {resturantsList.length === 0 ? (
          <Skeleton />
        ) : (
          <>
            <div className="filter flex">
              <div className="search  m-4">
                <input
                  type="text"
                  className="border border-solid px-4 py-2 border- yellow"
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
                <Link to={"/resturants/" + restaurant?.info.id}>
                  {restaurant?.info.promoted ? (
                    <Promotedlabel resData={restaurant?.info} />
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
