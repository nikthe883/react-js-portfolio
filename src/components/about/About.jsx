import React from 'react';
import { useState } from 'react';
import "./about.css";
import LAPTOP from '../../assets/laptop.jpg';

const data = [
  {title: "FastComet", experiance: "Currently working", content: 'Chat and technical support.' },
  {title: "Apple", experiance: "03.2023 - 09.2023", content: 'Operator for Apple Maps car.' },
  {title: "Skuudle", experiance: "03.2021 - 02.2023", content: 'Data entry specialist.' },
];

const About = () => {
  const [showMore, setShowMore] = useState(Array(data.length).fill(false));

  const handleClick = (index) => {
    const newShowMore = [...showMore];
    newShowMore[index] = !newShowMore[index];
    setShowMore(newShowMore);
  };

  return (
    <section id='about'>
      <h3>Get To Know</h3>
      <h1>About Me</h1>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={LAPTOP} alt='About Image' />
          </div>
        </div>

        <div className='about__content'>
          <div className="about__cards">
            {data.map(({ id, title, experiance, content }, index) => (
              <article key={id} className='about__card'>
                <h3>{title}</h3>
                <p className='experience'>{experiance}</p>
                <a className='btn' onClick={() => handleClick(index)}>
                  {showMore[index] ? 'Show Less' : 'Show More'}
                </a>
                {showMore[index] && (
                  <p className='content_p'>{content}</p>
                )}
              </article>
            ))}
          </div>

          <div>
            <p className='about__me__p'>Hello. I am an aspiring  Python developer eager to launch my career in the tech industry. 
            With a robust foundation in Python and the additional skills I have in JavaScript, HTML, CSS, basic React, SQL, and Django, 
            I am passionate about creating innovative solutions. 
            <br></br>
            <span style={{ marginLeft: '2rem' }}>
              Currently working in technical support role where I have honed my problem-solving abilities and technical acumen. 
            In my free time, I enjoy playing basketball, watching movies, and  of course coding, continually striving to enhance my skills and bring my unique ideas to life.
            </span>
            </p>

          </div>
          <div className='lets__talk'>
            <a href='#contact' className='btn btn-primary'> Lets Talk!</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;