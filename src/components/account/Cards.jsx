import React from "react";
import CardItem from "./CardItem";
import { useState } from "react";
import { useEffect } from "react";

export default function Cards() {
  const [toggle, setToggle] = useState("card-extra");
  /*
add usestate & useeffect to add functionality on click,
when the button is clicked, check if the currently button on display, then display either the previous or the next card
 */
  const changeCardDisplay = () => {
    if (toggle == "card-extra") {
      setToggle("card");
    } else if (toggle == "card") {
      setToggle("card-extra");
    }
  };

  /*useEffect = () => {
    let array = [
      {
        id: 1,
        title: "Total Balance",
        amount: "0.00",
      },

      {
        id: 1,
        title: "Total Balance",
        amount: "0.00",
      },

      {
        id: 1,
        title: "Total Balance",
        amount: "0.00",
      },
    ];
  };
*/
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
