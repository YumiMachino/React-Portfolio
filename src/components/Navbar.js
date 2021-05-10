
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import '../App.css';

 
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
        <nav className= {colorChange ? 'navbarColorChange' : 'navbar'}>
          <div className='navbar-container'>
            <Link to='/' className={colorChange ? 'changeLogoColor' : 'navbar-logo'} onClick={closeMobileMenu}>
              <i class='fas fa-user' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className= {colorChange ? 'changeUnderLine' : 'nav-item' }>
                <Link to='/' className={colorChange ? 'linkLetterColorChange' : 'nav-links' } onClick={closeMobileMenu}>
                  HOME
                </Link>
              </li>
              <li className={colorChange ? 'changeUnderLine' : 'nav-item' }>
                <Link
                  to='/about'
                  className={colorChange ? 'linkLetterColorChange' : 'nav-links' }
                  onClick={closeMobileMenu}
                 >
                ABOUT
                </Link>
              </li>
              <li className={colorChange ? 'changeUnderLine' : 'nav-item' }>
                <Link
                  to='/work'
                  className={colorChange ? 'linkLetterColorChange' : 'nav-links' }
                  onClick={closeMobileMenu}
                >
                  WORK
                </Link>
              </li>
              <li className={colorChange ? 'changeUnderLine' : 'nav-item' }>
                <Link
                  to='/contact'
                  className={colorChange ? 'linkLetterColorChange' : 'nav-links' }
                  onClick={closeMobileMenu}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </nav>
     ); 
}
 
export default Navbar;