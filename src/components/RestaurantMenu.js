import React, { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_URL } from '../utils/contants';


const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const {resId}= useParams();
  //console.log(params);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
      const response = await fetch(MENU_URL + resId);
      const json = await response.json();
      console.log(json);
      setResInfo(json.data);
    
  };
  if (!resInfo) return <Shimmer />;

  const { name, cuisines = [], costForTwoMessage } = resInfo?.cards?.[2]?.card?.card?.info || {};

  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);

  

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(",  ")}</h3><h3>{costForTwoMessage}</h3>
      
      <h2>Menu</h2>
      <ul>
        {itemCards.map(item => <li key = {item.card.info.id} >{item.card.info.name} </li>)}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
