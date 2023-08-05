import React from 'react'
import {Link} from 'react-router-dom'
import {FaCoins} from 'react-icons/fa'


const Navbar = () => {
  return (
    <Link to="/">
        <div className='navbar'>
          <FaCoins className='fa-icon'/>
          <h1>Coin<span className='title-span'>Search</span></h1>
        </div>
     </Link> 
  )
}

export default Navbar