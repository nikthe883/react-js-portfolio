import React from 'react'
import { useState } from 'react';
import { Link } from "react-scroll";
import "./highlight.css"
import IMG1 from '../../assets/portfolio2.jpg'


const Highlight = () => {


  return (
    <section id='highlight'>
    <h3> Project Highlight </h3>
    <h1> ShopyThing </h1>

    <div className='container highlight__container'>
        <article className='highlight__item'>
            <h2>ShopyThing</h2>
            <img className='highlight__image' src={IMG1}></img>
            <div className='highlight__links'>
            <Link className='btn long-text' spy to="portfolio">Go to Project</Link>
            </div>
        </article>
    </div>
    
    </section>
  )
}

export default Highlight