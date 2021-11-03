import React, { Component } from "react";
import { enquireScreen } from "enquire-js";
import loadable from "@loadable/component";

import { Nav40DataSource, Footer10DataSource } from "../data/home.data.js";
import "../less/antMotionStyle.less";
// import ZaloCustomerChat from "./ZaloCustomerChat"
import { Layout } from "antd";
import Sidebar from "./Sidebar/Sidebar.js";
import Footer2 from "./Footer2.js";

const { Sider, Content } = Layout;

const Header2 = loadable(() => import("./Header2"));
const Footer = loadable(() => import("./Footer"));
const CustomerChat = loadable(() => import("./CustomerChat"));

let isMobile;
enquireScreen(b => {
  isMobile = b;
});

class LayoutComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile
    };
  }
  componentDidMount() {
    enquireScreen(b => {
      this.setState({ isMobile: !!b });
    });
  }
  render() {
    const { children } = this.props;
    return (
      <Layout style={{ height: "100vh" }}>
        <Sidebar />
        <Layout style={{ background: "#ffffff", overflowY: "scroll" }}>
          <Header2 isMobile={this.state.isMobile} />
          <Content>{children}</Content>
        </Layout>
      </Layout>
    );
  }
}

export default LayoutComponent;
