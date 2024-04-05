import React from 'react'
import './style.css'
import logo from '../../../../public/Logo/Flow-logo.svg'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <div className="navbarSection">
        <Link to='/' className="divNavGroupSec">
          <img src={logo} alt="Flow" />
        </Link>
        <div className="divNavGroupSec">
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

      </div>
    </div>
  )
}

export default Navbar