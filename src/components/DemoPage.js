import { Button, Space, Divider } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "gatsby-plugin-intl";
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

const types1 = [
  { id: 1, name: "CMND/CCCD", key: "CMND/CCCD" },
  { id: 2, name: "Hộ chiếu Việt Nam", key: "ho-chieu-vn" },
  { id: 3, name: "Giấy phép lái xe", key: "giay-phep-lai-xe-1" },
  { id: 4, name: "Universal Passport", key: "ho-chieu-quoc-te" },
  { id: 5, name: "Giấy khai sinh", key: "giay-khai-sinh" }
];

const types2 = [
  { id: 6, name: "Giấy phép lái xe", key: "giay-phep-lai-xe-2" },
  { id: 7, name: "Đăng ký xe", key: "dang-ky-xe" },
  { id: 8, name: "Đăng kiểm xe", key: "dang-kiem-xe" },
  { id: 9, name: "Biển số xe", key: "bien-so-xe" }
];

const types3 = [
  { id: 10, name: "Hoá đơn tổng quát", key: "hoa-don-full" },
  { id: 11, name: "Giấy đăng ký doanh nghiệp", key: "dang-ky-doanh-nghiep" }
];

const types4 = [
  { id: 12, name: "Giấy ra viện", key: "giay-ra-vien" },
  { id: 13, name: "Báo giá xe", key: "bao-gia-xe" },
  { id: 14, name: "BVCare Claim", key: "bvcare-claim" },
  { id: 15, name: "Hoá đơn xe", key: "hoa-don-xe" },
  { id: 16, name: "Hóa đơn viện phí", key: "pvi-hoa-don" }
];

const types5 = [
  { id: 17, name: "ID Card Myanmar", key: "id-card-myanmar" },
  { id: 18, name: "ID Card Cambodia", key: "id-card-cambodia" },
  { id: 19, name: "ID Card Philippines", key: "id-card-philippines" }
];

const types6 = [
  { id: 20, name: "Bảng tổng quát", key: "bang-tong-quat" },
  { id: 21, name: "Văn bản tổng quát", key: "van-ban-tong-quat" }
];

function useQuery() {
  return new URLSearchParams(window.location.search);
}

export default function DemoPage() {
  const [currentType, setCurrentType] = useState("CMND/CCCD");
  const [result, setResult] = useState(null);

  // let test = () => {
  //   console.log(window.location.search);
  // };

  // useEffect(() => {
  //   let regex = /\?type=([^&]*)/;
  //   let locationType = window.location.search;
  //   if (regex.test(locationType)) {
  //     console.log(locationType.match(regex));
  //     setCurrentType(locationType.match(regex)[1]);
  //   }
  // }, []);

  let query = useQuery();

  useEffect(() => {
    // console.log(query.get("type"));
    let params = query.get("type");
    if (params) {
      setCurrentType(params);
    }
  }, []);

  const demoOptions = {
    "CMND/CCCD": <DemoCMND result={result} setResult={setResult} />,
    "ho-chieu-vn": <DemoCMND result={result} setResult={setResult} />,
    "giay-phep-lai-xe-1": <DemoCMND result={result} setResult={setResult} />,
    "giay-phep-lai-xe-2": <DemoCMND result={result} setResult={setResult} />,

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
    "hoa-don-vat": (
      <DemoVanBan
        currentType={currentType}
        result={result}
        setResult={setResult}
      />
    ),
    "hoa-don-full": (
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
    ),
    "giay-ra-vien": (
      <DemoVanBan
        currentType={currentType}
        result={result}
        setResult={setResult}
      />
    ),
    "bao-gia-xe": (
      <DemoVanBan
        currentType={currentType}
        result={result}
        setResult={setResult}
      />
    ),
    "pvi-hoa-don": (
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
        <div className="title-wrapper">Nhận diện ký tự</div>
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
          <div className="content-layout">
            <p style={{ width: 150 }}>Giấy tờ tuỳ thân: </p>
            <Space
              size={[8, 8]}
              wrap
              align="center"
              style={{
                justifyContent: "flex-start",
                width: "100%",
                marginBottom: 10
              }}
            >
              {types1.map(type => {
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
          </div>

          <div className="content-layout">
            <p style={{ width: 150 }}>Giấy tờ xe: </p>
            <Space
              size={[8, 8]}
              wrap
              align="center"
              style={{
                justifyContent: "flex-start",
                width: "100%",
                marginBottom: 10
              }}
            >
              {types2.map(type => {
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
          </div>

          <div className="content-layout" style={{ marginBottom: 6 }}>
            <p style={{ width: 150 }}>Tài liệu doanh nghiệp: </p>
            <Space
              size={[8, 8]}
              wrap
              align="center"
              style={{
                justifyContent: "flex-startr",
                width: "100%",
                marginBottom: 10
              }}
            >
              {types3.map(type => {
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
          </div>

          <div className="content-layout">
            <p style={{ width: 150 }}>Giấy tờ bảo hiểm: </p>
            <Space
              size={[8, 8]}
              wrap
              align="center"
              style={{
                justifyContent: "flex-start",
                width: "100%",
                marginBottom: 10
              }}
            >
              {types4.map(type => {
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
          </div>

          <div className="content-layout">
            <p style={{ width: 150 }}> SEA ID Card: </p>
            <Space
              size={[8, 8]}
              wrap
              align="center"
              style={{
                justifyContent: "flex-start",
                width: "100%",
                marginBottom: 10
              }}
            >
              {types5.map(type => {
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
          </div>

          <div className="content-layout">
            <p style={{ width: 150 }}>Khác: </p>
            <Space
              size={[8, 8]}
              wrap
              align="center"
              style={{
                justifyContent: "flex-startr",
                width: "100%",
                marginBottom: 10
              }}
            >
              {types6.map(type => {
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
          </div>
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
