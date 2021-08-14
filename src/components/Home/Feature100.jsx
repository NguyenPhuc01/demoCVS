import React, { useState } from 'react';
import { Row, Col, Button, Tabs } from 'antd';
import { trackEvent } from '../utils'
import { Link } from "gatsby-plugin-intl"
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
        <div style={{ textAlign: 'center' }} >Nền tảng Computer Vision đa dạng, dễ dàng sử dụng và tối ưu cho doanh nghiệp</div>
        <div style={{ textAlign: 'center', margin: '40px 0' }} >
          <img alt='img' src={DemoImage} style={{ width: '100%', maxWidth: 382 }} />
        </div>
        <Tabs defaultActiveKey="1" onChange={key => setKey(key)}>
          {content.map(tabItem => {
            const { tab, key, children, link } = tabItem
            return (
              <TabPane tab={tab} key={key}>
                <Row gutter={[32, 60]}>
                  {children.map((item, key) => {
                    const { img, title, content, link, linkEvent } = item
                    return (
                      <Col md={8} xs={24} key={key} >
                        <div className='feature100-block-item'>
                          <div className='feature100-block-item-left'>{img}</div>
                          <div className='feature100-block-item-right'>
                            <div className='feature100-block-title'>{title}</div>
                            <div className='feature100-block-description'>{content}</div>
                            {/* <Link to={link}>
                              <Button type="link" className='feature100-block-button' onClick={() => trackEvent(linkEvent || link)}>
                                Tìm hiểu thêm
                              </Button>
                            </Link> */}
                          </div>
                        </div>
                      </Col>
                    )
                  })}
                </Row>
                <div style={{ textAlign: 'center', marginTop: 56 }}>
                  <Button type="primary" onClick={() => trackEvent(link)} style={{ height: 52, color: '#fff' }} >
                    <Link to={link}>
                      TRẢI NGHIỆM NGAY
                    </Link>
                  </Button>
                </div>
              </TabPane>
            )
          })}
        </Tabs>

      </div>
    </div>
  );

}

