import React, { Component } from "react";
import { Row, Col, Space } from "antd";
import { getChildrenToRender } from "./utils";
import { isImg, trackEvent } from "./utils";
import { FormattedMessage, Link } from "gatsby-plugin-intl";
import { FacebookOutlined, LinkedinOutlined } from "@ant-design/icons";
import { OutboundLink } from "gatsby-plugin-google-gtag";

class Footer extends Component {
  static defaultProps = {
    className: "footer1"
  };

  getLiChildren = data =>
    data.map((item, i) => {
      const { title, childWrapper, ...itemProps } = item;
      return (
        <Col key={i.toString()} {...itemProps} title={null} content={null}>
          <div {...title} />
          <div {...childWrapper}>
            {childWrapper.children.map(getChildrenToRender)}
          </div>
        </Col>
      );
    });

  render() {
    const { ...props } = this.props;
    const { dataSource, isMobile } = props;
    delete props.dataSource;
    delete props.isMobile;
    const childrenToRender = this.getLiChildren(dataSource.block.children);
    return (
      <div {...props} {...dataSource.wrapper}>
        <div {...dataSource.OverPack}>
          <div {...dataSource.copyrightWrapper}>
            <div {...dataSource.copyrightPage}>
              <div {...dataSource.copyright}>
                {dataSource.copyright.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
