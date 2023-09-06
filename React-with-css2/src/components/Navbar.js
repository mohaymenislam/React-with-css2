import React, { useState } from 'react';
import './Navbar.css'
import Logo from './images/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'
 
const Navbar = () => {

const [click , setClick] = useState(false)

const handleClick = () => setClick(!click)
const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <div className='navbar'>
                <a href='/' className='logo'>
                    <img src={Logo} alt=''></img>
                </a>
                <div className='hamburger' onClick={handleClick} >

               {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
            
                </div>
                <ul className={ click ? 'nav-menu active' : 'nav-menu' }>
                     <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Home</a>
                     </li>
                     <li className='nav-item'>
                        <a href='#about' onClick={closeMenu}>About</a>
                     </li>
                     <li className='nav-item'>
                        <a href='#testimonials' onClick={closeMenu}>Testimonials</a>
                     </li>
                     <li className='nav-item'>
                        <a href='#demo' onClick={closeMenu}>Demo</a>
                     </li>
                </ul>
            </div>
            
        </div>
    );
};

export default Navbar;