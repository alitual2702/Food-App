import React, { useEffect, useRef } from 'react'
import './nav.css'
import { BsCart3 } from "react-icons/bs";
import { MdOutlineMenu } from "react-icons/md";
import Navlinks from './Navlinks'
const Navbar = () => {
  let refMe = useRef(null)
  const handledClick = () => {
     refMe.current.classList.toggle('hided')
  }
  useEffect(() => {
    if(window.innerWidth <= 768){
      refMe.current.classList.add('hided')
    }
  }, [])
  
  
  
  return (
    <>
        <div className="logo">
            <img src="/images/logo.png" alt="dsvsv" className="logo-img" />
        </div>

        <ul ref={refMe} className="nav-links">
            <Navlinks link_tage="MENU" />
            <Navlinks link_tage="COMBOS" />
            <Navlinks link_tage="RESERVATION" />
            <Navlinks link_tage="ABOUT US" />
            <Navlinks link_tage="CONTACT" />
        </ul>

        <div className="cart-icon">
        <MdOutlineMenu onClick={() => {handledClick()}} className='menu-cart' />
        <BsCart3 className='main-cart' />
        </div>
    </>
  )
}

export default Navbar