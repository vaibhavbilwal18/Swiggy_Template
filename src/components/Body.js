import RestaurantCard from "./RestaurantCard";
import {useState , useEffect} from "react";
import React  from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  
const [listofRestourant, setlistofRestourant] = useState([]);  
const [searchText , setsearchtext] = useState("");
const [filteredrestaurant , setfilteredrestaurant] = useState([]);
 
useEffect(() => {
  fetchData();
} , []);


  const fetchData = async  () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

   const json = await data.json();
   console.log(json);
   
setlistofRestourant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
setfilteredrestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

return listofRestourant.length === 0 ? <Shimmer/> : (
      <div className="body">
        <div className="filter">
          <div className="search"> 
            <input type="text" className="search-box" value={searchText} onChange={(e) => {
              setsearchtext(e.target.value);
            }} />
            <button onClick={() =>  {

              // console.log(searchText);
              //data.cards[1].card.card.gridElements.infoWithStyle.restaurants

              const filteredrestaurant = listofRestourant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setfilteredrestaurant(filteredrestaurant);
            }}>Search</button>
          </div>
          <button className="filter-btn" onClick={() => {
            //filter logic
            const filtered= listofRestourant.filter((res) => res.info.avgRatingString > "4.5");
            setfilteredrestaurant(filteredrestaurant);
          }}> Top Rated Restaurant</button>
        </div>
        <div className="res-container">
         {
          filteredrestaurant.map((resList ) => (<RestaurantCard key = {resList.info.id} resName = {resList}/>) )
         }
        </div>
      </div>
    );
  };
  export default Body;