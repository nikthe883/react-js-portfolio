import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const HeaderSocials  = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/peterpopmihaylov/" target='_blank'><FaLinkedinIn /></a>
        <a href='https://github.com/nikthe883' target='_blank'><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials