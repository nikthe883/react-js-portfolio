import React from "react";
import "./experiance.css";

const data = [
  { title: "Python", experiance: "Advanced" },
  { title: "HTML", experiance: "Intermediate" },
  { title: "CSS", experiance: "Intermediate" },
  { title: "React", experiance:  "Begginer" },
  { title: "Django", experiance:  "Intermediate" },
  { title: "PostgreSQL", experiance:  "Begginer" },
];

const Experience = () => {
  return (
    <section id="experience">
      <h3>Skills I Have</h3>
      <h1> Experience</h1>
      <div className="container experience__container">
        {data.map(({title, experiance }) => {
          return (
            <div  className="experience__language">
              <h3>{title}</h3>
              <h4>{experiance}</h4>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
