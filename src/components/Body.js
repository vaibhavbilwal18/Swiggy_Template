import RestaurantCard from "./RestaurantCard";
import {useState} from "react";
import React  from "react";
import restaurant from "../utils/mockData";
import reastourant from "../utils/mockData";

const Body = () => {
  
// Local State Variable 
const [listofRestourant, setlistofRestourant] = useState(reastourant);  
    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={() => {
            //filter logic
            const filtered= listofRestourant.filter((res) => res.info.avgRatingString > "4.0");
            setlistofRestourant(filtered);
          }}> Top Rated Restaurant</button>
        </div>
        <div className="res-container">
         {
          listofRestourant.map((resList ) => (<RestaurantCard key = {resList.info.id} resName = {resList}/>) )
         }
        </div>
      </div>
    );
  };
  export default Body;