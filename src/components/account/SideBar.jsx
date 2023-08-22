import React from "react";
import accountImg from "/src/assets/myemoji.png";
import SideBarItem from "./SideBarItem";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faGear,
  faPiggyBank,
  faClockRotateLeft,
  faCreditCard,
  faUser,
  faDoorOpen,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

export default function SideBar() {
  const [toggle, setToggle] = useState("faq-hide");

  const changeToggle = () => {
    if (toggle == "faq-hide") {
      setToggle("side-nav-links");
    } else if (toggle == "side-nav-links") {
      setToggle("faq-hide");
    }
  };
  return (
    <>
      <div className="sidebar">
        <div className="side-bar-nav">
          <button className="btn" onClick={changeToggle}>
            <FontAwesomeIcon icon={faBars} />
          </button>

          <div className="account-details">
            <img src={accountImg} alt="" className="account-img" />
          </div>
        </div>

        <div id="sidebar-container" className={toggle}>
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
