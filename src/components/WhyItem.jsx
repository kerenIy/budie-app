import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function WhyItem(props) {
  return (
    <>
      <div className="why-item">
        <FontAwesomeIcon icon={props.icon} className="why-icon" />
        <span>{props.title}</span>
        <p>{props.text}</p>
      </div>
    </>
  );
}
