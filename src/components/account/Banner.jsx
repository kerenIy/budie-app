import React from "react";

export default function Banner(props) {
  return (
    <>
      <div className="main-banner">
        <img src={props.icon} alt="" />
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </div>
    </>
  );
}
