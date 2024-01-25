import React from 'react'
import { useState} from 'react'
import { Link } from "react-scroll";
import "./nav.css"

const Nav = () => {
  const [activeNav, setActiveNan] = useState('#')

  
  return (
    <div>
      <nav>
        <Link activeClass="active"  spy to="header">Home</Link>
        <Link activeClass="active"  spy to="about">About</Link>
        <Link activeClass="active"  spy to="experience">Experience</Link>
        <Link activeClass="active"  spy to="portfolio">Projects</Link>
        <Link activeClass="active"  spy to="contact">Contact</Link>
      </nav>
    </div>
  )
}

export default Nav