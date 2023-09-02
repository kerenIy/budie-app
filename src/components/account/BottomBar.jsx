import React from "react";
import Buttons from "./Buttons";

import {
  faHome,
  faPiggyBank,
  faClockRotateLeft,
  faBlog,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

export default function BottomBar() {
  return (
    <>
      <div className="bottom-nav-bar">
        <Buttons icon={faHome} text="Home" />

        <Buttons icon={faPiggyBank} text="Save" />

        <Buttons icon={faClockRotateLeft} text="Track" />

        <Buttons icon={faWallet} text="Wallet" />
      </div>
    </>
  );
}
