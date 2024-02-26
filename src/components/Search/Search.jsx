import React, { memo, useState } from 'react'
import './Search.css';
import { getFood } from '../../api/get-food';
const Search = ({setFoodData}) => {

  const [query,setQuery] = useState("");

  const submitHandler = async(e) =>{

    e.preventDefault();


    const res = await getFood(query);

    if (res.success)
    {
        console.log("Dattatat",res.data)
        setFoodData(res.data);
    }
  }
  return (
   <form onSubmit={submitHandler} className='food-search-form'>
     <input type="text" value={query} onChange = {(e=>setQuery(e.target.value))} placeholder='Enter any Food Item'/>
   </form>
  )
}

export default memo(Search)