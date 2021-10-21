import { Button, Space, Divider } from "antd";
import React, { useState } from "react";
import DemoSmartCrop from "./SmartCrop/DemoSmartCrop";
import DemoTagging from "./Tagging/DemoTagging";

const types = [
  { id: 1, name: "Smart crop", key: "smart-crop" },
  { id: 2, name: "Tagging", key: "tagging" }
];

export default function DemoPage3() {
  const [currentType, setCurrentType] = useState("smart-crop");
  const [result, setResult] = useState(null);

  const demoOptions = {
    "smart-crop": <DemoSmartCrop result={result} setResult={setResult} />,
    tagging: <DemoTagging result={result} setResult={setResult} />
  };

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
          <Space
            size={[8, 8]}
            wrap
            align="center"
            style={{
              justifyContent: "flex-startr",
              width: "100%",
              marginBottom: 50
            }}
          >
            <p style={{ width: 150 }}>Sản phẩm:</p>
            {types.map(type => {
              const { id, name, key } = type;
              return (
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
              );
            })}
          </Space>
        </div>
        {demoOptions[currentType]}
      </div>
    </div>
  );
}
