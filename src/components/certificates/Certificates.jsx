import React from 'react';
import { useState, useEffect, useRef } from 'react';
import "./certificates.css";
import c1 from '../../assets/1c.jpg';
import c2 from '../../assets/2c.jpg';
import c3 from '../../assets/3c.jpg';
import c4 from '../../assets/4c.jpg';
import c5 from '../../assets/5c.jpg';
import c6 from '../../assets/6c.jpg';
import c7 from '../../assets/7c.jpg';
import c8 from '../../assets/8c.jpg';

const imageSources = [c1, c2, c3, c4, c5, c6, c7, c8];
const delay = 2500;

const data = [
  {title: "Python Basics", img: c1, content:"Show more 1", demo:"https://github.com/" },
  {title: "Portfolio item title 2", img: c2,  content:"Show more 2", demo:"https://github.com/" },
  {title: "Portfolio item title 3", img: c3, content:"Show more 3", demo:"https://github.com/" },
  {title: "Portfolio item title 4", img: c3,  content:"Show more 4", demo:"https://github.com/" },
];

const Certificates = () => {

  const [showMore, setShowMore] = useState(Array(data.length).fill(false));

  const handleClick = (index) => {
    const newShowMore = [...showMore];
    newShowMore[index] = !newShowMore[index];
    setShowMore(newShowMore);
  };

  return (
    <section id='certificates'>
    <h3> My courses </h3>
    <h1> Certificates </h1>

    <div className='container certificates__container'>

      {data.map(({ id, title, img, content}, index) => (
              <article key={id} className='certificates__item'>
                <h2>{title}</h2>
                <div className='more-text'><h4>{content}</h4></div>
                
                <div className='certificates__links'>

                <a className='btn long-text' onClick={() => handleClick(index)}>
                  {showMore[index] ? 'Hide certificate' : 'Show certificate'}
                </a>
                {showMore[index] && (
                   
                    <div className='more-img'><h2><img src={img} alt={title} /></h2></div>
                    
                 
                )}

                </div>
              </article>
            ))}
     

    </div>
    
    </section>
    
  )
}


export default Certificates;

