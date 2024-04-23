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
    <section id='highlight'>
    <h3> Project Highlight </h3>
    <h1> ShopyThing </h1>

    <div className='container highlight__container'>

      {data.map(({ id, title, img, github, content, demo }, index) => (
              <article key={id} className='highlight__item'>
                <h2>{title}</h2>
                <img className='highlight__image' src={img}></img>
                <div className='highlight__links'>
                <Link className='btn long-text' spy to="portfolio">Go to Project</Link>
                </div>
              </article>
            ))}
     

    </div>
    
    </section>
    
  )
}

export default Highlight