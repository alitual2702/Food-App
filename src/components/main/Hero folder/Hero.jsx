import React from 'react'
import { CiCircleChevDown } from "react-icons/ci";
import './hero.css'
const Hero = () => {
  return (
    <>
    <div className="hero-section">
      <div className="hero-wrapper">
        <h1 className="hero-title">we <span>love</span> <br /> pakistani food</h1>
        <p className="hero-discrip">Discover Why</p>
        <li className='down-arrow'><CiCircleChevDown /></li>
      </div>
      
      
      
    </div>
    </>
  )
}

export default Hero