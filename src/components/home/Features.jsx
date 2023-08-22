import React from "react";
import FeaturesItem from "./FeaturesItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShieldHalved,
  faChartGantt,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";

export default function Features() {
  return (
    <>
      <div className="features desk-padding">
        <div className="features-text">
          <div className="span-item">
            <span>features</span>
          </div>

          <h1>
            Best features brought to you by{" "}
            <span className="logo">Budie &trade;</span>{" "}
          </h1>

          <p>
            Budie &trade; is dedicated to bringing you personal financial
            freedom and liberation. Because of these desires, we have added
            features to ensure your experience is unbeatable. Here are just a
            few.
          </p>

          <NavLink to="#">Learn more &rarr;</NavLink>
        </div>

        <div className="feature-item-group">
          <FeaturesItem
            title="Protection"
            icon={faShieldHalved}
            text="We protect all your private information"
          />

          <FeaturesItem
            title="Tracking"
            icon={faChartGantt}
            text="Keep track of your finances"
          />

          <FeaturesItem
            title="Flexibility"
            icon={faSliders}
            text="Budie provides a myraid of tools"
          />

          <FeaturesItem
            title="Ease"
            icon={faHeart}
            text="User-friendly interface and features"
          />
        </div>
      </div>
    </>
  );
}
