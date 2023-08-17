import React from "react";
import { NavLink } from "react-router-dom";

import heroImg from "../assets/head-img.png";

export default function Hero() {
  return (
    <>
      <div className="hero-section desk-padding">
        <div className="hero-text">
          <span className="small-header">
            No 1 finance app on the App store
          </span>
          <h2>
            Manage your personal finances easily with{" "}
            <span className="logo">Budie &trade;</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aspernatur, laborum tempora! Quod mollitia deleniti neque
            voluptatum. Obcaecati cumque nam iure saepe.
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
