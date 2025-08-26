import React from "react";
import "./projects.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
const Projects = () => {
  const portfolioData = [
    {
      id: 1,
      image: IMG1,
      title: "Portfolio Item 1",
      github: "https://github.com/project1",
      demo: "https://demo1.com",
    },
    {
      id: 2,
      image: IMG2,
      title: "Portfolio Item 2",
      github: "https://github.com/project2",
      demo: "https://demo2.com",
    },
    {
      id: 3,
      image: IMG3,
      title: "Portfolio Item 3",
      github: "https://github.com/project3",
      demo: "https://demo3.com",
    },
    {
      id: 4,
      image: IMG4,
      title: "Portfolio Item 4",
      github: "https://github.com/project4",
      demo: "https://demo4.com",
    },
    {
      id: 5,
      image: IMG5,
      title: "Portfolio Item 5",
      github: "https://github.com/project5",
      demo: "https://demo5.com",
    },
    {
      id: 6,
      image: IMG6,
      title: "Portfolio Item 6",
      github: "https://github.com/project6",
      demo: "https://demo6.com",
    },
  ];
  return (
    
      <section className="projects-section" id="projects">
        <div className="top-section">
          <h5>My Recent Work</h5>
          <h2>Portfolio</h2>
        </div>
        <div className="container">
          <div className="projects">
            {portfolioData.map((project) => {
              return (
                <div className="project" key={project.id}>
                  <div className="project-img">
                    <img src={project.image} alt="" />
                    <p>{project.title}</p>
                    <div className="btns">
                      <a href={project.github} target="_blank" className="btn ">
                        GitHub
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        className="btn btn-primary"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    
  );
};

export default Projects;
