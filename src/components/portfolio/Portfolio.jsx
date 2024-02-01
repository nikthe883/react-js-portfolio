import React from 'react'
import { useState } from 'react';
import "./portfolio.css"
import IMG1 from '../../assets/portfolio1.jpg'


const data = [
  {title: "Portfolio item title 1", img: IMG1, github:"https://github.com/nikthe883/Django-Thought-Project", content:"Show more 1", demo:"https://github.com/" },
  {title: "Portfolio item title 2", img: IMG1, github:"https://github.com/", content:"Show more 2", demo:"https://github.com/" },
  {title: "Portfolio item title 3", img: IMG1, github:"https://github.com/", content:"Show more 3", demo:"https://github.com/" },
  {title: "Portfolio item title 4", img: IMG1, github:"https://github.com/", content:"Show more 4", demo:"https://github.com/" },
];

const Portfolio = () => {

  const [showMore, setShowMore] = useState(Array(data.length).fill(false));

  const handleClick = (index) => {
    const newShowMore = [...showMore];
    newShowMore[index] = !newShowMore[index];
    setShowMore(newShowMore);
  };

  return (
    <section id='portfolio'>
    <h5> My Recent Work </h5>
    <h2> Portfolio </h2>

    <div className='container portfolio__container'>

      {data.map(({ id, title, img, github, content, demo }, index) => (
              <article key={id} className='portfolio__item'>
                <h2>{title}</h2>
                <img src={img}></img>
                <div className='portfolio__links'>

                <a href={github} className='btn' target='_blank'>Github</a>

                <a className='btn long-text' onClick={() => handleClick(index)}>
                  {showMore[index] ? 'Show Less' : 'Show More'}
                </a>
                {showMore[index] && (
                  <h2>{content}</h2>
                )}

                <a href={demo} className='btn long-text' target='_blank'>Live Demo</a>

                </div>
              </article>
            ))}
     

    </div>
    
    </section>
    
  )
}

export default Portfolio