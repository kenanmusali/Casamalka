import React, { useEffect, useState } from 'react'
import './style.css'
import logo from '../../../../public/Logo/casamalka-logo.svg'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 767);
  const [menuText, setMenuText] = useState('Menu'); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setMenuText(isOpen ? 'Menu' : 'Close'); 
  };
  
  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 767);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div>
      <div className="navbarSection">
        <div className="divNavGroupSec divNavGroupSec0">
          <Link to='/'>
            <img src={logo} alt="Flow" />
          </Link>
          <p onClick={toggleMenu} className='DragHandleIcon'>{menuText}</p>
        </div>

        {isOpen && (
          <div className="divNavGroupSec divNavGroupSec00">
            <NavLink onClick={toggleMenu} className="divLink LinkFist" to='/products' activeClassName="active">
              <div className="nav">PRODUCTS</div>
            </NavLink>
            <NavLink onClick={toggleMenu} className="divLink" to='/contact' activeClassName="active">
              <div className="nav">CONTACT</div>
            </NavLink>
            <NavLink onClick={toggleMenu} className="divLink" to='/reseller' activeClassName="active">
              <div className="nav">RESELLER</div>
            </NavLink>
            <NavLink onClick={toggleMenu} className="divLink" to='/news' activeClassName="active">
              <div className="nav">NEWS</div>
            </NavLink>
            <NavLink onClick={toggleMenu} className="divLink" to='/faq' activeClassName="active">
              <div className="nav">FAQ</div>
            </NavLink>
            <NavLink onClick={toggleMenu} className="divLink LinkLast" to='/bag' activeClassName="active">
              <div className="nav">BAG (0)</div>
            </NavLink>
          </div>
        )}
      </div>
    </div >
  )
}

export default Navbar
