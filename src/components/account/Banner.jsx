import React from "react";
import { Link } from "react-router-dom";

export default function Banner(props) {
  return (
    <>
      <div className="main-banner">
        <div>
          <h2>{props.title}</h2>
          <p>{props.content}</p>
          <Link to="/">read more</Link>
        </div>

        <img src={props.icon} alt="" />
      </div>
    </>
  );
}
