import { CDN_URL } from "../utils/contants";

const RestaurantCard = (props) => {
    const { resName } = props;
    const {
       cloudinaryImageId ,
       name, 
       cuisines , 
       avgRatingString ,
       deliveryTime ,
       costForTwo } = resName?.info;
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
  
        <img className="res-logo" alt="res-logo" src= { CDN_URL + resName.info.cloudinaryImageId }/>
        <h3>{name}</h3>
        <h4>{cuisines?.join(", ")}</h4>
        <h4>{avgRatingString} stars</h4>
        <h4>{deliveryTime} min</h4>
        <h4>{costForTwo}</h4>
      </div>
    );
  };
export default RestaurantCard;  