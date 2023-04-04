import React from 'react'
import { NavLink } from 'react-router-dom'
import { ImHome3, ImFolderOpen, ImAddressBook, ImItalic } from "react-icons/im";
import { Link, animateScroll as scroll } from "react-scroll";

const NavBar = () => {
    return (
        <div className='menu'>
            <li className='menu_list'>
                <span className="front fas fa-home"><ImHome3 /></span>
                <a><Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                ><NavLink className='side' to={'/'}>Home</NavLink></Link></a>
            </li>
            <li className='menu_list'>
                <span className="front fas fa-projects"><ImFolderOpen /></span>
                <a><Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                ><NavLink className='side' to={'/projects'}>Projects</NavLink></Link></a>
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