import React from "react";
import "./about.css";
import about_me from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="top-section">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
      </div>
      <div className="container about-container">
        <div className="about-me">
          <img src={about_me} alt="" />
        </div>
        <div className="about-content">
          <div className="about-cards">
            <div className="card">
              <i>
                <FaAward />
              </i>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </div>
            <div className="card">
              <i>
                <FiUsers />
              </i>
              <h5>Clients</h5>
              <small>300+ WorldWide</small>
            </div>
            <div className="card">
              <i>
                <VscFolderLibrary />
              </i>
              <h5>Projects</h5>
              <small>90+ Completed</small>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque odio
            odit impedit facere laudantium quaerat, dignissimos, fugit nam
            obcaecati quis tenetur quod repudiandae suscipit! Totam debitis sed
            aliquid a possimus!
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
