import React from "react";
import { useState } from "react";

import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [toggle, setToggle] = useState("hide");

  const changeToggle = () => {
    if (toggle == "hide") {
      setToggle("nav-links");
    } else if (toggle == "nav-links") {
      setToggle("hide");
    }
  };
  return (
    <>
      <div className="navigation-bar">
        <div className="nav-img">
          <p className="logo">Budie &trade;</p>

          <button onClick={changeToggle} className="btn">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        <div id="links" className={toggle}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">Features</NavLink>
          <NavLink to="/">About us</NavLink>
          <NavLink to="/">Contact</NavLink>

          <div>
            <button className="btn">Try it? &rarr;</button>
          </div>
        </div>
      </div>
    </>
  );
}
