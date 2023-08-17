import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export default function FeaturesItem(props) {
  return (
    <>
      <div className="feature-item">
        <span>{props.title}</span>
        <br />
        <br />
        <FontAwesomeIcon icon={props.icon} id="font-icon" />
        <p>{props.text}</p>
      </div>
    </>
  );
}
