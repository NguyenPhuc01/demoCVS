import React, { Component, useState } from "react";
import { Button, Drawer, Dropdown, Space, Menu } from "antd";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import { ContactFormDataSource } from "../data/home.data";
import ContactForm from "./Home/ContactForm";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { DownOutlined, SmileOutlined, UserOutlined } from "@ant-design/icons";
import { gapi } from "gapi-script";
import axios from "axios";

const Header2 = ({ isloginDrawer, setISLoginDrawer }) => {
  const [visible, setVisible] = useState(false);
  const [dataLogin, setDataLogin] = useState(
    JSON.parse(localStorage.getItem("dataUserLogin"))
  );
  const showDrawer = () => {
    setVisible(true);
  };

  const showLogin = () => {
    setISLoginDrawer(true);
  };

  //   console.log(localStorage.getItem("show"));
  // }
  // componentWillUnmount() {
  //   gapi.load("client:auth2", () => {
  //     gapi.auth2.init({
  //       clientId:
  //         "491845432253-3i8n6cora433poudseeiekbt5hfi5kcu.apps.googleusercontent.com"
  //     });
  //   });
  // }

  const onSuccess = success => {
    console.log("login success", success.profileObj.givenName);
    const dataUser = success.profileObj;
    const data = {
      Email: dataUser.email,
      FamilyName: dataUser.familyName,
      GivenName: dataUser.givenName,
      GoogleId: dataUser.googleId,
      ImageUrl: dataUser.imageUrl,
      Name: dataUser.name
    };
    axios
      .post(
        "https://sheet.best/api/sheets/99412127-13e2-443b-b9bf-320efae4e230",
        data
      )
      .then(response => {
        console.log({response});
      });
    localStorage.setItem("dataUserLogin", JSON.stringify(dataUser));

    setDataLogin(success.profileObj);
    setISLoginDrawer(false);
  };

  const onFail = fail => {
    console.log("login fail", fail);
  };
  const onClose = () => {
    setVisible(false);
  };
  const onCloseLogin = () => {
    setISLoginDrawer(false);
    localStorage.setItem("show", false);
  };
  const onLogout = out => {
    console.log("logout success", out);
    localStorage.removeItem("dataUserLogin");
    setDataLogin(null);
  };

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
              onLogoutSuccess={onLogout}
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
            onClick={showDrawer}
          >
            LIÊN HỆ DÙNG THỬ
          </Button>

          {dataLogin !== null ? (
            <Button style={{ marginRight: "20px", height: "36px" }}>
              <Dropdown overlay={menu}>
                <Space>
                  {dataLogin?.givenName}
                  <DownOutlined />
                </Space>
              </Dropdown>
            </Button>
          ) : (
            <Button
              type="deonCloseLoginfault"
              style={{ marginRight: "20px", height: "36px" }}
              onClick={showLogin}
            >
              Đăng Nhập
            </Button>
          )}
          <Drawer
            title="Login"
            width={472}
            onClose={onCloseLogin}
            visible={isloginDrawer}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <GoogleLogin
                clientId="491845432253-3i8n6cora433poudseeiekbt5hfi5kcu.apps.googleusercontent.com"
                buttonText="Tiếp tục với google"
                onSuccess={onSuccess}
                onFailure={onFail}
                cookiePolicy={"single_host_origin"}
                style={{ boxShadow: "none" }}
                isSignedIn={true}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "50px"
              }}
            >
              Đăng nhập để sử dụng{" "}
            </div>
          </Drawer>

          <Drawer
            title="Liên hệ dùng thử"
            width={572}
            onClose={onClose}
            visible={visible}
            extra={
              <Space>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={onClose} type="primary">
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
              // isMobile={isMobile}
            />
          </Drawer>
        </div>
      </div>
    </header>
  );
};

export default Header2;
