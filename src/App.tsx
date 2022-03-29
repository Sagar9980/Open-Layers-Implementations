import React, { useState } from "react";
import "./App.css";
import Tab1 from "Tabs/Tab1/Tab1";
import Sidebar from "Components/Sidebar/Sidebar";
import Tab2 from "Tabs/Tab2/Tab2";
import Tab3 from "Tabs/Tab3/Tab3";

function App() {
  const [currentTab, setCurrentTab] = useState<string>("");
  return (
    <div className="App">
      <div className="layout__container">
        <Sidebar tab={(tab: any) => setCurrentTab(tab)} />
        <div className="tabs__container">
          {(() => {
            switch (currentTab) {
              case "tab1":
                return <Tab1 />;

              case "tab2":
                return <Tab2 />;

              case "tab3":
                return <Tab3 />;
              default:
                return <Tab1 />;
            }
          })()}
        </div>
      </div>
    </div>
  );
}

export default App;
