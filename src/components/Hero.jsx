import React from "react";
import { NavLink } from "react-router-dom";

import heroImg from "../assets/head-img.png";

export default function Hero() {
  return (
    <>
      <div className="hero-section">
        <div className="hero-text">
          <span className="small-header">
            No 1 finance app on the App store
          </span>
          <h2>
            Manage your personal finances easily with{" "}
            <span className="logo">Budie &trade;</span>
          </h2>
          <p>
            With Budie you can manage your personal finances, make budgets,
            track your expenses, and so much more...
          </p>

          <NavLink to="#">Try it now &rarr;</NavLink>
        </div>

        <div className="hero-image hide">
          <img src={heroImg} alt="" />
        </div>
      </div>
    </>
  );
}
