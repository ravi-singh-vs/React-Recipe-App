import React from 'react'
import logo from  '../../assets/Logo.png'
import './Header.css'
const Header = () => {
  return (
    <header className='header'>
        <div className='logo'>
            <img src={logo} alt="logo" width={100} />
        </div>
        <h1>Food App</h1>
        
    </header>
  )
}

export default Header