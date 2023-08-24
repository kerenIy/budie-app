import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function MainBodyCard(props) {
  return (
    <>
      <div className="main-body-card">
        <img src={props.img} alt="" className="body-card-img" />
        <p>{props.name}</p>
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
    </>
  );
}
