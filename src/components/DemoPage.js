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
  { id: 3, name: "Hộ chiếu quốc tế", key: "ho-chieu-quoc-te" },
  { id: 4, name: "Giấy khai sinh", key: "giay-khai-sinh" }
];

const types2 = [
  { id: 5, name: "Giấy phép lái xe", key: "giay-phep-lai-xe" },
  { id: 6, name: "Đăng ký xe", key: "dang-ky-xe" },
  { id: 7, name: "Đăng kiểm xe", key: "dang-kiem-xe" },
  { id: 8, name: "Biển số xe", key: "bien-so-xe" }
];

const types3 = [
  { id: 9, name: "Hóa đơn xe", key: "hoa-don-xe" },
  { id: 10, name: "PVI Hóa đơn", key: "pvi-hoa-don" }
];

const types4 = [
  { id: 11, name: "ID Card Myanmar", key: "id-card-myanmar" },
  { id: 12, name: "ID Card Cambodia", key: "id-card-cambodia" },
  { id: 13, name: "ID Card Philippines", key: "id-card-philippines" }
];

const types5 = [
  { id: 14, name: "Bảng điểm", key: "bang-diem" },
  { id: 15, name: "Sao kê ngân hàng", key: "sao-ke-ngan-hang" },
  { id: 16, name: "Báo cáo tài chính", key: "bao-cao-tai-chinh" },
  { id: 17, name: "Bảng tổng quát", key: "bang-tong-quat" },
  { id: 18, name: "Bảng kê", key: "bang-ke" },
  { id: 19, name: "Bảng kê viện phí", key: "bang-ke-vien-phi" }
];

const types6 = [
  { id: 20, name: "Đăng ký doanh nghiệp", key: "dang-ky-doanh-nghiep" },
  { id: 21, name: "Phiếu khám bệnh", key: "phieu-kham-benh" },
  { id: 22, name: "Bồi thường bảo hiểm", key: "boi-thuong-bao-hiem" },
  { id: 23, name: "BVCare Claim", key: "bvcare-claim" },
  { id: 24, name: "Văn bản tổng quát", key: "van-ban-tong-quat" },
  { id: 25, name: "Hóa đơn VAT", key: "hoa-don-vat" }
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
    "hoa-don-vat": (
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
            <p style={{ width: 150 }}>Giấy tờ tuỳ thân: </p>
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
            <p style={{ width: 150 }}>Giấy tờ xe: </p>
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
            <p style={{ width: 150 }}>Hoá đơn: </p>
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
            <p style={{ width: 150 }}>SEA ID Card: </p>
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
            <p style={{ width: 150 }}>Dữ liệu bảng: </p>
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
            <p style={{ width: 150 }}>Khác: </p>
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
        {demoOptions[currentType]}
      </div>
    </div>
  );
}
