import React from "react";
import "./services.css";
import { MdDesignServices } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaCode } from "react-icons/fa";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="top-section">
          <h5>What I Offer</h5>
          <h2>Services</h2>
        </div>
        <div className="cards">
          <div className="card">
            <i>
              <MdDesignServices />
            </i>
            <h3>Web design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              corrupti. Repellat nobis facere beatae?
            </p>
          </div>{" "}
          <div className="card">
            <i>
              <IoIosRocket />
            </i>
            <h3>Web design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              corrupti. Repellat nobis facere beatae?
            </p>
          </div>{" "}
          <div className="card">
            <i>
              <FaCode />
            </i>
            <h3>Web design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              corrupti. Repellat nobis facere beatae?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
