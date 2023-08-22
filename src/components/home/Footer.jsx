import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <>
      <div className="footer-flex">
        <div className="footer-item">
          <h3>Company</h3>

          <div>
            <p>Careers</p>
            <p>About</p>
            <p>Policy</p>
          </div>
        </div>

        <br />
        <div className="footer-item">
          <h3>Contact</h3>

          <div>
            <p>send@budieapp.io</p>
            <p>+234 908 583 8357</p>
          </div>
        </div>
      </div>
    </>
  );
}
