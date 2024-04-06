import React, { useState } from 'react'
import './style.css'
import logo from '../../../../public/Logo/Flow-logo.svg'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="navbarSection">
        <Link to='/' className="divNavGroupSec divNavGroupSec0">
          <img src={logo} alt="Flow" />
          <p onClick={toggleMenu} className='DragHandleIcon' > Menu</p>
        </Link>

        {isOpen && (
          <div className="divNavGroupSec divNavGroupSec00">
            <div className="divLink LinkFist">
              <NavLink className="nav" to='/products'>PRODUCTS</NavLink>
            </div>
            <div className="divLink">
              <NavLink className="nav" to='/contact'>CONTACT</NavLink>
            </div>
            <div className="divLink">
              <NavLink className="nav" to='/contact'>RESELER</NavLink>
            </div>
            <div className="divLink">
              <NavLink className="nav" to='/contact'>NEWS</NavLink>
            </div>
            <div className="divLink">
              <NavLink className="nav" to='/contact'>FAQ</NavLink>
            </div>
            <div className="divLink LinkLast">
              <NavLink className="nav" to='/contact'>BAG (0)</NavLink>
            </div>
          </div>
        )}
      </div>
    </div >
  )
}

export default Navbar