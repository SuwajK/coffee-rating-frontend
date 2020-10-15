import React from 'react'
import './header.css'
import {
  Link
} from 'react-router-dom'
import Menu from '../Menu/Menu'

const Header = () => {


  return (

    <div className='header'>
        <Link to='/' className='header__logo'>Coffee Ratings</Link>
      <Menu/>
    </div>

  )
}

export default Header