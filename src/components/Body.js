import React, { useState, useEffect , useContext } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const {loggedInUser,setUserInfo } = useContext(UserContext);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    //console.log(json);

    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    setListOfRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <h1>You are offline. Please check your internet connection.</h1>;
  }
  
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex items-center">
        <div className="search m-4 p-4 ">
        
          <button
            className="px-2 border border-black bg-green-200 m-4 rounded-lg"
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filtered);
            }}
          >
            Search
          </button>
          <input
            type="text"
            className="search-box border-solid border border-black rounded-lg"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
          <div className="search m-4 p-4 flex items-center">
            <label 
            className="px-2 border border-black bg-green-200 m-4 rounded-lg cursor-pointer">
             User Name</label>
         <input 
         className="border border-black rounded-lg"
         value={loggedInUser}
         onChange={(e) => setUserInfo(e.target.value)} />
         </div>
        <button
          className="px-2 border border-black bg-green-200 m-4 rounded-lg"
          onClick={() => {
            const filtered = listOfRestaurants.filter(
              (res) => parseFloat(res.info.avgRatingString) > 4.5
            );
            setFilteredRestaurants(filtered);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurants.map((resList) => (
          <Link key={resList.info.id} to={`/restaurant/${resList.info.id}`}>
            <RestaurantCard resName={resList} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
