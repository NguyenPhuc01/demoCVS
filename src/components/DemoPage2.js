import { Button, Space } from "antd";
import React, { useState } from "react";
import DemoFaceMatching from "./FaceMatching/DemoFaceMatching";
import DemoFaceSearch from "./FaceSearch/DemoFaceSearch";
import DemoSmartCrop from "./SmartCrop/DemoSmartCrop";

const types = [
  { id: 1, name: "Xác minh danh tính", key: "face-matching" },
  { id: 2, name: "Tìm kiếm khuôn mặt", key: "face-search" },
  { id: 3, name: "Tạo ảnh đại diện", key: "tao-anh-dai-dien" }
];

export default function DemoPage2() {
  const [currentType, setCurrentType] = useState("face-matching");
  // const [result, setResult] = useState(null);

  const demoOptions = {
    "face-matching": <DemoFaceMatching />,
    "face-search": <DemoFaceSearch />,
    "tao-anh-dai-dien": <DemoSmartCrop cropPerson={true} />
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
                  // setResult(null);
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
