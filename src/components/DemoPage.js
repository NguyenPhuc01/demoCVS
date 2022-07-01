import { Button, Space, Divider, Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { Link, navigate } from "gatsby-plugin-intl";
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
import { useQueryParams, StringParam, withDefault } from "use-query-params";

const { TabPane } = Tabs;

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
  { id: 11, name: "Giấy đăng ký doanh nghiệp", key: "dang-ky-doanh-nghiep" },
  { id: 34, name: "Báo cáo tài chính", key: "bao-cao-tai-chinh" },
  { id: 25, name: "Đề nghị thanh toán", key: "de-nghi-thanh-toan" },
  { id: 33, name: "Hồ sơ nhân sự", key: "ho-so-nhan-su" },
  { id: 39, name: "CV", key: "cv" }
];

const types4 = [
  { id: 12, name: "Giấy ra viện", key: "giay-ra-vien" },
  { id: 13, name: "Báo giá xe", key: "bao-gia-xe" },
  { id: 14, name: "eClaim", key: "e-claim" },
  { id: 15, name: "Hoá đơn xe", key: "hoa-don-xe" },
  { id: 16, name: "Hóa đơn viện phí", key: "pvi-hoa-don" },
  { id: 17, name: "Sổ khai sinh", key: "so-khai-sinh" },
  { id: 18, name: "Phiếu khám bệnh", key: "phieu-kham-benh" },
  { id: 19, name: "Bồi thường bảo hiểm", key: "boi-thuong-bao-hiem" }
];

const types5 = [
  { id: 20, name: "ID Card Myanmar", key: "id-card-myanmar" },
  { id: 21, name: "ID Card Cambodia", key: "id-card-cambodia" },
  { id: 22, name: "ID Card Philippines", key: "id-card-philippines" }
];

const types6 = [
  { id: 23, name: "Bảng tổng quát", key: "bang-tong-quat" },
  { id: 24, name: "Văn bản tổng quát", key: "van-ban-tong-quat" },
  { id: 26, name: "Giấy đăng ký dự tuyển", key: "dang-ky-du-tuyen" },
  { id: 27, name: "A4", key: "a4" },
  { id: 28, name: "Bằng tốt nghiệp", key: "bang-tot-nghiep" },
  { id: 29, name: "Giấy khai tử", key: "giay-khai-tu" },
  { id: 30, name: "Đăng ký thuế", key: "dang-ky-thue" },
  // { id: 31, name: "Sổ hộ khẩu", key: "so-ho-khau" },
  { id: 32, name: "Lý lịch tư pháp", key: "ly-lich-tu-phap" },
  { id: 35, name: "DCTTCN", key: "dcttcn" },
  { id: 36, name: "Ủy nhiệm chi", key: "uy-nhiem-chi" },
  { id: 37, name: "Giấy đăng ký bảo hiểm", key: "dang-ky-bao-hiem" },
  { id: 38, name: "Thẻ tổng quát", key: "the-tong-quat" }
];

const tabs = [
  { key: "id_card", name: "Giấy tờ tùy thân", types: types1 },
  { key: "vehicle_document", name: "Giấy tờ xe", types: types2 },
  { key: "business", name: "Tài liệu doanh nghiệp", types: types3 },
  { key: "insurance", name: "Giấy tờ bảo hiểm", types: types4 },
  { key: "sea_id_card", name: "SEA ID Card", types: types5 },
  { key: "other", name: "Khác", types: types6 }
];

