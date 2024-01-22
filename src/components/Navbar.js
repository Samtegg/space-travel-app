import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [click, setClick] =  useState(false)
  const handleClick = () => setClick(!click)


  const [color, setColor] = useState(false)
  const closeMenu = () => setClick(false)
  const changeColor = () => {
    if(window.scrollY >= 100) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)

  return (
    <div className={color? 'header header-bg': 'header'}  >
      <Link to='/'>GLX TRVL</Link>
      <ul className={click? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to='/' onClick={closeMenu}> Home</Link>
        </li>
        <li>
          <Link to='/pricing' onClick={closeMenu}>Pricing</Link>
        </li>
        <li>
          <Link to='/training' onClick={closeMenu}>Training</Link>
        </li>
        <li>
          <Link to='/contact' onClick={closeMenu}>Contact</Link>
        </li>
      </ul>
      <div className='hamburger' onClick={handleClick}>
        {click? (<FaTimes size={20} style={{color:'#fff'}}/>) : (<FaBars size={20} style={{color:'#fff'}} />) }
       
      </div>
    </div>
  )
}

export default Navbar