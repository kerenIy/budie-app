import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function SideBarItem(props) {
  return (
    <>
      <div className="sidebar-item">
        <span>
          <FontAwesomeIcon icon={props.icon} />
        </span>
        <p>{props.title}</p>
      </div>
    </>
  );
}
