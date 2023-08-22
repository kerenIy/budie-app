import React from "react";

import amazon from "../../../public/amazon.svg";
import microsoft from "../../../public/microsoft.svg";

import visa from "../../../public/visa.svg";
import master from "../../../public/masrerpass.svg";
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
