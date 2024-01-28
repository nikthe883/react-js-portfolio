import React from 'react'
import "./portfolio.css"

const Portfolio = () => {
  return (
    <section id='portfolio'>Portfolio
    <h5> My Recent Work </h5>
    <h2> Portfolio </h2>
    <div className='container portfolio__container'>
      <article className='portfolio__item'>
        <div className='portolio__item-image'>
          <h3>This is portfolio item title</h3>
          <a href='github.com' className='btn' target='_blank'>Github</a>
          <a href='' className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
      </article>

    </div>
    
    </section>
    
  )
}

export default Portfolio