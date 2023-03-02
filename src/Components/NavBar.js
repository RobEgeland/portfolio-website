import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='navbar'>
            <li><NavLink>Projects</NavLink></li>
            <li><NavLink>About</NavLink></li>
            <li><NavLink>Contact</NavLink></li>
        </div>
    )
}

export default NavBar