import React from "react";
import "./Sidebar.css";
import { ReactComponent as Icon1 } from "Assets/Icons/Group1.svg";
import { ReactComponent as Icon2 } from "Assets/Icons/Group2.svg";
import { ReactComponent as Icon3 } from "Assets/Icons/Group3.svg";

function Sidebar() {
  return (
    <div className="sidebar__container">
      <div className="sidebar__menu__icon sidebar__menu__icon-selected">
        <Icon1 />
      </div>
      <div className="sidebar__menu__icon">
        <Icon2 fill="green" />
      </div>
      <div className="sidebar__menu__icon">
        <Icon3 />
      </div>
    </div>
  );
}

export default Sidebar;
