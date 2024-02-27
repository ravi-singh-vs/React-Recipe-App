import React,{Suspense} from 'react'
import logo from  '../../assets/Logo.png'
import './Header.css'
import { Outlet } from 'react-router-dom'
import Loader from '../Loader/Loader'
import Content from '../Content/Content'
const Header = () => {
  return (
    <>
    <header className='header'>
        <div className='logo'>
            <img src={logo} alt="logo" width={100} />
        </div>
        <h1>Food App</h1>
    </header>
    <Content>
      <Suspense fallback={<Loader/>}> 
       <Outlet/>
      </Suspense>
    </Content>
    </>
  )
}

export default Header;