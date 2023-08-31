import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Cards(props) {
  return (
    <>
      <div className="card-body">
        <div className="card-text">
          <h1>{props.title}</h1>
          <p>{props.amount}</p>
          <button className="card-btn">
            <span>TOP UP </span>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
    </>
  );
}
