import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function MainBodyItem(props) {
  return (
    <>
      <div className="main-body-title">
        <h2>{props.title}</h2>
      </div>
    </>
  );
}
