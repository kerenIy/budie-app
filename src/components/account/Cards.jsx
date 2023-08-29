import React from "react";
import CardItem from "./CardItem";
import { useState } from "react";

export default function Cards() {
  const [toggle, setToggle] = useState("card=extra");

  const changeCardDisplay = () => {
    if (toggle == "card-extra") {
      setToggle("card");
    } else if (toggle == "card") {
      setToggle("card-extra");
    }
  };
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
