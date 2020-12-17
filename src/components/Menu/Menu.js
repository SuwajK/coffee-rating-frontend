import React, { useState } from 'react'

import {
    Link
} from 'react-router-dom'
import './menu.css'

const Menu = () => {

  const [isMenuExpanded, setIsMenuExpanded] = useState(false)

  const handleHamburgerButtonClick = () => {
    setIsMenuExpanded(prevState => !prevState)
  }

  const isActiveClass = () => isMenuExpanded
    ? 'active'
    : 'inactive'

  return (
    <>
      <button className='hamburger-menu-button' onClick={handleHamburgerButtonClick}>
        <span className='hamburger-menu-button__bars' />
      </button>
      <nav className='nav'>
        <ul className={`${isActiveClass()}`}>
          <li><Link to='/ratings'>Ratings</Link></li>
          <li><Link to='/coffees'>Coffees</Link></li>
          <li><Link to='/grinders'>Grinders</Link></li>
          <li><Link to='/login'>Login</Link></li>
        </ul>
      </nav>
    </>
  )
}


export default Menu