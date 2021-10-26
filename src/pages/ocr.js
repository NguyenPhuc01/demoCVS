import React, { Component } from "react";
import { enquireScreen } from "enquire-js";
import { injectIntl } from "gatsby-plugin-intl";
import loadable from "@loadable/component";
import queryString from "query-string";

import DemoPage from "../components/DemoPage";

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
          <DemoPage />
        </Layout>
      </>
    );
  }
}

export default injectIntl(IndexPage);
