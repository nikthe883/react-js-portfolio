import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/portfolio1.jpg'


const data = [
  {title: "Python", experiance: "Advanced" },
  { title: "Python", experiance: "Advanced" },
  {title: "Python", experiance: "Advanced" },
  {title: "Python", experiance: "Advanced" },
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
    <h5> My Recent Work </h5>
    <h2> Portfolio </h2>

    <div className='container portfolio__container'>

      <article className='portfolio__item'>
      <h2>This is portfolio item title</h2>
        <div className='portfolio__item-image'>
          <img src={IMG1}></img>
          </div>
          <div className='portfolio__links'>

          <a href='github.com' className='btn' target='_blank'>Github</a>
          <a href='' className='btn long-text' target='_blank'>Show More</a>
          <a href='' className='btn long-text' target='_blank'>Live Demo</a>

          <a href='' className='btn short-text' target='_blank'>More</a>
          <a href='' className='btn short-text' target='_blank'>Demo</a>
          </div>
          
        
      </article>
      <article className='portfolio__item'>
      <h3>This is portfolio item title</h3>
        <div className='portfolio__item-image'>
          <img src={IMG1}></img>
          </div>
          <div className='portfolio__links'>
          <a href='github.com' className='btn' target='_blank'>Github</a>
          <a href='' className='btn' target='_blank'>Show More</a>
          <a href='' className='btn' target='_blank'>Live Demo</a>
          </div>
          
        
      </article>
      <article className='portfolio__item'>
      <h3>This is portfolio item title</h3>
        <div className='portfolio__item-image'>
          <img src={IMG1}></img>
          </div>
          <div className='portfolio__links'>
          <a href='github.com' className='btn' target='_blank'>Github</a>
          <a href='' className='btn' target='_blank'>Show More</a>
          <a href='' className='btn' target='_blank'>Live Demo</a>
          </div>
          
        
      </article>
      <article className='portfolio__item'>
      <h3>This is portfolio item title</h3>
        <div className='portfolio__item-image'>
          <img src={IMG1}></img>
          </div>
          <div className='portfolio__links'>
          <a href='github.com' className='btn' target='_blank'>Github</a>
          <a href='' className='btn' target='_blank'>Show More</a>
          <a href='' className='btn' target='_blank'>Live Demo</a>
          </div>
          
        
      </article>
      <article  className='portfolio__item'>
      <h3>This is portfolio item title</h3>
        <div className='portfolio__item-image'>
          <img src={IMG1}></img>
          </div>
          <div className='portfolio__links'>
          <a href='github.com' className='btn' target='_blank'>Github</a>
          <a href='' className='btn' target='_blank'>Show More</a>
          <a href='' className='btn' target='_blank'>Live Demo</a>
          </div>
          
        
      </article>
     

    </div>
    
    </section>
    
  )
}

export default Portfolio