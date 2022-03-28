import React from "react";
import Location from "Components/Location/Location";
import Map from "Components/Map/MapView";

function Tab1() {
  return (
    <div className="tab__one__container">
      <Location />
      <Map />
    </div>
  );
}

export default Tab1;
