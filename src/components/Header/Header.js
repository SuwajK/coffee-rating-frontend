import React  from 'react'
import './header.css'

import Menu from '../Menu/Menu'

const Header = () => {


  return (

    <div className='header'>
      <div className='header__logo'>Coffee Ratings</div>
        <Menu/>
    </div>

  )
}

export default Header