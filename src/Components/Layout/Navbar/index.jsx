import React, { useEffect, useState } from 'react'
import './style.css'
import logo from '../../../../public/Logo/casamalka-logo.svg'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 767);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
        <Link to='/' className="divNavGroupSec divNavGroupSec0">
          <img src={logo} alt="Flow" />
          <p onClick={toggleMenu} className='DragHandleIcon' > Menu</p>
        </Link>

        {isOpen && (
          <div className="divNavGroupSec divNavGroupSec00">
            <NavLink className="divLink LinkFist" to='/products' activeClassName="active">
              <div className="nav">PRODUCTS</div>
            </NavLink>
            <NavLink className="divLink" to='/contact' activeClassName="active">
              <div className="nav">CONTACT</div>
            </NavLink>
            <NavLink className="divLink" to='/reseller' activeClassName="active">
              <div className="nav">RESELLER</div>
            </NavLink>
            <NavLink className="divLink" to='/news' activeClassName="active">
              <div className="nav">NEWS</div>
            </NavLink>
            <NavLink className="divLink" to='/faq' activeClassName="active">
              <div className="nav">FAQ</div>
            </NavLink>
            <NavLink className="divLink LinkLast" to='/bag' activeClassName="active">
              <div className="nav">BAG (0)</div>
            </NavLink>
          </div>

        )}
      </div>
    </div >
  )
}

export default Navbar
