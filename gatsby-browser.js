import { Layout } from "antd";
import React from "react";
import loadable from "@loadable/component";

import Sidebar2 from "./src/components/Sidebar/Sidebar";

export const wrapPageElement = ({ element, props }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar2></Sidebar2>
      <Layout>{element}</Layout>
    </Layout>
  );
};
