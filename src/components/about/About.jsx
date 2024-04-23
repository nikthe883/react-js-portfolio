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