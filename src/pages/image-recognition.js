import React, { Component } from "react";
import { enquireScreen } from "enquire-js";
import { injectIntl } from "gatsby-plugin-intl";
import loadable from "@loadable/component";
import DemoPage3 from "../components/DemoPage3";
import { BrowserRouter as Router } from "react-router-dom";

const Layout = loadable(() => import("../components/Layout"));
const SEO = loadable(() => import("../components/SEO"));

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
        <Router>
          <SEO title="Computer Vision Vietnam" />
          <Layout>
            <DemoPage3 />
          </Layout>
        </Router>
      </>
    );
  }
}

export default injectIntl(IndexPage);
