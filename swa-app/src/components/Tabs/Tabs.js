import React, { useState } from "react";
import { Tabs } from "antd";

import { tabPanel } from "./Tabs.module.scss";
import TabContent from "./TabContent";

const { TabPane } = Tabs;

const listOfTabs = [
  {
    title: "planets",
  },
  {
    title: "starships",
  },
  { title: "saved" },
];

const TabsPanel = () => {
  const [activeTab, setActiveTab] = useState("planets");

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  return <Tabs className={tabPanel} onChange={handleTabChange}>
      {listOfTabs.map((item) => (
        <TabPane tab={item.title} key={item.title}>
          <TabContent activeTab={activeTab}/>
        </TabPane>
      ))}
    </Tabs>
};

export default TabsPanel;
