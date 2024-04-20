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

function Certificates() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => 
      setIndex(prevIndex => prevIndex === imageSources.length - 1 ? 0 : prevIndex + 1),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <section id='certificates'>
      <div className="container slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {imageSources.map((src, index) => (
            <div
              className="slide"
              key={index}
              style={{ backgroundImage: `url(${src})` }}
            ></div>
          ))}
        </div>

        <div className="slideshowDots">
          {imageSources.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;

