import React, { useState } from "react";
import "./nav.css";
import { IoHomeOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
const Nav = () => {
  const iconData = [
    { id: 1, href: "#", svg: <IoHomeOutline /> },
    { id: 2, href: "#about", svg: <LuUserRound /> },
    { id: 3, href: "#services", svg: <BiBook /> },
    {
      id: 4,
      href: "#projects",
      svg: <RiServiceLine />,
    },
    { id: 5, href: "#contact", svg: <BiMessageSquareDetail /> },
  ];
  const [activeNav, SetActiveNav] = useState("#");
  return (
    <div className="nav">
      <ul>
        {iconData.map((icon) => {
          return (
            <li>
              <a
                key={icon.id}
                href={icon.href}
                className={activeNav === icon.href ? "active" : ""}
                onClick={() => SetActiveNav(icon.href)}
              >
                {icon.svg}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Nav;

