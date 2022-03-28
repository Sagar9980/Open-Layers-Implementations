import React from "react";
import "./App.css";
import Tab1 from "Tabs/Tab1/Tab1";
import Sidebar from "Components/Sidebar/Sidebar";
// import Tab2 from "Tabs/Tab2/Tab2";

function App() {
  return (
    <div className="App">
      <div className="layout__container">
        <Sidebar />
        <div className="tabs__container">
          <Tab1 />
        </div>
      </div>
    </div>
  );
}

export default App;
