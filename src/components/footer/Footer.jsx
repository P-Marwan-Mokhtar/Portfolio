import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  const links = [
    {
      id: 1,
      title: "Home",
    },
    { id: 2, title: "About" },
    { id: 3, title: "Experience" },
    { id: 4, title: "Services" },
    { id: 5, title: "portfolio" },
    { id: 6, title: "Testimonials" },
    { id: 7, title: "Contact" },
  ];
  return (
    <footer>
      <div className="container">
        <h2>MaroDev</h2>
        <ul>
          {links.map((link) => {
            return (
              <li key={link.id}>
                <a href="">{link.title}</a>
              </li>
            );
          })}
        </ul>
        <div className="icons">
          <a href="">
            <FaFacebookF />
          </a>{" "}
          <a href="">
            <FaInstagram />
          </a>{" "}
          <a href="">
            <FaXTwitter />
          </a>
        </div>
        <p>
          <small>
            {" "}
            &copy;<a href="">MaroDev</a> All Rights Reserved
          </small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
