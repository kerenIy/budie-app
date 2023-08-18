import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
export default function Question(props) {
  const [toggle, setToggle] = useState("hide");

  const changeToggle = () => {
    if (toggle == "hide") {
      setToggle("nav-links");
    } else if (toggle == "nav-links") {
      setToggle("hide");
    }
  };

  return (
    <>
      <div className="question-box">
        <div className="question-header">
          <div>
            <span>{props.number}</span>
            <h2>{props.question}</h2>
          </div>

          <button onClick={changeToggle} className="btn">
            <FontAwesomeIcon icon={faAngleDown} />
          </button>
        </div>

        <p className={toggle}>{props.answer}</p>
      </div>
    </>
  );
}
