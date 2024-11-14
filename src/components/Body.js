import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

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
        <div className="search m-4 p-4">
          <input
            type="text"
            className="search-box border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-2 bg-green-200 m-4 rounded-lg"
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filtered);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="px-2 bg-gray-100 rounded-lg"
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
