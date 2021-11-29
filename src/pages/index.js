import React, { Component } from "react";
import { enquireScreen } from "enquire-js";
import { injectIntl } from "gatsby-plugin-intl";
import loadable from "@loadable/component";

import { Feature100DataSource, SidebarDataSource } from "../data/home.data";

const Layout = loadable(() => import("../components/Layout"));
const SEO = loadable(() => import("../components/SEO"));
const Feature100 = loadable(() => import("../components/Home/Feature100"));

let isMobile;
enquireScreen(b => {
  isMobile = b;
});

class IndexPage extends Component {
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
    const { intl } = this.props;

    return (
      <>
        <SEO title="Computer Vision Vietnam" />
        <Layout>
          <Feature100
            id="Feature100"
            key="Feature100"
            dataSource={Feature100DataSource}
            isMobile={this.state.isMobile}
          />
        </Layout>
      </>
    );
  }
}

export default injectIntl(IndexPage);
