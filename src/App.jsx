import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Home from './pages/Home/Home'
import Recipe from './pages/Recipe/Recipe'

const App = () => {

  return (
    <div className='app'>
        <Router>
         <Header/>
         <Routes>
           <Route path='/' element={<Home />}/>
           <Route path='/recipes/:id' element={<Recipe />}/>
         </Routes>
        </Router>
    </div>
  )
}

export default App