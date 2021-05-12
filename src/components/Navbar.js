
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import '../App.css';
import { HashLink } from 'react-router-hash-link';
 
const Navbar = () => {

    const [click, setClick] = useState(false)
  
    const [colorChange, setColorChange] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    /*change navbar color when scrolled*/
    const changeNavbarColor = () => {
      if (window.scrollY >= 140) {
        setColorChange(true);
      } else {
        setColorChange(false);
      }
    };

    /*set event linster */
    window.addEventListener('scroll', changeNavbarColor);

    return ( 
        <div id="top" className= {colorChange ? 'navbarColorChange' : 'navbar'}>
          <div className='navbar-container'>
            <HashLink smooth to='/Navbar#top' className={colorChange ? 'changeLogoColor' : 'navbar-logo'} onClick={closeMobileMenu}>
              <i className='fas fa-user' />
            </HashLink>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className= {colorChange ? 'changeUnderLine' : 'nav-item' }>
                <HashLink smooth to='/Navbar#top' className={colorChange ? 'linkLetterColorChange' : 'nav-links' } onClick={closeMobileMenu}>
                  HOME
                </HashLink>
              </li>
              <li className={colorChange ? 'changeUnderLine' : 'nav-item' }>
                <HashLink smooth to="/About#about" className={colorChange ? 'linkLetterColorChange' : 'nav-links' }
                  onClick={closeMobileMenu}>About</HashLink>
              </li>
              <li className={colorChange ? 'changeUnderLine' : 'nav-item' }>
                <HashLink
                  smooth to='/Portfolio#work'
                  className={colorChange ? 'linkLetterColorChange' : 'nav-links' }
                  onClick={closeMobileMenu}
                >
                  WORK
                </HashLink>
              </li>
              <li className={colorChange ? 'changeUnderLine' : 'nav-item' }>
                <HashLink
                  smooth to='/Contact#contact'
                  className={colorChange ? 'linkLetterColorChange' : 'nav-links' }
                  onClick={closeMobileMenu}
                >
                  CONTACT
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
     ); 
}
 
export default Navbar;