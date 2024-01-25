import React from 'react'
import "./about.css"
import ME from '../../assets/me-about.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image'/>
          </div>

        </div>
        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
            <h4>Experiance</h4>
              <p>3 years of Experiance</p>
            </article>

            <article className='about__card'>
              <h4>Experiance</h4>
              <p>3 years of Experiance</p>
            </article>

            <article className='about__card'>
            <h4>Experiance</h4>
              <p>3 years of Experiance</p>
            </article>
            
          </div>
          <div>
              <p>some text some text some text some text some text some text some textsome 
                text some textsome textsome textsome textsome textsome 
                some textsome textsome textsome textsome textsome text
                some textsome textsome textsome textsome text
                some textsome textsome textsome texttextsome textsome textsome text</p>
            </div>
            <a href='#contact' className='btn btn-primary'> Lets Talk!</a>
        </div>
      </div>
    </section>
  )
}

export default About