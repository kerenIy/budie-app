import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Cards(props) {
  return (
    <>
      <div className="card-body">
        <FontAwesomeIcon icon={faArrowLeft} />

        <div className="card-text">
          <h1>{props.title}</h1>
          <p>{props.amount}</p>
        </div>

        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </>
  );
}
