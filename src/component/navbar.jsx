import React from 'react'
import  {useState,useEffect} from 'react'
import { Link } from 'react-scroll'
import Bynd from  "../assets/byndlogo.svg"
// /byndlogo.svg"

import './nav-bar.css'
const Navbar = () => {
     const [isMenuOpen, setIsMenuOpen] = useState(false)
    
      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
      }
    
      const closeMenu = () => {
        setIsMenuOpen(false)
      }
    
      // Close menu when clicking outside or on a link
      useEffect(() => {
        const handleClickOutside = (event) => {
          if (isMenuOpen && !event.target.closest('.nav-container')) {
            closeMenu()
          }
        }
    
        document.addEventListener('click', handleClickOutside)
        return () => {
          document.removeEventListener('click', handleClickOutside)
        }
      }, [isMenuOpen])
  return (
    <div>
      <nav className='navbar'>
            <div className='nav-container'>
              <div className='nav-logo'>
                <img src={Bynd} alt='BYND' />
              </div>
              {/* to="home" smooth={true} duration={600} */}
              <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id='nav-menu'>
                <ul className='nav-links' style={{cursor:'pointer'}}>
                  <li><Link to='features' smooth={true} duration={70}onClick={closeMenu}>Features</Link></li>
                  <li><Link to='how-it-works'smooth={true} duration={70} onClick={closeMenu}>How it works</Link></li>
                  <li><Link to='faqs'smooth={true} duration={70} onClick={closeMenu}>FAQs</Link></li>
                  <li><Link to='pricing'smooth={true} duration={70} onClick={closeMenu}>Pricing</Link></li>
                  <li><Link to='contact'smooth={true} duration={70} onClick={closeMenu}>Contact</Link></li>
                </ul>
              </div>
              
              <div className={`nav-actions ${isMenuOpen ? 'active' : ''}`}>
                <a href='#login' className='nav-login' onClick={closeMenu}>Login</a>
                <button className='nav-cta-button' onClick={closeMenu}>Start tracking for free</button>
              </div>
              
              <div 
                className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} 
                id='nav-toggle' 
                onClick={toggleMenu}
                role="button"
                tabIndex="0"
                aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isMenuOpen}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleMenu();
                  }
                }}
              >
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
              </div>
            </div>
          </nav>
    </div>
  )
}

export default Navbar
