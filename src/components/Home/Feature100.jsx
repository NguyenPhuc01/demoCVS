import React, { useState } from 'react';
import { Row, Col, Button, Tabs, Card } from 'antd';
import { trackEvent } from '../utils'
import { Link } from "gatsby-plugin-intl"
import styled from "styled-components";
import DemoImage from '../../../static/demo.jpg'

const { TabPane } = Tabs;

export default function Feature100(props) {
  const { dataSource, isMobile, ...rest } = props;
  const {
    wrapper,
    titleWrapper,
    page,
    content,
  } = dataSource;

  const [key, setKey] = useState('1')

  return (
    <div {...rest} {...wrapper}>
      <div {...page}>
        <div {...titleWrapper} />
    <div >
      <Row gutter={[30, 16]}>
        <Col md={8} xs={24}>
          <Link to="/ocr" onClick={() => trackEvent("/")}>
            <div style={{border:"1px solid #E9E9E9", boxSizing:"border-box", borderRadius: 8}}>
              <div>
                <img src="Frame6.png" alt="image" style={{maxWidth: "100%"}} />
              </div>
              <div>
                <Styled>Nhận Diện Ký Tự</Styled>
                <p style={{paddingLeft:16, paddingRight:16, marginBottom:18, fontSize:13, color:"#000000D9"}}>Giấy tờ tùy thân, Giấy tờ xe, Hóa đơn, Dữ liệu bảng, ...</p>
              </div>
            </div>
          </Link>
        </Col>
        <Col md={8} xs={24}>
          <Link to="/facial-recognition" onClick={() => trackEvent("/")}>
            <div style={{border:"1px solid #E9E9E9", boxSizing:"border-box", borderRadius: 8}}>
              <div>
                <img src="Frame7.png" alt="image" style={{maxWidth: "100%"}} />
              </div>
              <div>
                <Styled>Nhận Diện Khuôn Mặt</Styled>
                <p style={{paddingLeft:16, paddingRight:16, marginBottom:18, fontSize:13, color:"#000000D9"}}>Giấy tờ tùy thân, Giấy tờ xe, Hóa đơn, Dữ liệu bảng, ...</p>
              </div>
            </div>
          </Link>
        </Col>
        <Col md={8} xs={24}>
          <Link to="/image-recognition" onClick={() => trackEvent("/")}>
            <div style={{border:"1px solid #E9E9E9", boxSizing:"border-box", borderRadius: 8, overflow:"hidden"}}>
              <div>
                <img src="Frame8.png" alt="image" style={{maxWidth: "100%"}} />
              </div>
              <div>
                <Styled>Xử Lý Hình Ảnh</Styled>
                <p style={{paddingLeft:16, paddingRight:16, marginBottom:18, fontSize:13, color:"#000000D9"}}>Smart Crop, Tagging</p>
              </div>
            </div>
          </Link>
        </Col>
        <Col md={8} xs={24}>
          <Link to="/ekyc" onClick={() => trackEvent("/")}>
            <div style={{border:"1px solid #E9E9E9", boxSizing:"border-box", borderRadius: 8, overflow:"hidden"}}>
              <div>
                <img src="Frame9.png" alt="image" style={{maxWidth: "100%"}} />
              </div>
              <div>
                <Styled>eKYC</Styled>
                <p style={{paddingLeft:16, paddingRight:16, marginBottom:18, fontSize:13, color:"#000000D9"}}>Định danh khách hàng trực tuyến</p>
              </div>
            </div>
          </Link>
        </Col>
      </Row>
    </div>
      </div>
    </div>
  );
}

const Styled = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 240%;
  padding-left: 16px;
  padding-right: 16px;
  color: #000000D9;
`;

