import React from "react";
import "./Location.css";
import { ReactComponent as Flag } from "Assets/Icons/flag.svg";
function Location() {
  return (
    <div className="location__container">
      <div className="location__one">
        <div className="location__heading__section">
          <Flag />
          <p className="location__title">Location 1</p>
        </div>
        <div className="location__detail__section">
          <div className="location__lat">
            <h5>Lat</h5>
            <h4>37.56755685</h4>
          </div>
          <div className="location__long">
            <h5>Long</h5>
            <h4>126.97328373</h4>
          </div>
        </div>
      </div>
      <hr />
      <div className="location__two">
        <div className="location__heading__section">
          <Flag />
          <p className="location__title">Location 2</p>
        </div>
      </div>
      <hr />
      <div className="location__three">
        <div className="location__heading__section">
          <Flag />
          <p className="location__title">Location 3</p>
        </div>
      </div>
    </div>
  );
}

export default Location;
