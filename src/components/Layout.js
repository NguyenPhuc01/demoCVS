import React, { Component } from "react";
import { enquireScreen } from "enquire-js";
import loadable from "@loadable/component";
import "../less/antMotionStyle.less";
import { Layout } from "antd";
import Footer from "./Footer.js";

const { Content } = Layout;

const Header2 = loadable(() => import("./Header2"));

let isMobile;
enquireScreen(b => {
  isMobile = b;
});

class LayoutComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      data: "hello"
    };
  }
  // state = { data: "Hello World" };
  componentDidMount() {
    enquireScreen(b => {
      this.setState({ isMobile: !!b });
    });
  }
  render() {
    const { children } = this.props;
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Layout style={{ background: "#ffffff" }}>
          <Header2
            isMobile={this.state.isMobile}
            isloginDrawer={this.props.isloginDrawer}
            setISLoginDrawer={this.props.setISLoginDrawer}
          />
          <Content>{children}</Content>
          <Footer />
        </Layout>
      </Layout>
    );
  }
}

export default LayoutComponent;
