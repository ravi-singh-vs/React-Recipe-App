import React,{lazy} from 'react'
import './App.css'
import Header from './components/Header/Header'
import {Routes,Route} from "react-router-dom";
const Home = lazy(()=> import('./pages/Home/Home'))
const Recipe = lazy(()=> import('./pages/Recipe/Recipe'))

const App = () => {

  return (
    <div className='app'>
      <Routes> 
      <Route path='/' element={<Header/>}>
        <Route path='/' element={<Home />}/>
        <Route path='recipes/:id' element={<Recipe />}/>
      </Route>
      </Routes>
    </div>
  )

}

function wait (time) {
 return new Promise(resolve=>{
   setTimeout(resolve,time)
 })
}

export default App