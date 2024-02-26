import React from 'react'
import './FoodList.css'
import FoodItem from '../FoodItem/FoodItem'
const {VITE_LIMIT} = import.meta.env;

const FoodList = ({foodData,page}) => {

  const startIdx = (page-1)*VITE_LIMIT;

  const endIdx = Math.min(startIdx + Number(VITE_LIMIT), foodData.length);
  
  const paginatedFoodData = foodData.slice(startIdx,endIdx);

  return (
    <div className='food-list-container'>
     {
        paginatedFoodData.length > 0 
         && 
         paginatedFoodData.map((food)=>
         <FoodItem 
          key={food.id}  
          foodItemId={food.id}  
          foodItemName={food.title} 
          foodItemImg={food.image}
        />)
     }
    </div>
  )
}

export default FoodList