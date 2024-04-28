import React from 'react'
import { useState } from 'react';
import "./portfolio.css"
import IMG1 from '../../assets/shoppy.PNG'
import IMG2 from '../../assets/thought.png'
import IMG3 from '../../assets/huff.PNG'
import IMG4 from '../../assets/wolf.PNG'


const data = [
  {title: "ShoppyThing", img: IMG1, github:"https://github.com/nikthe883/dev", content:"Django ecommerce  project", demo:"https://testdjango.nikthe.tech/" },
  {title: "Edenthought", img: IMG2, github:"https://github.com/nikthe883/Django-Thought-Project", content:"Django blog project", demo:"https://github.com/nikthe883/Django-Thought-Project" },
  {title: "Huffman algorithm", img: IMG3, github:"https://github.com/nikthe883/huffman-project", content:"Huffman compression algorithm research", demo:"https://github.com/nikthe883/huffman-project" },
  {title: "Wolfenstein", img: IMG4, github:"https://github.com/nikthe883/WolfensteinLikeCopy", content:"2.5D Wolfenstein like copy written in Python", demo:"https://github.com/nikthe883/WolfensteinLikeCopy" },
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