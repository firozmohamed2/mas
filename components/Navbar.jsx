import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src='' alt='' />
        <ul className='navbar-menu'>
            <li>home</li>
            <li>menu</li>
            <li>mobile-app</li>
            <li>contact us</li>

        </ul>
        <div className='navbar-right'>
            <img src='' alt='' />
            <div className='navbar-search-icon'>
                <img src='' alt='' />
                <div className='dot'></div>
            </div>
            <button>sign in</button>


        </div>
        
    </div>
  )
}

export default Navbar