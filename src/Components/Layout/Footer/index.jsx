import React from 'react'
import './style.css'
import logo from '../../../../public/Logo/Flow-logo.svg'

function Footer() {
  return (
    <div>
      <div className="divFooter">
        <div className="divFooterSection">
          <img src={logo} className='footerLogo' alt="Flow" />
          <p>We make products with minimal environmental impact
            that keep you hydrated when you are far away from the tap.
          </p>
          ©Flow, 2024. All Right Reserved,
          <p>
          </p>
        </div>
        <div className="divFooterSection"></div>
        <div className="divFooterSection Footerlast">
          <div className="divFooterMenuSecion">
            <p className='HeadFooter'>MENU</p>
            <p>Products</p>
            <p>Contact</p>
            <p>Reseler</p>
          </div>
          <div className="divFooterMenuSecion">
            <p className='HeadFooter'>MORE INFO</p>
            <p>Privacy Policy</p>
            <p>Term of Use</p>
            <p>See Faq</p>
          </div>
          <div className="divFooterMenuSecion">
            <p className='HeadFooter'>SOCIAL</p>
            <p>Instagram</p>
            <p>Twitter (X)</p>
            <p>Pinterest</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer