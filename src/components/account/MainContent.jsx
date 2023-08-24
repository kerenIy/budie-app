import React from "react";
import Cards from "./Cards";
import MainBodyItem from "./MainBodyItem";
import MainBodyCard from "./MainBodyCard";
import Badge from "./Badge";

import badge from "../../../public/badge.png";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function MainContent() {
  return (
    <>
      <div className="main-content">
        <div className="main-user-text">
          <h3>Hey, tein</h3>
        </div>
        <div className="card-container">
          <Cards title="Total Balance" amount="N0.00" />
        </div>

        <div className="main-body">
          <div>
            <MainBodyItem title="Do more with Budie &trade;" />
            <div>
              <MainBodyCard name="Explore budgets" />
            </div>

            <div>
              <MainBodyCard name="Explore savings" />
            </div>
          </div>

          <div>
            <MainBodyItem title="To Do" />
            <div className="main-banner">
              <h2>Complete your profile setup</h2>

              <div>
                <span>
                  <FontAwesomeIcon icon={faIdCard} />
                  <p> Add your National ID</p>
                </span>
                <span>
                  <FontAwesomeIcon icon={faIdCard} />
                  <p> Add your next of kin</p>
                </span>

                <span>
                  <FontAwesomeIcon icon={faIdCard} />
                  <p> Follow friends & family</p>
                </span>
              </div>
            </div>
          </div>

          <div>
            <MainBodyItem title="Your Badges" />

            <div className="badges">
              <Badge img={badge} badgeName="Big stepper" />
              <Badge img={badge} badgeName="Tracker" />
              <Badge img={badge} badgeName="Rising star" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
