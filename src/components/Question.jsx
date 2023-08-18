import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
export default function Question(props) {
  const [toggle, setToggle] = useState("faq-hide");

  const changeToggle = () => {
    if (toggle == "faq-hide") {
      setToggle("nav-links");
    } else if (toggle == "nav-links") {
      setToggle("faq-hide");
    }
  };

  return (
    <>
      <div className="question-box">
        <div className="question-header" onClick={changeToggle}>
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
