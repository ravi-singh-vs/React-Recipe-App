import React, { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Home from './pages/Home/Home'
import Recipe from './pages/Recipe/Recipe'

const App = () => {
  const [error,setError] = useState(null);
  return (
    <div className='app'>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home error={error} setError={setError}/>}/>
          <Route path='/recipes/:id' element={<Recipe error={error} setError={setError}/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App