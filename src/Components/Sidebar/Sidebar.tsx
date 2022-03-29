import React, { useState } from "react";
import "./Sidebar.css";
import { ReactComponent as Icon1 } from "Assets/Icons/Group1.svg";
import { ReactComponent as Icon2 } from "Assets/Icons/Group2.svg";
import { ReactComponent as Icon3 } from "Assets/Icons/Group3.svg";

function Sidebar({ tab }: any) {
  const [oneActive, setOneActive] = useState<boolean>(true);
  const [twoActive, setTwoActive] = useState<boolean>(false);
  const [threeActive, setThreeActive] = useState<boolean>(false);

  const handleClickOne = () => {
    tab("tab1");
    setOneActive(true);
    setTwoActive(false);
    setThreeActive(false);
  };
  const handleClickTwo = () => {
    tab("tab2");
    setOneActive(false);
    setTwoActive(true);
    setThreeActive(false);
  };
  const handleClickThree = () => {
    tab("tab3");
    setOneActive(false);
    setTwoActive(false);
    setThreeActive(true);
  };

  return (
    <div className="sidebar__container">
      <div
        className={`sidebar__menu__icon ${
          oneActive ? "sidebar__menu__icon-selected" : ""
        }`}
        onClick={handleClickOne}
      >
        <Icon1 />
      </div>
      <div
        className={`sidebar__menu__icon ${
          twoActive ? "sidebar__menu__icon-selected" : ""
        }`}
        onClick={handleClickTwo}
      >
        <Icon2 fill="green" />
      </div>
      <div
        className={`sidebar__menu__icon ${
          threeActive ? "sidebar__menu__icon-selected" : ""
        }`}
        onClick={handleClickThree}
      >
        <Icon3 />
      </div>
    </div>
  );
}

export default Sidebar;

// {`sidebar__menu__icon ${selected ? "sidebar__menu__icon-selected" : ""}`}
