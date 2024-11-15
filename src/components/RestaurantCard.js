import { useContext } from "react";
import { CDN_URL } from "../utils/contants";
import UserContext from "../utils/UserContext";



const RestaurantCard = (props) => {
   const {loggedInUser} = useContext(UserContext);
    const { resName } = props;
    const {
       cloudinaryImageId ,
       name, 
       cuisines , 
       avgRatingString ,
       sla: {deliveryTime} ,
       costForTwo } = resName?.info;
    return (
      <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-200 cursor-pointer"  >
  
        <img className="rounded-lg" alt="res-logo" src= { CDN_URL + resName.info.cloudinaryImageId }/>
        <h3 className="font-bold py-2">{name}</h3>
        <h4>{cuisines?.join(", ")}</h4>
        <h4 className="font">{avgRatingString} stars</h4>
        <h4>{deliveryTime} min</h4>
        <h4>{costForTwo}</h4>
        <h4>{loggedInUser}</h4>
      </div>
    );
  };

export default RestaurantCard;  