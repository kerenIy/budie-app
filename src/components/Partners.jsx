import React from "react";

import amazon from "../assets/amazon.svg";
import microsoft from "../assets/microsoft.svg";

import visa from "../assets/visa.svg";
import master from "../assets/masrerpass.svg";
export default function Partners() {
  return (
    <>
      <div className="partners">
        <div className="span-item">
          <span>Partners</span>
        </div>
        <br />

        <div className="partner-item-img">
          <img src={amazon} alt="" />
          <img src={microsoft} alt="" />

          <img src={visa} alt="" />
          <img src={master} alt="" />
        </div>
      </div>
    </>
  );
}
