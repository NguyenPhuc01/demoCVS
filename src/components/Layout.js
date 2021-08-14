import React, { Component } from "react";
import { enquireScreen } from "enquire-js";
import loadable from "@loadable/component";

import { Nav40DataSource, Footer10DataSource } from "../data/home.data.js";
import "../less/antMotionStyle.less";
// import ZaloCustomerChat from "./ZaloCustomerChat"

const Header = loadable(() => import("./Header"));
const Footer = loadable(() => import("./Footer"));
const CustomerChat = loadable(() => import("./CustomerChat"));

let isMobile;
enquireScreen(b => {
  isMobile = b;
});

class Layout extends Component {
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
      <div>
        <Header dataSource={Nav40DataSource} isMobile={this.state.isMobile} />
        {children}
        <CustomerChat />
        {/* <ZaloCustomerChat /> */}
        <Footer
          dataSource={Footer10DataSource}
          isMobile={this.state.isMobile}
        />
      </div>
    );
  }
}

export default Layout;
