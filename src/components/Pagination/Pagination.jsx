import React, { useState } from 'react'
import './Pagination.css'

const {VITE_LIMIT} = import.meta.env;

const Pagination = ({page,setPage,foodData}) => {

  const prevHandler = () =>{
   if(page===1) return;
    setPage(page-1);
  }
  const nextHandler = () =>{
   setPage(page===Math.ceil((foodData.length)/VITE_LIMIT) ? 1 : page+1);
  }
  return (
    <div className='pagination'>
      <button onClick={prevHandler}>Prev</button>
      <span>{page}</span>
      <button onClick={nextHandler}>Next</button>
    </div>
  )
}

export default Pagination