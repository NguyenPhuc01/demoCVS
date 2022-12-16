import React, { Component } from "react";
import { enquireScreen } from "enquire-js";
import { injectIntl } from "gatsby-plugin-intl";
import loadable from "@loadable/component";
import DemoPage4 from "./DemoPage4";

const Layout = loadable(() => import("./Layout"));
const SEO = loadable(() => import("./SEO"));

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
    console.log("data", this.props.dataFromParent);
    return (
      <>
        <SEO title="eKYC | CVS" />
        <Layout>
          <DemoPage4 />
        </Layout>
      </>
    );
  }
}

export default injectIntl(IndexPage);
