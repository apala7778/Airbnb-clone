import React from 'react'
import logo from '../images/logobnb.jpg'

const Nav = () => {
  return (
    <div>
        <nav>
        <img src={logo} alt="image" className='nav--logo' ></img>
        </nav>
    </div>
  )
}

export default Nav