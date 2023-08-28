import React from "react";
import CardItem from "./CardItem";

export default function Cards() {
  return (
    <>
      <div className="card-group">
        <div>
          <CardItem title="Total Balance" amount="N0.00" />
        </div>
        <div className="card-extra">
          <CardItem title="Total Savings" amount="N0.00" />
        </div>
        <div className="card-extra">
          <CardItem title="Total Investments" amount="N0.00" />
        </div>
      </div>
    </>
  );
}
