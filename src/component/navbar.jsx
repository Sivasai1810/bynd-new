import React from 'react'
import  {useState,useEffect} from 'react'
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
              
              <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id='nav-menu'>
                <ul className='nav-links'>
                  <li><a href='#features' onClick={closeMenu}>Features</a></li>
                  <li><a href='#how-it-works' onClick={closeMenu}>How it works</a></li>
                  <li><a href='#faqs' onClick={closeMenu}>FAQs</a></li>
                  <li><a href='#pricing' onClick={closeMenu}>Pricing</a></li>
                  <li><a href='#contact' onClick={closeMenu}>Contact</a></li>
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
