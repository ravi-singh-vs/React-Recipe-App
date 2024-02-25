import React from 'react'
import './FoodItem.css'
import { Link} from 'react-router-dom'

const FoodItem = ({no,foodItemId,foodItemName ,foodItemImg}) => {
  return (
    <div className='food-item'>
        <div className='food-item-img-container'>
            <img src={foodItemImg} alt={foodItemName} />
        </div>
        <div className='food-item-details'>
            <p>{no} {foodItemName}</p>
            <div>
              <Link to={`recipes/${foodItemId}`} target='__blank'>View Recipe</Link>
            </div>
        </div>
    </div>
  )
}

export default FoodItem