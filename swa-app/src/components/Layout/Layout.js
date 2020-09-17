import React from "react";
import { Layout } from "antd";

import { appHeader, layout } from "./Layout.module.scss";

const AppLayout = ({ children }) => {
  return (
    <Layout className={layout}>
      <header className={appHeader}>Star Wars App</header>
      {children}
    </Layout>
  );
};

export default AppLayout;
