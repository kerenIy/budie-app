import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPiggyBank, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function MainBodyCard(props) {
  return (
    <>
      <div className="main-body-card">
        <FontAwesomeIcon icon={faPiggyBank} />
        <p>{props.name}</p>
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
    </>
  );
}
