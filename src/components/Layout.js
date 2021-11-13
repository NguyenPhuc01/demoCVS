import React, { Component } from "react";
import { enquireScreen } from "enquire-js";
import loadable from "@loadable/component";

import { Nav40DataSource, Footer10DataSource } from "../data/home.data.js";
import "../less/antMotionStyle.less";
// import ZaloCustomerChat from "./ZaloCustomerChat"
import { Layout } from "antd";
import Sidebar from "./Sidebar/Sidebar.js";
import Footer from "./Footer.js";

const { Content } = Layout;

const Header2 = loadable(() => import("./Header2"));
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
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout style={{ background: "#ffffff" }}>
          <Header2 isMobile={this.state.isMobile} />
          <Content>{children}</Content>
          <Footer />
        </Layout>
      </Layout>
    );
  }
}

export default LayoutComponent;
