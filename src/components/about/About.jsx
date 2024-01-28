import React from 'react';
import { useState } from 'react';
import "./about.css";
import ME from '../../assets/me-about.jpg';

const data = [
  {title: "Experience", experiance: "3 years of Experience", content: '1 content' },
  {title: "Python", experiance: "Advanced", content: '2 content' },
  {title: "React", experiance: "Intermediate", content: '3 content' },
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
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image' />
          </div>
        </div>

        <div className='about__content'>
          <div className="about__cards">
            {data.map(({ id, title, experiance, content }, index) => (
              <article key={id} className='about__card'>
                <h4>{title}</h4>
                <p>{experiance}</p>
                <a className='btn' onClick={() => handleClick(index)}>
                  {showMore[index] ? 'Show Less' : 'Show More'}
                </a>
                {showMore[index] && (
                  <h2>{content}</h2>
                )}
              </article>
            ))}
          </div>

          <div>
            <p className='about__me__p'>Some text some text some text some text some text some text some textsome
              text some textsome textsome textsome textsome textsome
              some textsome textsome textsome textsome textsome text
              some textsome textsome textsome textsome text
              some textsome textsome textsome texttextsome textsome textsome text</p>
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