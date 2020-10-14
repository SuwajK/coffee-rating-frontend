import React, { useState } from 'react'
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
          <li><a href='./#'>Ratings</a></li>
          <li><a href='./#'>Coffees</a></li>
          <li><a href='./#'>Coffee Machines</a></li>
          <li><a href='./#'>Grinders</a></li>
        </ul>
      </nav>

    </>
  )
}


export default Menu