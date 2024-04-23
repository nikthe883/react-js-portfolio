import React from 'react'
import "./header.css"
import CTA from './CTA'
import ME from '../../assets/mee.png'
import HeaderSocial from './HeaderSocials'
import Highlight from './MostRecentHeader'


const Header = ({showParticles, handleToggleParticles}) => {


  return (
    <header id='header'>
      <div className="container header__container">

      
        <div className='introduction'>
        
        <h1> Hello I am Peter</h1>
        <h3 className='text-light'>Junior Python Developer</h3>
        </div>
        <a href='#contact' className='scroll__down'>Scroll To Bottom</a>
        <a href='#!' className='show__hide__particles' onClick={handleToggleParticles}>
        {showParticles ? 'Hide Particles' : 'Show Particles'}
      </a>
        <CTA></CTA>
        <HeaderSocial></HeaderSocial>
        <Highlight></Highlight>

 


        
      </div>
    </header>
  )
}

export default Header