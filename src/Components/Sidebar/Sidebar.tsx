import React from "react";
import "./Sidebar.css";
import Icon1 from "../../Assets/Icons/Group1.png";
import Icon2 from "../../Assets/Icons/Group2.png";
import Icon3 from "../../Assets/Icons/Group3.png";

function Sidebar() {
  return (
    <div className="sidebar__container">
      <div>
        <img src={Icon1} alt="" />
      </div>
      <div>
        <img src={Icon2} alt="" />
      </div>
      <div>
        <img src={Icon3} alt="" />
      </div>
    </div>
  );
}

export default Sidebar;
