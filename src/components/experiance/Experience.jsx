import React from "react";
import "./experiance.css";

const data = [
  { title: "Python", experiance: "Advanced" },
  { title: "Python", experiance: "Advanced" },
  { title: "Python", experiance: "Advanced" },
  { title: "Python", experiance: "Advanced" },
];

const Experience = () => {
  return (
    <section id="experience">
      <h4>Skills I Have</h4>
      <h2> Experience</h2>
      <div className=".container experience__container">
        {data.map(({title, experiance }) => {
          return (
            <div className="experience__language">
              <h3>Python</h3>
              <h4>Advanced</h4>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
