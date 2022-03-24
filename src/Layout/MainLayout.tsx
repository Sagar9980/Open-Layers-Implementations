import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
// import Location from "Components/Location/Location";
// import Map from "Components/Map/Map";

function MainLayout(props: any) {
  return (
    <div className="layout__container">
      <Sidebar />

      <div>{props.children}</div>
      {/* <div>
        <Location />
      </div>
      <div>
        <Map />
      </div> */}
    </div>
  );
}

export default MainLayout;
