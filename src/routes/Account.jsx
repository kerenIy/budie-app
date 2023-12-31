import React from "react";
import SideBar from "../components/account/SideBar";
import MainContent from "../components/account/MainContent";
import BottomBar from "../components/account/BottomBar";

export default function Account() {
  return (
    <>
      <div className="account-page">
        <SideBar />
        <MainContent />
        <BottomBar />
      </div>
    </>
  );
}
