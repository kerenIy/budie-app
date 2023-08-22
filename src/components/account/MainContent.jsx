import React from "react";
import Cards from "./Cards";
import MainBodyItem from "./MainBodyItem";
import MainBodyCard from "./MainBodyCard";
import Badge from "./Badge";

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
            <MainBodyItem title="Your Badges" />

            <div className="badges">
              <Badge img={badge} badgeName="Money Stepper" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
