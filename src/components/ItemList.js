import React from 'react';
import { CDN_URL } from '../utils/contants';

const ItemList = ({ items }) => {
  return (
    <div className="">
      {items.map((Item) => (
        <div
          key={Item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold">{Item.card.info.name}</span>
              <span className="font-semibold">
                - ₹ {Item.card.info.price / 100 ? Item.card.info.price / 100 : Item.card.info.defaultPrice / 100}
              </span>
            </div>
            <div>
              <p className="text-xs">{Item.card.info.description}</p>
            </div>
          </div>
          <div className="w-3/12 p-4 relative">
            <button className="p-0.5 rounded-lg bg-black shadow-lg text-green-500 absolute top-0 left-0 text-xs">
              Add +
            </button>
            <img
              src={ CDN_URL + Item.card.info.imageId}
              alt={Item.card.info.name}
              className="w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
