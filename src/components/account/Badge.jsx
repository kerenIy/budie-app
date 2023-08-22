import React from "react";

export default function Badge(props) {
  return (
    <>
      <div className="badge-item">
        <img src={props.img} alt="" className="account-img" />
        <p>{props.badgeName}</p>
      </div>
    </>
  );
}
