import React from "react";
import "./skills.css";

import Css from '../../assets/css3.svg';
import Expressjs from '../../assets/expressjs.svg';
import Figma from '../../assets/figma.svg';
import Javascript from '../../assets/javascript.svg';
import Mongodb from '../../assets/mongodb.svg';
import Nodejs from '../../assets/nodejs.svg';
import ReactJS from '../../assets/react.svg';
import Tailwind from '../../assets/tailwindcss.svg';

const Skills = () => {
  const SkillsData = [
    {
      id: 1,
      image: Css,
      title: "CSS",
      disc: "User Interface",
    },
    {
      id: 1,
      image: Javascript,
      title: "JavaScript",
      disc: "Interaction",
    },
    {
      id: 1,
      image: ReactJS,
      title: "React",
      disc: "Framework",
    },
    {
      id: 1,
      image: Tailwind,
      title: "TailwindCSS",
      disc: "User Interface",
    },
    {
      id: 1,
      image: Nodejs,
      title: "NodeJS",
      disc: "Web Server",
    },
    {
      id: 1,
      image: Figma,
      title: "Figma",
      disc: "Design tool",
    },
    {
      id: 1,
      image: Expressjs,
      title: "ExpressJS",
      disc: "Node Framework",
    },
    {
      id: 1,
      image: Mongodb,
      title: "MongoDB",
      disc: "Database",
    },
  ];

  return (
    <section>
      <div className="container">
        <div className="top-section">
          <h5>What Skills I Have</h5>
          <h2>My Experience</h2>
        </div>
        <div className="skills">
          {SkillsData.map((skill) => {
            return (
              <div className="skill" key={skill.id}>
                <div className="skill-img">
                  <img src={skill.image} alt="" />
                </div>
                <div className="text">
                  <span>{skill.title}</span>
                  <small>{skill.disc}</small>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
