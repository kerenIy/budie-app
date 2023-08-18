import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import WhyItem from "./WhyItem";

export default function Why() {
  return (
    <>
      <div className="why-banner">
        <div className="span-item">
          <span>why us</span>
        </div>

        <div className="why-text">
          <h1>
            why <span className="logo">Budie &trade;</span> is better
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            ex magnam voluptatibus sed impedit dolorem?
          </p>
        </div>

        <div className="why-items">
          <WhyItem
            icon={faCaretUp}
            title="Withdraw"
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, harum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, odit."
          />

          <WhyItem
            icon={faCaretUp}
            title="Digital Token"
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, harum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, odit."
          />

          <WhyItem
            icon={faCaretUp}
            title="History"
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, harum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, odit."
          />

          <WhyItem
            icon={faCaretUp}
            title="Investment"
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, harum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, odit."
          />
        </div>
      </div>
    </>
  );
}
