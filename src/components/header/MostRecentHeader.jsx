import React from 'react'
import { useState } from 'react';
import { Link } from "react-scroll";
import "./portfolio.css"
import IMG1 from '../../assets/portfolio2.jpg'


const data = [
  {title: "ShopyThing", img: IMG1, github:"https://github.com/nikthe883/Django-Thought-Project", content:"Show more 111333331111", demo:"https://github.com/" },
];

const Highlight = () => {

  const [showMore, setShowMore] = useState(Array(data.length).fill(false));

  const handleClick = (index) => {
    const newShowMore = [...showMore];
    newShowMore[index] = !newShowMore[index];
    setShowMore(newShowMore);
  };

  return (
    <section id='portfolio'>
    <h3> Project Highlight </h3>
    <h1> ShopyThing </h1>

    <div className='container portfolio__container'>

      {data.map(({ id, title, img, github, content, demo }, index) => (
              <article key={id} className='portfolio__item'>
                <h2>{title}</h2>
                <img className='porfolio__image' src={img}></img>
                <div className='portfolio__links'>
                <Link spy to="portfolio">Projects</Link>
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn long-text' target='_blank'>Demo</a>
                <a className='btn long-text' onClick={() => handleClick(index)}>
                  {showMore[index] ? 'Less' : 'More'}
                </a>
                {showMore[index] && (
                  <div className='more-text'><h2>{content}</h2></div>
                )}

               

                </div>
              </article>
            ))}
     

    </div>
    
    </section>
    
  )
}

export default Highlight