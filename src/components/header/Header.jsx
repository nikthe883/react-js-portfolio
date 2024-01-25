import React from 'react'
import "./header.css"
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocials'


const Header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Peter</h1>
        <h5 className='text-light'>Junior Python Developer</h5>
        <CTA></CTA>
        <HeaderSocial></HeaderSocial>

        <div className="me">
          <img src={ME} alt='me'></img>
        </div>

        <a href='#contact' className='scroll__down'>Scroll To Bottom</a>

      </div>
    </header>
  )
}

export default Header