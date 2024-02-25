import React, { useState } from 'react'
import './Search.css';
import { getFood } from '../../api/get-food';
const Search = ({setFoodData, error,setError}) => {

  const [query,setQuery] = useState("");

  const submitHandler = async(e) =>{

    e.preventDefault();

    const res = await getFood(query);

    if (res.success)
    {
        setError(null);
        setFoodData(res.data);
    }
    else
    {
        setError(res.error);
        alert(res.error)
    }
  }
  return (
   <form onSubmit={submitHandler} className='food-search-form'>
     <input type="text" value={query} onChange = {(e=>setQuery(e.target.value))} placeholder='Enter any Food Item'/>
   </form>
  )
}

export default Search