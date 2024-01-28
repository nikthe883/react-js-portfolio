import React from 'react'
import { useState } from 'react'
import "./about.css"
import ME from '../../assets/me-about.jpg'

const data = [
  { title: "Experiance", experiance: "3 years of Experiance" },
  { title: "Python", experiance: "Advanced" },
  { title: "Python", experiance: "Advanced" },
];



const About = () => {
  const [showMore, setShowMore] = useState(false)
  const hancleClick = () => {
    setShowMore(!showMore)
  };

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

           
                {data.map(({title, experiance }) => {
          return (
            <article className='about__card'>
            <h4>{title}</h4>
              <p>{experiance}</p>
              <a className='btn' onClick={hancleClick}>Show More</a>
              {showMore &&(
                <h2>More content</h2>
              )}
            </article>
          );
        })}
                
          </div>
          <div>
              <p className='about__me__p'>Some text some text some text some text some text some text some textsome 
                text some textsome textsome textsome textsome textsome 
                some textsome textsome textsome textsome textsome text
                some textsome textsome textsome textsome text
                some textsome textsome textsome texttextsome textsome textsome text</p>
            </div >
            <div className='lets__talk'>
            <a href='#contact' className='btn btn-primary'> Lets Talk!</a>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About