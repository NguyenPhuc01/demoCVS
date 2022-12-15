import React, { Component } from "react";
import { Button, Drawer, Dropdown, Space, Menu } from "antd";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import { ContactFormDataSource } from "../data/home.data";
import ContactForm from "./Home/ContactForm";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { DownOutlined, SmileOutlined, UserOutlined } from "@ant-design/icons";
import { gapi } from "gapi-script";
export class Header2 extends Component {
  state = { visible: false };
  state = { dataLogin: null };
  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  // ComponentDidMount() {
  //   gapi.load("client:auth2", () => {
  //     gapi.auth2.init({
  //       clientId:
  //         "491845432253-3i8n6cora433poudseeiekbt5hfi5kcu.apps.googleusercontent.com"
  //     });
  //   });
  // }
  store = mail => {
    var emails = [];
    emails.push(mail);
    localStorage.setItem("email", JSON.stringify(emails));
  };

  onSuccess = success => {
    console.log("login success", success.profileObj.givenName);
    const đataUser = success.profileObj;
    this.store(đataUser);
    this.setState({
      dataLogin: success.profileObj
    });
  };

  onFail = fail => {
    console.log("login fail", fail);
  };
  onClose = () => {
    this.setState({
      visible: false
    });
  };
  onLogout = out => {
    console.log("logout success", out);
    this.setState({
      dataLogin: null
    });
  };

  render() {
    if (this.state.dataLogin !== null) {
      this.store(this.state.dataLogin);
    }
    console.log(this.state.dataLogin);
    const menu = (
      <Menu
        items={[
          {
            key: "1",
            label: (
              <GoogleLogout
                clientId="491845432253-3i8n6cora433poudseeiekbt5hfi5kcu.apps.googleusercontent.com"
                buttonText="Logout"
                render={renderProps => (
                  <Button
                    onClick={renderProps.onClick}
                    style={{
                      marginRight: "20px",
                      width: "100%",
                      height: "36px"
                    }}
                  >
                    Logout
                    <UserOutlined />
                  </Button>
                )}
                onLogoutSuccess={this.onLogout}
              />
            )
          }
        ]}
      />
    );

    return (
      <header style={{ height: 56, width: "100%", background: "#FFFFFF" }}>
        <div className="header-wrapper">
          <div style={{ lineHeight: 4 }}>
            <OutboundLink
              href="https://computervision.com.vn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button type="text" style={{ fontSize: 13, color: "red" }}>
                <img
                  src="/globe-outline.svg"
                  alt="image"
                  style={{ marginRight: 10 }}
                />
                www.computervision.com.vn
              </Button>
            </OutboundLink>
          </div>
          <div style={{ lineHeight: 4 }}>
            <Button
              type="default"
              style={{
                height: 36,
                fontSize: 12,
                borderColor: "red",
                color: "red",
                marginRight: 20
              }}
              onClick={this.showDrawer}
            >
              LIÊN HỆ DÙNG THỬ
            </Button>

            {this.state.dataLogin !== null ? (
              <Button style={{ marginRight: "20px", height: "36px" }}>
                <Dropdown overlay={menu}>
                  <Space>
                    {this.state.dataLogin?.givenName}
                    <DownOutlined />
                  </Space>
                </Dropdown>
              </Button>
            ) : (
              <GoogleLogin
                clientId="491845432253-3i8n6cora433poudseeiekbt5hfi5kcu.apps.googleusercontent.com"
                buttonText=""
                render={renderProps => (
                  <Button
                    onClick={renderProps.onClick}
                    style={{ height: "36px", marginRight: "20px" }}
                  >
                    <UserOutlined />
                  </Button>
                )}
                onSuccess={this.onSuccess}
                onFailure={this.onFail}
                cookiePolicy={"single_host_origin"}
                style={{ boxShadow: "none" }}
                isSignedIn={true}
              />
            )}

            <Drawer
              title="Liên hệ dùng thử"
              width={572}
              onClose={this.onClose}
              visible={this.state.visible}
              //   bodyStyle={{ paddingBottom: 80 }}
              extra={
                <Space>
                  <Button onClick={this.onClose}>Cancel</Button>
                  <Button onClick={this.onClose} type="primary">
                    Submit
                  </Button>
                </Space>
              }
            >
              <div style={{ marginBottom: 20, marginLeft: 24 }}>
                <OutboundLink
                  href="tel:0982925220"
                  target="_blank"
                  style={{ color: "#EC1C2A" }}
                  rel="noopener noreferrer"
                >
                  0982 925 220
                </OutboundLink>
              </div>
              <div style={{ marginBottom: 20, marginLeft: 24 }}>
                <OutboundLink
                  href="mailto:sales@computervision.com.vn"
                  target="_blank"
                  style={{ color: "#EC1C2A" }}
                  rel="noopener noreferrer"
                >
                  sales@computervision.com.vn
                </OutboundLink>
              </div>
              <ContactForm
                id="ContactForm"
                key="ContactForm"
                dataSource={ContactFormDataSource}
                isMobile={this.state.isMobile}
              />
            </Drawer>
          </div>
        </div>
      </header>
    );
  }
}

export default Header2;
