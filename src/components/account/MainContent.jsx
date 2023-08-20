import React from "react";
import Cards from "./Cards";

export default function MainContent() {
  return (
    <>
      <div className="main-content">
        <div className="head-info-display">
          <h1>Hey, tein</h1>
          <p>@teinsapanda</p>
        </div>

        <div className="card-container">
          <Cards title="Total Balance" amount="N0.00" />
        </div>
      </div>
    </>
  );
}
