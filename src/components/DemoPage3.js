import { Button, Space } from "antd";
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
        <div className="title-wrapper">
          Tải lên hình ảnh của bạn hoặc chọn một mẫu thử có sẵn và xem kết quả
        </div>
        <Space
          size={[8, 8]}
          wrap
          align="center"
          style={{ justifyContent: "center", width: "100%", marginBottom: 50 }}
        >
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
        {demoOptions[currentType]}
      </div>
    </div>
  );
}
