import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Buttons(props) {
  return (
    <>
      <div className="bottom-buttons">
        <FontAwesomeIcon icon={props.icon} />
        <p>{props.text}</p>
      </div>
    </>
  );
}
