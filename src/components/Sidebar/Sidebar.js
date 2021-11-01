import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { trackEvent } from "../utils";
import { Link } from "gatsby-plugin-intl";

const { Sider } = Layout;

class Sidebar2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed:
        localStorage.getItem("stateCollapsed") === "false" ? false : true
    };
  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
    localStorage.setItem("stateCollapsed", collapsed);
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={this.onCollapse}
        width={240}
      >
        <div className="logo">
          <Link to="/" onClick={() => trackEvent("/")}>
            <img
              src="/Web_logo.png"
              alt="img"
              width="100%"
              height="auto"
              style={{ padding: "24px 12px 20px" }}
            />
          </Link>
        </div>
        <Menu theme="dark" mode="inline" selectedKeys={[]} className="sidebar">
          <Menu.Item
            key="1"
            icon={<img src="/Vector1.png" alt="img" />}
            className="sidebar"
            style={{ height: 56 }}
          >
            <Link to="/" onClick={this.handle}>
              Trang chủ
            </Link>
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<img src="/Vector2.png" alt="img" />}
            className="sidebar"
            style={{ height: 56 }}
          >
            <Link to="/ocr" onClick={() => trackEvent("/")}>
              Nhận diện ký tự
            </Link>
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<img src="/Vector3.png" alt="img" />}
            className="sidebar"
            style={{ height: 56 }}
          >
            <Link to="/ekyc" onClick={() => trackEvent("/")}>
              eKYC
            </Link>
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<img src="/Vector4.png" alt="img" />}
            className="sidebar"
            style={{ height: 56 }}
          >
            <Link to="/facial-recognition" onClick={() => trackEvent("/")}>
              Nhận diện khuôn mặt
            </Link>
          </Menu.Item>
          <Menu.Item
            key="4"
            icon={<img src="/Vector5.png" alt="img" />}
            className="sidebar"
            style={{ height: 56 }}
          >
            <Link to="/image-recognition" onClick={() => trackEvent("/")}>
              Xử lý hình ảnh
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default Sidebar2;
