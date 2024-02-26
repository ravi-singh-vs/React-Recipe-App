import React, { memo, useEffect, useState } from 'react'
import './Search.css';
import { getFood } from '../../api/get-food';
const Search = ({setFoodData}) => {

  const [query,setQuery] = useState("");

  const fetchFood = async() =>{
    if(!query.trim()) return;

    const res = await getFood(query.trim().toLowerCase());

    if (res.success) setFoodData(res.data);

  }
  const submitHandler = (e) =>{

    e.preventDefault();
    fetchFood();

  }
  useEffect(()=>{
    fetchFood();
  },[])
  return (
   <form onSubmit={submitHandler} className='food-search-form'>
     <input type="text" value={query} onChange = {(e=>setQuery(e.target.value))} placeholder='Enter any Food Item'/>
   </form>
  )
}

export default memo(Search)