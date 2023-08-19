import React from "react";
import accountImg from "/src/assets/myemoji.png";
import SideBarItem from "./SideBarItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faPiggyBank } from "@fortawesome/free-solid-svg-icons";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export default function SideBar() {
  return (
    <>
      <div className="sidebar">
        <div className="account-details">
          <img src={accountImg} alt="" className="account-img" />
          <p>tein</p>
        </div>

        <div className="sidebar-container">
          <div className="side-links">
            <SideBarItem icon={faPaperPlane} title="Budgets" />
            <SideBarItem icon={faPiggyBank} title="Savings" />
            <SideBarItem icon={faClockRotateLeft} title="History" />
            <SideBarItem icon={faCreditCard} title="Subscriptions" />
          </div>

          <div className="side-links-user">
            <SideBarItem icon={faUser} title="Account" />
            <SideBarItem icon={faGear} title="Settings" />
            <SideBarItem icon={faDoorOpen} title="Log Out" />
          </div>
        </div>
      </div>
    </>
  );
}
