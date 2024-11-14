import React from 'react'
import ItemList from './ItemList';
import { useState } from 'react';
const ResCategory = ({data}) => {
  
  const [showVariable , setShowVariable] = useState(false);

  const handleClick = () =>  {
    setShowVariable(!showVariable);

  }
  return (
    <div>
       <div  className="  w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className='font-bold text-lg  '>
          {data.title} - ({data.itemCards.length})
          </span>
        <span>⬇️</span>
        </div>
        { showVariable && <ItemList items = {data.itemCards} /> }
     </div>
    </div>
  ) 
}
export default ResCategory;