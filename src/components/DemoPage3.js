import { Button, Space, Divider, Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "gatsby-plugin-intl";
import DemoSmartCrop from "./SmartCrop/DemoSmartCrop";
import DemoTagging from "./Tagging/DemoTagging";

const types = [
  { id: 1, name: "Smart crop", key: "smart-crop" },
  { id: 2, name: "Tagging", key: "tagging" }
];

function useQuery() {
  return new URLSearchParams(window.location.search);
}

export default function DemoPage3() {
  const [currentType, setCurrentType] = useState("smart-crop");
  const [result, setResult] = useState(null);

  let query = useQuery();

  useEffect(() => {
    let params = query.get("type");
    if (params) {
      setCurrentType(params);
    }
  }, []);

  const demoOptions = {
    "smart-crop": <DemoSmartCrop result={result} setResult={setResult} />,
    tagging: <DemoTagging result={result} setResult={setResult} />
  };

  const { TabPane } = Tabs;

  function callback(key) {
    console.log(key);
  }

  return (
    <div className="home-page-wrapper demo-wrapper">
      <div className="home-page demo">
        <div className="title-wrapper">Xử lý hình ảnh</div>
        <Divider
          style={{
            fontSize: 14,
            lineHeight: "22px",
            color: "rgba(0, 0, 0, 0.45)"
          }}
          orientation="left"
        >
          Chọn loại giấy tờ
        </Divider>
        <div className="content-wrapper">
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Sản phẩm" key="1">
              <Space
                size={[8, 8]}
                wrap
                align="center"
                style={{
                  justifyContent: "center",
                  width: "100%",
                  marginBottom: 10
                }}
              >
                {types.map(type => {
                  const { id, name, key } = type;
                  return (
                    <Link to={`?type=${key}`} key={key}>
                      <Button
                        key={id}
                        type={key === currentType ? "primary" : "default"}
                        onClick={() => {
                          setCurrentType(key);
                          setResult(null);
                        }}
                      >
                        {name}
                      </Button>
                    </Link>
                  );
                })}
              </Space>
            </TabPane>
          </Tabs>
        </div>
        <Divider
          style={{
            fontSize: 14,
            lineHeight: "22px",
            color: "rgba(0, 0, 0, 0.45)"
          }}
          orientation="left"
        >
          Vui lòng chọn ảnh demo bên dưới hoặc tải ảnh từ máy của bạn lên
        </Divider>
        <div className="upload-wrapper">{demoOptions[currentType]}</div>
      </div>
    </div>
  );
}
