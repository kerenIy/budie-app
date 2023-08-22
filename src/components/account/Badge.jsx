import React from "react";

export default function Badge(props) {
  return (
    <>
      <div className="badge-item">
        <img src={props.img} alt="" />
        <p>{props.badgeName}</p>
      </div>
    </>
  );
}
