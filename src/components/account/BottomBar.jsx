import React from "react";
import Buttons from "./Buttons";

import {
  faHome,
  faPiggyBank,
  faMoneyBill,
  faBlog,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

export default function BottomBar() {
  return (
    <>
      <div className="bottom-nav-bar">
        <Buttons icon={faHome} text="Home" />

        <Buttons icon={faPiggyBank} text="Save" />

        <Buttons icon={faMoneyBill} text="Invest" />

        <Buttons icon={faBlog} text="Blog" />

        <Buttons icon={faWallet} text="Wallet" />
      </div>
    </>
  );
}
