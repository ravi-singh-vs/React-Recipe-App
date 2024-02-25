import React, { useState } from 'react'
import Content from '../../components/Content/Content'
import Search from '../../components/Search/Search'
import FoodList from '../../components/FoodList/FoodList'
import Pagination from '../../components/Pagination/Pagination'
import Loader from '../../components/Loader/Loader'
const Home = ({error,setError}) => {
  
  const [page, setPage] = useState(1);
  const [foodData , setFoodData] = useState([]);

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

export default React.memo(Home)