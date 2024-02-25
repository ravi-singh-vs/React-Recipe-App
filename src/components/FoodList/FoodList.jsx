import React, { useEffect, useRef, useState } from 'react'
import './FoodList.css'
import FoodItem from '../FoodItem/FoodItem'
const {VITE_LIMIT} = import.meta.env;

const FoodList = ({foodData,page}) => {
    const paginatedList = useRef([]);
    const skip = (page-1)*VITE_LIMIT;
    paginatedList.current = foodData.filter((food,ind)=> ind>=skip && ind<skip+Number(VITE_LIMIT));
  return (
    <div className='food-list-container'>
     {
        paginatedList.current.length >0 
         && 
        paginatedList.current.map((food,i)=>
         <FoodItem 
          key={food.id} 
          no={i}  
          foodItemId={food.id}  
          foodItemName={food.title} 
          foodItemImg={food.image}
        />)
     }
    </div>
  )
}

export default FoodList