import React from "react";
import Cards from "./Cards";
import MainBodyItem from "./MainBodyItem";
import MainBodyCard from "./MainBodyCard";

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
            <MainBodyItem title="Budgets" />
            <MainBodyCard name="Monthly budget" />
            <MainBodyCard name="Monthly budget" />
          </div>

          <div>
            <MainBodyItem title="Savings" />
            <MainBodyCard name="Regular saving" />
            <MainBodyCard name="Regular saving" />
          </div>
        </div>
      </div>
    </>
  );
}
