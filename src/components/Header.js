import React from "react";
import TweenOne from "rc-tween-one";
import { Menu, Select, Button, Space } from "antd";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import { trackEvent } from "../components/utils";
import { IntlContextConsumer, changeLocale, Link } from "gatsby-plugin-intl";
import styled from "styled-components";

const { SubMenu, Item } = Menu;
const { Option } = Select;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: undefined,
      isMobile: false
    };
  }
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    let currentHideNav = window.innerWidth <= 767;
    if (currentHideNav !== this.state.isMobile) {
      this.setState({ isMobile: currentHideNav });
    }
  }

  phoneClick = () => {
    const phoneOpen = !this.state.phoneOpen;
    this.setState({
      phoneOpen
    });
  };

  handleChange = () => {};

  render() {
    const { dataSource } = this.props;
    const { phoneOpen, isMobile } = this.state;
    const { Menu: navData, wrapper, page, MenuMobile: navData2 } = dataSource;
    const moment = phoneOpen === undefined ? 300 : null;

    return (
      <header className={wrapper.className}>
        <div className={`${page.className}${phoneOpen ? " open" : ""}`}>
          <div {...dataSource.logo}>
            <Link to="/" onClick={() => trackEvent("/")}>
              <img
                src={dataSource.logo.children}
                alt="img"
                width={277}
                height={48.8}
              />
            </Link>
          </div>
          {isMobile && (
            <div
              {...dataSource.mobileMenu}
              onClick={() => {
                this.phoneClick();
              }}
              onKeyDown={() => {
                this.phoneClick();
              }}
              role="button"
              tabIndex="0"
            >
              <em />
              <em />
              <em />
            </div>
          )}
          <TweenOne
            {...dataSource.Menu}
            animation={
              isMobile
                ? {
                    x: 0,
                    height: 0,
                    duration: 300,
                    onComplete: e => {
                      if (this.state.phoneOpen) {
                        e.target.style.height = "auto";
                      }
                    },
                    ease: "easeInOutQuad"
                  }
                : null
            }
            moment={moment}
            reverse={!!phoneOpen}
          >
            <MenuTop>
              {!isMobile && (
                <Space size={24}>
                  <OutboundLink
                    href="tel:+84886625220"
                    target="_blank"
                    style={{ color: "#000" }}
                    rel="noopener noreferrer"
                  >
                    +84 886625220
                  </OutboundLink>
                  <OutboundLink
                    href="mailto:sales@computervision.com.vn"
                    target="_blank"
                    style={{ color: "#000" }}
                    rel="noopener noreferrer"
                  >
                    sales@computervision.com.vn
                  </OutboundLink>
                  <div
                    style={{
                      height: 20,
                      width: 1,
                      background: "rgba(0,0,0,0.2)"
                    }}
                  />
                  <OutboundLink
                    href="https://computervision.com.vn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button type="text" style={{ fontSize: 13, color: "#000" }}>
                      https://computervision.com.vn
                    </Button>
                  </OutboundLink>
                </Space>
              )}
            </MenuTop>
            <Menu mode={isMobile ? "inline" : "horizontal"} theme="light">
              {(isMobile ? navData2 : navData).children.map(item => {
                if (item.subItem) {
                  const { subItem } = item;
                  return (
                    <SubMenu
                      title={
                        <div className="header3-item-block">{item.title}</div>
                      }
                      key={item.name}
                      className={item.className}
                      popupClassName="header3-sub-item"
                    >
                      {subItem.map($item => {
                        return (
                          <Item key={$item.name}>
                            {$item.to ? (
                              <Link
                                to={$item.to}
                                onClick={() => trackEvent($item.to)}
                              >
                                {$item.text}
                              </Link>
                            ) : (
                              <OutboundLink
                                href={$item.href}
                                target={$item.target}
                                rel="noopener noreferrer"
                              >
                                {$item.text}
                              </OutboundLink>
                            )}
                          </Item>
                        );
                      })}
                    </SubMenu>
                  );
                }
                return (
                  <Item key={item.name} className={item.className}>
                    {item.to ? (
                      <Link
                        to={item.to}
                        className="header3-item-block"
                        onClick={() => trackEvent(item.to)}
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <OutboundLink
                        href={item.href}
                        className="header3-item-block"
                        target={item.target}
                        rel="noopener noreferrer"
                      >
                        {item.title}
                      </OutboundLink>
                    )}
                  </Item>
                );
              })}
              {/* <Item key="select-language" className="header3-select-language">
                <IntlContextConsumer>
                  {({ languages, language: currentLocale }) =>
                    <Select defaultValue={currentLocale} onChange={value => changeLocale(value)} className="select-language">
                      <Option value="vi">Tiếng Việt</Option>
                      <Option value="en">English</Option>
                    </Select>
                  }
                </IntlContextConsumer>
              </Item> */}
            </Menu>
          </TweenOne>
        </div>
      </header>
    );
  }
}

export default Header;

const MenuTop = styled.div`
  text-align: right;
  padding: 8px 20px;
  font-size: 13px;
  position: relative;
  top: 12px;
`;
