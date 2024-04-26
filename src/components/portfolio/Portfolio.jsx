import React from 'react'
import { useState } from 'react';
import "./portfolio.css"
import IMG1 from '../../assets/shoppy.PNG'
import IMG2 from '../../assets/thought.png'
import IMG3 from '../../assets/huff.PNG'
import IMG4 from '../../assets/wolf.PNG'


const data = [
  {title: "Portfolio item title 1", img: IMG1, github:"https://github.com/nikthe883/Django-Thought-Project", content:"Show more 111333331111", demo:"https://github.com/" },
  {title: "Portfolio item title 2", img: IMG2, github:"https://github.com/", content:"Show more 2223333333222", demo:"https://github.com/" },
  {title: "Portfolio item title 3", img: IMG3, github:"https://github.com/", content:"Show more 32333332222", demo:"https://github.com/" },
  {title: "Portfolio item title 4", img: IMG4, github:"https://github.com/", content:"Show more 423333332222", demo:"https://github.com/" },
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
    <h3> My Recent Work </h3>
    <h1> Portfolio </h1>

    <div className='container portfolio__container'>

      {data.map(({ id, title, img, github, content, demo }, index) => (
              <article key={id} className='portfolio__item'>
                <h2>{title}</h2>
                <img className='porfolio__image' src={img}></img>
                <div className='portfolio__links'>

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

export default Portfolio