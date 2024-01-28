import React from "react";
import "./experiance.css";

const data = [
  {id:1,
  title:'Python',
  experiance:'Advanced'},
  {id:1,
    title:'Python',
    experiance:'Advanced'},
  {id:1,
    title:'Python',
    experiance:'Advanced'},
  {id:1,
    title:'Python',
    experiance:'Advanced'}
]


const Experience = () => {
  return (


    <section id="experience">
      <h4>Skills I Have</h4>
      <h2>My Experience</h2>
      <div className=".container experience__container">
      {
                  data.map(({id,title,experiance}) => {
                    return (
                      <div className="experience__language">
                      <h5>Python</h5>
                      <h6>Advanced</h6>
                      
                    </div>
                    )
          })
        }
          
      </div>
    </section>
  );
};

export default Experience;
