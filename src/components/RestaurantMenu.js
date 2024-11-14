import useRestaurantMenu from '../utils/useRestarantMenu';
import ResCategory from './ResCategory';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  






  if (!resInfo) return <Shimmer />;

  const { name, cuisines = [], costForTwoMessage } = resInfo?.cards?.[2]?.card?.card?.info || {};
  const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards;

   const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] == 
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");


  return (
    <div className="text-center ">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h3 className='font-bold text-lg'>{cuisines.join(", ")} - {costForTwoMessage}</h3>
      
      {categories.map((category) => (
        <ResCategory key= {category?.card?.card?.title}data={category?.card?.card}/>
      ))}
     
    </div>
  );
};

export default RestaurantMenu;
