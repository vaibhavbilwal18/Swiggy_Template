import React from 'react';
import { CDN_URL } from '../utils/contants';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const ItemList = ({ items }) => {
  // console.log(dummy);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
       dispatch(addItem(item));
  }


  return (
    <div className="">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold">{item.card.info.name}</span>
              <span className="font-semibold">
                - ₹ {item.card.info.price / 100 ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
          </div>
          <div className="w-3/12 p-4 relative">
            <button className="p-0.5 rounded-lg bg-black shadow-lg text-green-500 absolute top-0 left-0 text-xs"
            onClick={() => handleAddItem(item)}>
              Add +
            </button>
            <img
              src={ CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
