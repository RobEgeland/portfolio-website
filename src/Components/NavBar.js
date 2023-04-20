import React from 'react'
import { NavLink } from 'react-router-dom'
import { ImHome3, ImFolderOpen, ImAddressBook, ImItalic } from "react-icons/im";
import logo from '../Rob.png'


const NavBar = () => {
    return (  
        <div className='menu'>
            <a><NavLink className='side' to={'/'}>Home</NavLink></a>
            <a><NavLink className='side' to={'/projects'}>Projects</NavLink></a>
            <a><NavLink className='side' to={'/about-me'}>About</NavLink></a>
            <a><NavLink className='side' to={'/contact'}>Contact</NavLink></a>
            <div className='dot'></div>
        </div>
    )
}

export default NavBar