export default function DemoPage() {
  const [result, setResult] = useState(null);
  const [query, setQuery] = useQueryParams({
    tab: withDefault(StringParam, "id_card"),
    type: withDefault(StringParam, "CMND/CCCD")
  });
  const { tab, type } = query;

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
      <DemoTable currentType={type} result={result} setResult={setResult} />
    ),
    "sao-ke-ngan-hang": (
      <DemoTable currentType={type} result={result} setResult={setResult} />
    ),
    "bang-ke-vien-phi": (
      <DemoTable currentType={type} result={result} setResult={setResult} />
    ),
    "bao-cao-tai-chinh": (
      <DemoTable currentType={type} result={result} setResult={setResult} />
    ),
    "bang-tong-quat": (
      <DemoTable currentType={type} result={result} setResult={setResult} />
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
      <DemoVanBan currentType={type} result={result} setResult={setResult} />
    ),
    "hoa-don-xe": (
      <DemoVanBan currentType={type} result={result} setResult={setResult} />
    ),
    "hoa-don-vat": (
      <DemoVanBan currentType={type} result={result} setResult={setResult} />
    ),
    "hoa-don-full": (
      <DemoVanBan currentType={type} result={result} setResult={setResult} />
    ),
    "bang-ke": (
      <DemoVanBan currentType={type} result={result} setResult={setResult} />
    ),
    "phieu-kham-benh": (
      <DemoVanBan currentType={type} result={result} setResult={setResult} />
    ),
    "boi-thuong-bao-hiem": (
      <DemoVanBan currentType={type} result={result} setResult={setResult} />
    ),
    "e-claim": (
      <DemoVanBan currentType={type} result={result} setResult={setResult} />
    ),
    "giay-ra-vien": (
      <DemoVanBan currentType={type} result={result} setResult={setResult} />
    ),
    "bao-gia-xe": (
      <DemoVanBan currentType={type} result={result} setResult={setResult} />
    ),
    "pvi-hoa-don": (
      <DemoVanBan currentType={type} result={result} setResult={setResult} />
    ),
    "so-khai-sinh": (
      <DemoVanBan currentType={type} result={result} setResult={setResult} />
    ),
    "de-nghi-thanh-toan": (
      <DemoVanBan currentType={type} result={result} setResult={setResult} />
    ),
    "dang-ky-du-tuyen": (
      <DemoVanBan currentType={type} result={result} setResult={setResult} />
    ),
    a4: <DemoVanBan currentType={type} result={result} setResult={setResult} />,
    "bang-tot-nghiep": (
      <DemoVanBan currentType={type} result={result} setResult={setResult} />
    ),
    "giay-khai-tu": (
      <DemoVanBan currentType={type} result={result} setResult={setResult} />
    ),
    "dang-ky-thue": (
      <DemoVanBan currentType={type} result={result} setResult={setResult} />
    ),
    "so-ho-khau": (
      <DemoVanBan currentType={type} result={result} setResult={setResult} />
    ),
    "ly-lich-tu-phap": (
      <DemoVanBan currentType={type} result={result} setResult={setResult} />
    ),
    dcttcn: (
      <DemoVanBan currentType={type} result={result} setResult={setResult} />
    ),
    "uy-nhiem-chi": (
      <DemoVanBan currentType={type} result={result} setResult={setResult} />
    ),
    "ho-so-nhan-su": (
      <DemoVanBan currentType={type} result={result} setResult={setResult} />
    ),
    "dang-ky-bao-hiem": (
      <DemoVanBan currentType={type} result={result} setResult={setResult} />
    ),
    "the-tong-quat": (
      <DemoVanBan currentType={type} result={result} setResult={setResult} />
    ),
    cv: <DemoVanBan currentType={type} result={result} setResult={setResult} />
  };

  function callback(key) {
    setResult(null);
    switch (key) {
      case "id_card":
        setQuery({ tab: key, type: types1[0].key }, "replaceIn");
        return;
      case "vehicle_document":
        setQuery({ tab: key, type: types2[0].key }, "replaceIn");
        return;
      case "business":
        setQuery({ tab: key, type: types3[0].key }, "replaceIn");
        return;
      case "insurance":
        setQuery({ tab: key, type: types4[0].key }, "replaceIn");
        return;
      case "sea_id_card":
        setQuery({ tab: key, type: types5[0].key }, "replaceIn");
        return;
      case "other":
        setQuery({ tab: key, type: types6[0].key }, "replaceIn");
        return;
      default:
        break;
    }
  }

  return (
    <div className="home-page-wrapper demo-wrapper">
      <div className="home-page demo">
        <div className="title-wrapper">Nhận diện ký tự</div>
        <Divider
          style={{
            fontSize: 14,
            fontWeight: 600,
            lineHeight: "22px",
            fontFamily: "SFProDisplay",
            color: "rgba(0, 0, 0, 0.85)"
          }}
          orientation="left"
        >
          Chọn loại tài liệu
        </Divider>
        <div className="content-wrapper">
          <Tabs onChange={callback} activeKey={tab}>
            {tabs.map(tab => {
              const { key, name, types } = tab;
              return (
                <TabPane tab={name} key={key}>
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
                    {types.map(t => {
                      const { id, name, key } = t;
                      return (
                        <Button
                          key={id}
                          type={key === type ? "primary" : "default"}
                          onClick={() => {
                            setResult(null);
                            setQuery({ type: key }, "replaceIn");
                          }}
                        >
                          {name}
                        </Button>
                      );
                    })}
                  </Space>
                </TabPane>
              );
            })}
          </Tabs>
        </div>
        <Divider
          style={{
            fontSize: 14,
            fontWeight: 600,
            lineHeight: "22px",
            fontFamily: "SFProDisplay",
            color: "rgba(0, 0, 0, 0.85)"
          }}
          orientation="left"
        >
          Vui lòng chọn ảnh demo bên dưới hoặc tải ảnh từ máy của bạn lên
        </Divider>
        <div className="upload-wrapper">{demoOptions[type]}</div>
      </div>
    </div>
  );
}
