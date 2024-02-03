import React from 'react'
import "./header.css"
import CTA from './CTA'
import ME from '../../assets/mee.png'
import HeaderSocial from './HeaderSocials'


const Header = ({showParticles, handleToggleParticles}) => {


  return (
    <header id='header'>
      <div className="container header__container">

      
        <div className='introduction'>
        
        <h1> Hello I am Peter</h1>
        <h3 className='text-light'>Junior Python Developer</h3>
        </div>
        
        <CTA></CTA>
        <HeaderSocial></HeaderSocial>

        <div className="me">
          <img src={ME} alt='me'></img>
        </div>
        

        <a href='#contact' className='scroll__down'>Scroll To Bottom</a>
        <a href='#!' className='show__hide__particles' onClick={handleToggleParticles}>
        {showParticles ? 'Hide Particles' : 'Show Particles'}
        
      </a>
        
      </div>
    </header>
  )
}

export default Header