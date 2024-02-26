import React from 'react'
import './Pagination.css'

const {VITE_LIMIT} = import.meta.env;

const Pagination = ({page,setPage,totalItems}) => {

  const prevHandler = () =>{
   if(page===1) return;
    setPage(page-1);
  }
  const nextHandler = () =>{
   setPage(page===Math.ceil((totalItems)/VITE_LIMIT) ? 1 : page+1);
  }
  return (
    <div className='pagination'>
      <button onClick={prevHandler}> &#10633;  Prev</button>
      <span>{page}</span>
      <button onClick={nextHandler}> Next &#10634; </button>
    </div>
  )
}

export default Pagination