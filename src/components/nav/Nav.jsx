import React, { useState } from "react";
import "./nav.css";
import { IoHomeOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
const Nav = () => {
  const [activeNav, SetActiveNav] = useState("#");
  return (
    <div className="nav">
      <ul>
        <li>
          <a
            href="#"
            onClick={() => SetActiveNav("#")}
            className={activeNav === "#" ? "active" : ""}
          >
            <IoHomeOutline />
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={() => SetActiveNav("#about")}
            className={activeNav === "#about" ? "active" : ""}
          >
            <LuUserRound />
          </a>
        </li>
        <li>
          <a
            href="#services"
            onClick={() => SetActiveNav("#services")}
            className={activeNav === "#services" ? "active" : ""}
          >
            <BiBook />
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={() => SetActiveNav("#projects")}
            className={activeNav === "#projects" ? "active" : ""}
          >
            <RiServiceLine />
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => SetActiveNav("#contact")}
            className={activeNav === "#contact" ? "active" : ""}
          >
            <BiMessageSquareDetail />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
