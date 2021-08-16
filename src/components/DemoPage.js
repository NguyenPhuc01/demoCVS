import { Button, Space } from "antd";
import React, { useState } from "react";
import DemoBSX from "./BSX/DemoBSX";
import DemoCambodia from "./Cambodia/DemoCambodia";
import DemoDangKiemXe from "./DangKiemXe/DemoDangKiemXe";
import DemoDangKyDoanhNghiep from "./DangKyDoanhNghiep/DemoDangKyDoanhNghiep";
import DemoDangKyXe from "./DangKyXe/DemoDangKyXe";
import DemoTable from "./DuLieuDangBang/DemoTable";
import DemoGiayKhaiSinh from "./GiayKhaiSinh/DemoGiayKhaiSinh";
import DemoMyanmar from "./Myanmar/DemoMyanmar";
import DemoCMND from "./OCR/DemoCMND";
import DemoHoChieuQuocTe from "./Passport/DemoHoChieuQuocTe";
import DemoPhilippines from "./Philippines/DemoPhilippines";
import DemoVanBan from "./VanBan/DemoVanBan";

const types = [
  { id: 1, name: "CMND/CCCD", key: "CMND/CCCD" },
  { id: 2, name: "Hộ chiếu Việt Nam", key: "ho-chieu-vn" },
  { id: 3, name: "Giấy phép lái xe", key: "giay-phep-lai-xe" },
  { id: 4, name: "Đăng ký xe", key: "dang-ky-xe" },
  { id: 5, name: "Đăng kiểm xe", key: "dang-kiem-xe" },
  { id: 6, name: "Biển số xe", key: "bien-so-xe" },
  { id: 7, name: "Giấy khai sinh", key: "giay-khai-sinh" },
  { id: 8, name: "Đăng ký doanh nghiệp", key: "dang-ky-doanh-nghiep" },

  { id: 9, name: "Bảng điểm", key: "bang-diem" },
  { id: 10, name: "Sao kê ngân hàng", key: "sao-ke-ngan-hang" },
  { id: 11, name: "Bảng kê viện phí", key: "bang-ke-vien-phi" },
  { id: 12, name: "Báo cáo tài chính", key: "bao-cao-tai-chinh" },
  { id: 13, name: "Bảng tổng quát", key: "bang-tong-quat" },

  { id: 14, name: "Hộ chiếu quốc tế", key: "ho-chieu-quoc-te" },
  { id: 15, name: "ID Card Myanmar", key: "id-card-myanmar" },
  { id: 16, name: "ID Card Cambodia", key: "id-card-cambodia" },
  { id: 17, name: "ID Card Philippines", key: "id-card-philippines" },

  { id: 18, name: "Văn bản tổng quát", key: "van-ban-tong-quat" },
  { id: 19, name: "Hóa đơn xe", key: "hoa-don-xe" },
  { id: 20, name: "Bảng kê", key: "bang-ke" },
  { id: 21, name: "Phiếu khám bệnh", key: "phieu-kham-benh" },
  { id: 22, name: "Bồi thường bảo hiểm", key: "boi-thuong-bao-hiem" },
  { id: 23, name: "BVCare Claim", key: "bvcare-claim" }
];

export default function DemoPage() {
  const [currentType, setCurrentType] = useState("CMND/CCCD");
  const [result, setResult] = useState(null);

  const demoOptions = {
    "CMND/CCCD": <DemoCMND result={result} setResult={setResult} />,
    "ho-chieu-vn": <DemoCMND result={result} setResult={setResult} />,
    "giay-phep-lai-xe": <DemoCMND result={result} setResult={setResult} />,

    "dang-ky-xe": <DemoDangKyXe result={result} setResult={setResult} />,
    "dang-kiem-xe": <DemoDangKiemXe result={result} setResult={setResult} />,
    "bien-so-xe": <DemoBSX result={result} setResult={setResult} />,
    "giay-khai-sinh": (
      <DemoGiayKhaiSinh result={result} setResult={setResult} />
    ),
    "dang-ky-doanh-nghiep": (
      <DemoDangKyDoanhNghiep result={result} setResult={setResult} />
    ),

    "bang-diem": (
      <DemoTable
        currentType={currentType}
        result={result}
        setResult={setResult}
      />
    ),
    "sao-ke-ngan-hang": (
      <DemoTable
        currentType={currentType}
        result={result}
        setResult={setResult}
      />
    ),
    "bang-ke-vien-phi": (
      <DemoTable
        currentType={currentType}
        result={result}
        setResult={setResult}
      />
    ),
    "bao-cao-tai-chinh": (
      <DemoTable
        currentType={currentType}
        result={result}
        setResult={setResult}
      />
    ),
    "bang-tong-quat": (
      <DemoTable
        currentType={currentType}
        result={result}
        setResult={setResult}
      />
    ),

    "ho-chieu-quoc-te": (
      <DemoHoChieuQuocTe result={result} setResult={setResult} />
    ),
    "id-card-myanmar": <DemoMyanmar result={result} setResult={setResult} />,
    "id-card-cambodia": <DemoCambodia result={result} setResult={setResult} />,
    "id-card-philippines": (
      <DemoPhilippines result={result} setResult={setResult} />
    ),

    "van-ban-tong-quat": (
      <DemoVanBan
        currentType={currentType}
        result={result}
        setResult={setResult}
      />
    ),
    "hoa-don-xe": (
      <DemoVanBan
        currentType={currentType}
        result={result}
        setResult={setResult}
      />
    ),
    "bang-ke": (
      <DemoVanBan
        currentType={currentType}
        result={result}
        setResult={setResult}
      />
    ),
    "phieu-kham-benh": (
      <DemoVanBan
        currentType={currentType}
        result={result}
        setResult={setResult}
      />
    ),
    "boi-thuong-bao-hiem": (
      <DemoVanBan
        currentType={currentType}
        result={result}
        setResult={setResult}
      />
    ),
    "bvcare-claim": (
      <DemoVanBan
        currentType={currentType}
        result={result}
        setResult={setResult}
      />
    )
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
