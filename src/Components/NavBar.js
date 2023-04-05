import React from 'react'
import { NavLink } from 'react-router-dom'
import { ImHome3, ImFolderOpen, ImAddressBook, ImItalic } from "react-icons/im";


const NavBar = () => {
    return (
        <div className='menu'>
            <li className='menu_list'>
                <span className="front fas fa-home"><ImHome3 /></span>
                <a><NavLink className='side' to={'/'}>Home</NavLink></a>
            </li>
            <li className='menu_list'>
                <span className="front fas fa-projects"><ImFolderOpen /></span>
                <a><NavLink className='side' to={'/projects'}>Projects</NavLink></a>
            </li>
            <li className='menu_list'>
                <span className="front fas fa-about"><ImItalic /></span>
                <a><NavLink className='side' to={'/about-me'}>About</NavLink></a>
            </li>
            <li className='menu_list'>
                <span className="front fas fa-contact"><ImAddressBook /></span>
                <a><NavLink className='side' to={'/contact'}>Contact</NavLink></a>
            </li>
        </div>
    )
}

export default NavBar