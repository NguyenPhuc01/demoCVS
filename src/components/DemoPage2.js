import { Button, Space, Divider } from "antd";
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
  const [result, setResult] = useState(null);

  const demoOptions = {
    "face-matching": <DemoFaceMatching result={result} setResult={setResult} />,
    "face-search": <DemoFaceSearch result={result} setResult={setResult} />,
    "tao-anh-dai-dien": (
      <DemoSmartCrop cropPerson={true} result={result} setResult={setResult} />
    )
  };

  return (
    <div className="home-page-wrapper demo-wrapper">
      <div className="home-page demo">
        <div className="title-wrapper">Nhận diện khuôn mặt</div>
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
