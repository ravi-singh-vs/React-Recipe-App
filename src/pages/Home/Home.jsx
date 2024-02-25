import React, { useState } from 'react'
import Content from '../../components/Content/Content'
import Search from '../../components/Search/Search'
import FoodList from '../../components/FoodList/FoodList'
import Pagination from '../../components/Pagination/Pagination'
const Home = ({error,setError}) => {
  const [foodData , setFoodData] = useState([]);
  const [page, setPage] = useState(1);
  return (
    <Content>
      <Search setFoodData={setFoodData} error={error} setError={setError}/>
      <FoodList foodData={foodData} page={page}/>
      {
        foodData.length >0 && <Pagination page={page} setPage={setPage} foodData={foodData}/>
      }
    </Content>
  )
}

export default Home