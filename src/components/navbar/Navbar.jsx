import React from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='flex-div'>
        <div className='nav-left flex-div'>
            <img className='menu-icon' src={menu_icon} alt="" />
            <img className='logo' src={logo} alt="" />
        </div>

        <div className='nav-middle flex-div'>
            <input type="text" placeholder='Search' />
        </div>
    </nav>
  )
}

export default Navbar