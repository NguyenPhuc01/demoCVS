import React, { useState, Fragment } from 'react'
import { Button, Space, Menu, Table } from 'antd';
import styled from 'styled-components';
import { ChipIdCardBack, ChipIdCardFront } from '../OCR/Result';

const getConfidence = confidence => {
  return (confidence * 100).toFixed(2) + '%'
}

export default function Result({ result, type }) {
  const { result: data, time, data: data2, errorCode, errorMessage } = result || {}
  const [current, setCurrent] = useState('1')
  const [currentPage, setCurrentPage] = useState(0)

  const resultOptions = {
    'van-ban-tong-quat': <VanBanScan data={data || data2[currentPage]?.result} />,
    'hoa-don-xe': <HoaDonXe data={data2[currentPage]?.info} />,
    'pvi-hoa-don': <HoaDonXe data={data2[currentPage]?.info} />,
    'hoa-don-vat': <HoaDonVAT data={data2[currentPage]?.info} />,
    'bang-ke': <BangKe data={data2[currentPage]?.info} />,
    'phieu-kham-benh': <PhieuKhamBenh data={data2[currentPage]?.info} />,
    'boi-thuong-bao-hiem': <BoiThuongBH data={data2[currentPage]?.info} />,
    'e-claim': <BVCare data={data2[currentPage]?.info} type={data2[currentPage]?.type} />,
    'giay-ra-vien': <GiayRaVien data={data2[currentPage]?.info} />,
    'bao-gia-xe': <BaoGiaXe data={data2[currentPage]?.info} />,
    'hoa-don-full': <HoaDonFull data={data2[currentPage]?.info} />,
    'so-khai-sinh': <SoKhaiSinh data={data2[currentPage]?.info} />,
    'de-nghi-thanh-toan': <DeNghiThanhToan data={data2[currentPage]?.info} />,
    'dang-ky-du-tuyen': <DangKyDuTuyen data={data2[currentPage]?.info} />,
    'a4': <A4 data={data2[currentPage]?.data} type={data2[currentPage]?.type} />,
    'bang-tot-nghiep': <BangTotNghiep data={data2[currentPage]?.info} />,
    'giay-khai-tu': <GiayKhaiTu data={data2[currentPage]?.info} />,
    'dang-ky-thue': <DangKyThue data={data2[currentPage]?.info} />,
    'so-ho-khau': <SoHoKhau data={data2[currentPage]?.info} />,
    'ly-lich-tu-phap': <LyLichTuPhap data={data2[currentPage]?.info} />,
  }
  return (
    <>
      {(data || data2) ? (
        <>
          <div className='result-wrapper' style={{ overflowX: type === 'van-ban-tong-quat' ? 'auto' : 'inherit', padding: current === '2' && 0 }}>
            {/* {type === 'e-claim' && <div className='menu'>
                            <Menu mode="horizontal" onClick={(e) => setCurrent(e.key)} selectedKeys={[current]}>
                                <Menu.Item key="1" >
                                    Thông tin
                                </Menu.Item>
                                <Menu.Item key="2">
                                    Hình ảnh
                                </Menu.Item>
                            </Menu>
                        </div>} */}
            {current === '1' ?
              <>
                {resultOptions[type]}
              </> :
              <img alt='img' src={`data:image/png;base64,${data2[currentPage].info.image}`} width='100%' />
            }
          </div>
          {data2?.length > 1 && <div style={{ textAlign: 'center', marginTop: 6 }}>
            <Space>
              <Button type='text' onClick={() => setCurrentPage(page => page - 1)} disabled={currentPage === 0} >Trước</Button>
              <span>{currentPage + 1}/{data2.length}</span>
              <Button type='text' onClick={() => setCurrentPage(page => page + 1)} disabled={currentPage === data2.length - 1} >Tiếp</Button>
            </Space>
          </div>}
        </>
      ) :
        <div className='error'>
          Không tìm thấy nội dung. Vui lòng thử lại!
        </div>}
    </>
  )
}

function VanBanScan({ data }) {
  return (
    <>
      {data.map(item => {
        return (
          <div>
            {item.map(children => {
              return (
                <div style={{ whiteSpace: 'nowrap' }}>
                  {children.map(box => <span>{box.text} </span>)}
                </div>
              )
            })}
          </div>
        )
      })}
    </>
  )
}


function Field({ name, value, confidence, en }) {
  return (
    <div className='field'>
      <div className='field-name'>{name}:</div>
      <div className='field-value'>{value}
        {confidence ? <>
          <span className='confidence-label'> - {en ? 'Confidence: ' : 'Độ tin cậy: '}
          </span>
          {getConfidence(confidence)}
        </> : null}
      </div>
    </div>
  )
}

function BangKe({ data }) {
  const { medical_facility, table_number, table_date, patient_name, address, pid, total_payment, info_goods,
    medical_facility_confidence,
    table_number_confidence,
    table_date_confidence,
    patient_name_confidence,
    address_confidence,
    pid_confidence,
    total_payment_confidence,
    table
  } = data || {}

  return (
    <>
      <Field name='Tên cơ sở y tế' value={medical_facility} confidence={medical_facility_confidence} />
      <Field name='Số bảng kê' value={table_number} confidence={table_number_confidence} />
      <Field name='Ngày bảng kê' value={table_date} confidence={table_date_confidence} />
      <Field name='Tên bệnh nhân' value={patient_name} confidence={patient_name_confidence} />
      <Field name='Địa chỉ' value={address} confidence={address_confidence} />
      <Field name='Mã y tế/Mã bệnh nhân' value={pid} confidence={pid_confidence} />
      <Field name='Tổng tiền thanh toán' value={total_payment} confidence={total_payment_confidence} />
      {table?.length ? <>{table.map(item => <BangTongQuat data={item.json} />)}</> : null}
    </>
  )
}


function BangTongQuat({ data }) {

  const columns = data?.[0].map((item, index) => {
    const { value, box } = item
    return { title: value, key: index, dataIndex: index }
  })

  const dataSource = data?.slice(1).map(row => {
    let obj = {}
    row.forEach((e, index) => {
      obj[index] = e.value
    });
    return obj
  })


  return (
    <>
      {data?.length ? <TableWrapper>
        <Table dataSource={dataSource} columns={columns} pagination={false}
          scroll={{ x: 513 }}
        />
      </TableWrapper> : null}
    </>
  )
}

function HoaDonXe({ data }) {
  const { date, form, invoice_no, serial_no, supplier, tax_code, total_amount, info_goods,
    date_confidence, form_confidence, invoice_no_confidence, serial_no_confidence, supplier_confidence,
    tax_code_confidence, total_amount_confidence,
    payment_method, payment_method_box, payment_method_confidence,
    sub_total, sub_total_box, sub_total_confidence,
    vat_amount, vat_amount_box, vat_amount_confidence,
    purchaser_name, purchaser_name_box, purchaser_name_confidence,
    account_bank
  } = data || {}

  const columns = [
    {
      title: 'Tên hàng hóa, dịch vụ',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Thành tiền',
      dataIndex: 'coin',
      key: 'coin',
    },
  ];


  return (
    <>
      <Field name='Ngày hóa đơn' value={date} confidence={date_confidence} />
      <Field name='Mẫu số' value={form} confidence={form_confidence} />
      <Field name='Số hóa đơn' value={invoice_no} confidence={invoice_no_confidence} />
      <Field name='Số ký hiệu hóa đơn' value={serial_no} confidence={serial_no_confidence} />
      <Field name='Nhà cung cấp' value={supplier} confidence={supplier_confidence} />
      <Field name='Mã số thuế nhà cung cấp' value={tax_code} confidence={tax_code_confidence} />
      <Field name='Hình thức thanh toán' value={payment_method} confidence={payment_method_confidence} />
      <Field name='Tiền trước thuế' value={sub_total} confidence={sub_total_confidence} />
      <Field name='Tiền thuế' value={vat_amount} confidence={vat_amount_confidence} />
      <Field name='Tên đơn vị' value={purchaser_name} confidence={purchaser_name_confidence} />
      {info_goods?.length ? <TableWrapper>
        <Table dataSource={info_goods} columns={columns} pagination={false} />
      </TableWrapper> : null}
      <Field name='Tổng cộng' value={total_amount} confidence={total_amount_confidence} />
      <div className='field'>
        <div className='field-name'>Tài khoản ngân hàng:</div>
        <div className='field-value'>
          {account_bank.map(item => {
            const { account_no, account_no_box, account_no_confidence, bank, bank_box, bank_confidence } = item
            return (
              <div key={account_no} style={{ marginBottom: 8 }}>
                {account_no} <span className='confidence-label'>- Độ tin cậy: </span>{getConfidence(account_no_confidence)}<br />
                {bank && <>{bank} <span className='confidence-label'>- Độ tin cậy: </span>{getConfidence(bank_confidence)}<br /></>}
              </div>
            )
          })}
        </div>
      </div>

    </>
  )
}


function HoaDonVAT({ data }) {
  const { date, form, invoice_no, serial_no, supplier, tax_code, total_amount, info_goods,
    date_confidence, form_confidence, invoice_no_confidence, serial_no_confidence, supplier_confidence,
    tax_code_confidence, total_amount_confidence,
    payment_method, payment_method_box, payment_method_confidence,
    sub_total, sub_total_box, sub_total_confidence,
    vat_amount, vat_amount_box, vat_amount_confidence,
    purchaser_name, purchaser_name_box, purchaser_name_confidence,
    account_bank
  } = data || {}

  const columns = [
    {
      title: 'Tên hàng hóa, dịch vụ',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Thành tiền',
      dataIndex: 'coin',
      key: 'coin',
    },
  ];


  return (
    <>
      <Field name='Ngày hóa đơn' value={date} confidence={date_confidence} />
      <Field name='Mẫu số' value={form} confidence={form_confidence} />
      <Field name='Số hóa đơn' value={invoice_no} confidence={invoice_no_confidence} />
      <Field name='Số ký hiệu hóa đơn' value={serial_no} confidence={serial_no_confidence} />
      <Field name='Nhà cung cấp' value={supplier} confidence={supplier_confidence} />
      <Field name='Mã số thuế nhà cung cấp' value={tax_code} confidence={tax_code_confidence} />
      <Field name='Hình thức thanh toán' value={payment_method} confidence={payment_method_confidence} />
      {info_goods?.length ? <TableWrapper>
        <Table dataSource={info_goods} columns={columns} pagination={false} />
      </TableWrapper> : null}
      <Field name='Tổng cộng' value={total_amount} confidence={total_amount_confidence} />
      <div className='field'>
        <div className='field-name'>Tài khoản ngân hàng:</div>
        <div className='field-value'>
          {account_bank.map(item => {
            const { account_no, account_no_box, account_no_confidence, bank, bank_box, bank_confidence } = item
            return (
              <div key={account_no} style={{ marginBottom: 8 }}>
                {account_no} <span className='confidence-label'>- Độ tin cậy: </span>{getConfidence(account_no_confidence)}<br />
                {bank && <>{bank} <span className='confidence-label'>- Độ tin cậy: </span>{getConfidence(bank_confidence)}<br /></>}
              </div>
            )
          })}
        </div>
      </div>

    </>
  )
}


function GiayKhaiTu({ data }) {
  const {
    so_khai_tu,
    ngay_khai_tu,
    ho_va_ten,
    ngay_sinh,
    gioitinh,
    dan_toc,
    quoc_tich,
    so_CCCD,
    ngay_cap_CCCD,
    nguoi_khai_tu,
    nguyen_nhan_chet,
    noi_cap_CCCD,
    noi_chet,
    noi_khai_tu,
    thoi_gian_chet
  } = data || {}

  return (
    <>
      <Field name='Số khai tử' value={so_khai_tu} />
      <Field name='Ngày khai tử' value={ngay_khai_tu} />
      <Field name='Họ và tên' value={ho_va_ten} />
      <Field name='Ngày sinh' value={ngay_sinh} />
      <Field name='Giới tính' value={gioitinh} />
      <Field name='Dân tộc' value={dan_toc} />
      <Field name='Quốc tịch' value={quoc_tich} />
      <Field name='Số CCCD' value={so_CCCD} />
      <Field name='Ngày cấp CCCD' value={ngay_cap_CCCD} />
      <Field name='Nơi cấp CCCD' value={noi_cap_CCCD} />
      <Field name='Nơi chết' value={noi_chet} />
      <Field name='Nguyên nhân chết' value={nguyen_nhan_chet} />
      <Field name='Thời gian chết' value={thoi_gian_chet} />
      <Field name='Người đi khai tử' value={nguoi_khai_tu} />
      <Field name='Nơi khai tử' value={noi_khai_tu} />
    </>
  )
}

function DangKyThue({ data }) {
  const {
    CMND,
    chung_nhan_DKKD,
    co_quan_quan_ly,
    ma_so_thue,
    ngay_cap_MST,
    quyet_dinh,
    ten_nguoi_nop_thue
  } = data || {}

  return (
    <>
      <Field name='Mã số thuế' value={ma_so_thue} />
      <Field name='Tên người nộp thuế' value={ten_nguoi_nop_thue} />
      <Field name='Ngày chứng nhận đăng ký kinh doanh' value={chung_nhan_DKKD} />
      <Field name='Ngày quyết định thành lập' value={quyet_dinh} />
      <Field name='Số CMND' value={CMND} />
      <Field name='Ngày cấp mã số thuế' value={ngay_cap_MST} />
      <Field name='Cơ quan quản lý' value={co_quan_quan_ly} />

    </>
  )
}

function SoHoKhau({ data }) {
  const {
    chu_ho,
    chu_ho_confidence,
    cmnd,
    cmnd_confidence,
    dan_toc,
    dan_toc_confidence,
    gioi_tinh,
    gioi_tinh_confidence,
    ho_va_ten,
    ho_va_ten_confidence,
    ngay_sinh,
    ngay_sinh_confidence,
    nguyen_quan,
    nguyen_quan_confidence,
    quan_he_chu_ho,
    quan_he_chu_ho_confidence,
    quoc_tich,
    quoc_tich_confidence,
    so,
    so_confidence,
    thuong_tru,
    thuong_tru_confidence,
    ton_giao,
    ton_giao_confidence,
  } = data || {}

  return (
    <>
      <Field name='Số' value={so} confidence={so_confidence} />
      <Field name='Chủ hộ' value={chu_ho} confidence={chu_ho_confidence} />
      <Field name='Địa chỉ thường trú' value={thuong_tru} confidence={thuong_tru_confidence} />
      <Field name='Quan hệ với chủ hộ' value={quan_he_chu_ho} confidence={quan_he_chu_ho_confidence} />
      <Field name='Họ và tên thành viên' value={ho_va_ten} confidence={ho_va_ten_confidence} />
      <Field name='Ngày sinh của thành viên' value={ngay_sinh} confidence={ngay_sinh_confidence} />
      <Field name='Giới tính của thành viên' value={gioi_tinh} confidence={gioi_tinh_confidence} />
      <Field name='Nguyên quán của thành viên' value={nguyen_quan} confidence={nguyen_quan_confidence} />
      <Field name='Dân tộc của thành viên' value={dan_toc} confidence={dan_toc_confidence} />
      <Field name='Tôn giáo của thành viên' value={ton_giao} confidence={ton_giao_confidence} />
      <Field name='Quốc tịch của thành viên' value={quoc_tich} confidence={quoc_tich_confidence} />
      <Field name='Số CMND của thành viên' value={cmnd} confidence={cmnd_confidence} />

    </>
  )
}

function LyLichTuPhap({ data }) {
  const {
    an_tich,
    an_tich_confidence,
    ho_ten_cha,
    ho_ten_cha_confidence,
    ho_ten_me,
    ho_ten_me_confidence,
    gioitinh,
    gioitinh_confidence,
    ho_ten_vo_chong,
    ho_ten_vo_chong_confidence,
    ho_va_ten,
    ho_va_ten_confidence,
    nam_tot_nghiep,
    nam_tot_nghiep_confidence,
    noi_sinh,
    noi_sinh_confidence,
    quoc_tich,
    quoc_tich_confidence,
    so_CCCD,
    so_CCCD_confidence,
    tam_tru,
    tam_tru_confidence,
    thong_tin_CCCD,
    thong_tin_CCCD_confidence,
    thuong_tru,
    thuong_tru_confidence,
  } = data || {}

  return (
    <>
      <Field name='Án tích' value={an_tich} confidence={an_tich_confidence} />
      <Field name='Giới tính' value={gioitinh} confidence={gioitinh_confidence} />
      <Field name='Họ tên cha' value={ho_ten_cha} confidence={ho_ten_cha_confidence} />
      <Field name='Họ tên mẹ' value={ho_ten_me} confidence={ho_ten_me_confidence} />
      <Field name='Họ tên vợ chồng' value={ho_ten_vo_chong} confidence={ho_ten_vo_chong_confidence} />
      <Field name='Họ và tên' value={ho_va_ten} confidence={ho_va_ten_confidence} />
      <Field name='Năm tốt nghiệp' value={nam_tot_nghiep} confidence={nam_tot_nghiep_confidence} />
      <Field name='Nơi sinh' value={noi_sinh} confidence={noi_sinh_confidence} />
      <Field name='Quốc tịch' value={quoc_tich} confidence={quoc_tich_confidence} />
      <Field name='Số CCCD' value={so_CCCD} confidence={so_CCCD_confidence} />
      <Field name='Tạm trú' value={tam_tru} confidence={tam_tru_confidence} />
      <Field name='Thông tin CCCD' value={thong_tin_CCCD} confidence={thong_tin_CCCD_confidence} />
      <Field name='Thường trú' value={thuong_tru} confidence={thuong_tru_confidence} />

    </>
  )
}


function PhieuKhamBenh({ data }) {
  const { patient_address, patient_dob, patient_gender, patient_name, patient_nationality,
    patient_address_confidence, patient_dob_confidence, patient_gender_confidence, patient_name_confidence, patient_nationality_confidence,
    patient_address_box, patient_dob_box, patient_gender_box, patient_name_box, patient_nationality_box
  } = data || {}

  return (
    <>
      <Field name='Họ tên' value={patient_name} confidence={patient_name_confidence} />
      <Field name='Ngày sinh' value={patient_dob} confidence={patient_dob_confidence} />
      <Field name='Giới tính' value={patient_gender} confidence={patient_gender_confidence} />
      <Field name='Quốc tịch' value={patient_nationality} confidence={patient_nationality_confidence} />
      <Field name='Địa chỉ' value={patient_address} confidence={patient_address_confidence} />
    </>
  )
}

function GiayRaVien({ data }) {
  const {
    address, address_confidence,
    department, department_confidence,
    diagnose, diagnose_confidence,
    gender, gender_confidence,
    year_of_birth, year_of_birth_confidence,
    treatments, treatments_confidence,
    pid, pid_confidence,
    patient_name, patient_name_confidence,
    medical_facility, medical_facility_confidence,
    hospital_discharge_date, hospital_discharge_date_confidence,
    hospitalization_date, hospitalization_date_confidence,
  } = data || {}

  return (
    <>
      <Field name='Cơ sở y tế' value={medical_facility} confidence={medical_facility_confidence} />
      <Field name='Khoa' value={department} confidence={department_confidence} />
      <Field name='Họ và tên' value={patient_name} confidence={patient_name_confidence} />
      <Field name='Năm sinh/Tuổi' value={year_of_birth} confidence={year_of_birth_confidence} />
      <Field name='Giới tính' value={gender} confidence={gender_confidence} />
      <Field name='Mã y tế' value={pid} confidence={pid_confidence} />
      <Field name='Địa chỉ' value={address} confidence={address_confidence} />
      <Field name='Ngày vào viện' value={hospitalization_date} confidence={hospitalization_date_confidence} />
      <Field name='Ngày ra viện' value={hospital_discharge_date} confidence={hospital_discharge_date_confidence} />
      <Field name='Chẩn đoán' value={diagnose} confidence={diagnose_confidence} />
      <Field name='Phương pháp điều trị' value={treatments} confidence={treatments_confidence} />
    </>
  )
}


function HoaDon({ data }) {
  const { date, form, invoice_no, serial_no, supplier, tax_code, total_amount, info_goods,
    date_confidence, form_confidence, invoice_no_confidence, serial_no_confidence, supplier_confidence,
    tax_code_confidence, total_amount_confidence,
    payment_method, payment_method_box, payment_method_confidence,
    sub_total, sub_total_box, sub_total_confidence,
    vat_amount, vat_amount_box, vat_amount_confidence,
    purchaser_name, purchaser_name_box, purchaser_name_confidence,
    account_bank, table
  } = data || {}


  const columns = table?.[0]?.map((item, index) => {
    const { value, box } = item
    return { title: value, key: index, dataIndex: index }
  })

  const dataSource = table?.slice(1)?.map(row => {
    let obj = {}
    row.forEach((e, index) => {
      obj[index] = e.value
    });
    return obj
  })

  return (
    <>
      <Field name='Ngày hóa đơn' value={date} confidence={date_confidence} />
      <Field name='Mẫu số' value={form} confidence={form_confidence} />
      <Field name='Số hóa đơn' value={invoice_no} confidence={invoice_no_confidence} />
      <Field name='Số ký hiệu hóa đơn' value={serial_no} confidence={serial_no_confidence} />
      <Field name='Nhà cung cấp' value={supplier} confidence={supplier_confidence} />
      <Field name='Mã số thuế nhà cung cấp' value={tax_code} confidence={tax_code_confidence} />
      <Field name='Hình thức thanh toán' value={payment_method} confidence={payment_method_confidence} />
      <Field name='Tiền trước thuế' value={sub_total} confidence={sub_total_confidence} />
      <Field name='Tiền thuế' value={vat_amount} confidence={vat_amount_confidence} />
      <Field name='Tên đơn vị' value={purchaser_name} confidence={purchaser_name_confidence} />
      {table?.length ? <TableWrapper>
        <Table dataSource={dataSource} columns={columns} pagination={false}
          scroll={{ x: 513 }}
        />
      </TableWrapper> : null}
      <Field name='Tổng cộng' value={total_amount} confidence={total_amount_confidence} />
      <div className='field'>
        <div className='field-name'>Tài khoản ngân hàng:</div>
        <div className='field-value'>
          {account_bank.map(item => {
            const { account_no, account_no_box, account_no_confidence, bank, bank_box, bank_confidence } = item
            return (
              <div key={account_no} style={{ marginBottom: 8 }}>
                {account_no} <span className='confidence-label'>- Độ tin cậy: </span>{getConfidence(account_no_confidence)}<br />
                {bank && <>{bank} <span className='confidence-label'>- Độ tin cậy: </span>{getConfidence(bank_confidence)}<br /></>}
              </div>
            )
          })}
        </div>
      </div>

    </>
  )
}


function BaoGiaXe({ data }) {
  const { name_of_garage, name_of_garage_confidence, quotation_date, quotation_date_confidence,
    estimated_delivery_date, estimated_delivery_date_confidence,
    total_amount, total_amount_confidence, sub_total, sub_total_confidence, vat_amount, vat_amount_confidence, table,
  } = data || {}

  const columns = [
    {
      title: 'Tên phụ tùng, vật tư',
      key: 'description',
      dataIndex: 'description'
    },
    {
      title: 'Số lượng',
      key: 'quantity',
      dataIndex: 'quantity'
    },
    {
      title: 'Đơn giá',
      key: 'unit_price',
      dataIndex: 'unit_price'
    },
    {
      title: 'Phần trăm giảm giá',
      key: 'percent_discount',
      dataIndex: 'percent_discount'
    },
    {
      title: 'Giảm giá',
      key: 'discount',
      dataIndex: 'discount'
    },
  ]

  return (
    <>
      <Field name='Tên gara, xưởng sửa chữa' value={name_of_garage} confidence={name_of_garage_confidence} />
      <Field name='Ngày báo giá' value={quotation_date} confidence={quotation_date_confidence} />
      <Field name='Ngày dự kiến giao xe' value={estimated_delivery_date} confidence={estimated_delivery_date_confidence} />
      <Field name='Tổng tiền sau thuế' value={total_amount} confidence={total_amount_confidence} />
      <Field name='Tổng tiền trước thuế' value={sub_total} confidence={sub_total_confidence} />
      <Field name='Tiền thuế' value={vat_amount} confidence={vat_amount_confidence} />
      {table?.length ? <TableWrapper>
        <Table dataSource={table} columns={columns} pagination={false}
          scroll={{ x: 513 }}
        />
      </TableWrapper> : null}
    </>
  )
}

function HoaDonFull({ data }) {
  const { date, form, invoice_no, serial_no, supplier, tax_code, total_amount, info_goods,
    date_confidence, form_confidence, invoice_no_confidence, serial_no_confidence, supplier_confidence,
    tax_code_confidence, total_amount_confidence,
    payment_method, payment_method_box, payment_method_confidence,
    sub_total, sub_total_box, sub_total_confidence,
    vat_amount, vat_amount_box, vat_amount_confidence,
    purchaser_name, purchaser_name_box, purchaser_name_confidence,
    account_bank, table
  } = data || {}

  const columns = table?.[0]?.map((item, index) => {
    const { value, box } = item
    return { title: value, key: index, dataIndex: index }
  })

  const dataSource = table?.slice(1)?.map(row => {
    let obj = {}
    row.forEach((e, index) => {
      obj[index] = e.value
    });
    return obj
  })


  return (
    <>
      <Field name='Ngày hóa đơn' value={date} confidence={date_confidence} />
      <Field name='Mẫu số' value={form} confidence={form_confidence} />
      <Field name='Số hóa đơn' value={invoice_no} confidence={invoice_no_confidence} />
      <Field name='Số ký hiệu hóa đơn' value={serial_no} confidence={serial_no_confidence} />
      <Field name='Nhà cung cấp' value={supplier} confidence={supplier_confidence} />
      <Field name='Mã số thuế nhà cung cấp' value={tax_code} confidence={tax_code_confidence} />
      <Field name='Hình thức thanh toán' value={payment_method} confidence={payment_method_confidence} />
      <Field name='Tiền trước thuế' value={sub_total} confidence={sub_total_confidence} />
      <Field name='Tiền thuế' value={vat_amount} confidence={vat_amount_confidence} />
      <Field name='Tên đơn vị' value={purchaser_name} confidence={purchaser_name_confidence} />
      {table?.length ? <TableWrapper>
        <Table dataSource={dataSource} columns={columns} pagination={false}
          scroll={{ x: 513 }}
        />
      </TableWrapper> : null}
      <Field name='Tổng cộng' value={total_amount} confidence={total_amount_confidence} />
      <div className='field'>
        <div className='field-name'>Tài khoản ngân hàng:</div>
        <div className='field-value'>
          {account_bank.map(item => {
            const { account_no, account_no_box, account_no_confidence, bank, bank_box, bank_confidence } = item
            return (
              <div key={account_no} style={{ marginBottom: 8 }}>
                {account_no} <span className='confidence-label'>- Độ tin cậy: </span>{getConfidence(account_no_confidence)}<br />
                {bank && <>{bank} <span className='confidence-label'>- Độ tin cậy: </span>{getConfidence(bank_confidence)}<br /></>}
              </div>
            )
          })}
        </div>
      </div>

    </>
  )
}

function BoiThuongBH({ data }) {
  const { phone_number, policy_no, email,
    phone_number_confidence, policy_no_confidence, email_confidence,
    insure_name, insure_name_confidence,

    date_of_accident, date_of_accident_confidence,
    treatment_method, treatment_method_confidence,
    medical_facility, medical_facility_confidence,
    diagnose, diagnose_confidence,
    total_insured_amount, total_insured_amount_confidence,
    beneficiary, beneficiary_confidence,
    bank, bank_confidence,
    account_number, account_number_confidence,
    cash, cash_confidence,
    id_card, id_card_confidence,
    claimant, claimant_confidence,
    claimant_phone, claimant_phone_confidence,
    claimant_address, claimant_address_confidence,
    claimant_email, claimant_email_confidence


  } = data || {}

  return (
    <>
      <Field name='Tên người được bảo hiểm' value={insure_name} confidence={insure_name_confidence} />
      <Field name='Số thẻ bảo hiểm' value={policy_no} confidence={policy_no_confidence} />
      <Field name='Số điện thoại' value={phone_number} confidence={phone_number_confidence} />
      <Field name='Email' value={email} confidence={email_confidence} />
      <Field name='Ngày xảy ra' value={date_of_accident} confidence={date_of_accident_confidence} />
      <Field name='Hình thức điều trị' value={treatment_method} confidence={treatment_method_confidence} />
      <Field name='Khám/Điều trị tại' value={medical_facility} confidence={medical_facility_confidence} />
      <Field name='Chẩn đoán' value={diagnose} confidence={diagnose_confidence} />
      <Field name='Tổng số tiền yêu cầu bồi thường' value={total_insured_amount} confidence={total_insured_amount_confidence} />
      <Field name='Tên tài khoản' value={beneficiary} confidence={beneficiary_confidence} />
      <Field name='Tên ngân hàng' value={bank} confidence={bank_confidence} />
      <Field name='Số tài khoản' value={account_number} confidence={account_number_confidence} />
      <Field name='Hình thức nhận tiền' value={cash} confidence={cash_confidence} />
      <Field name='Số CMND nhận tiền mặt' value={id_card} confidence={id_card_confidence} />
      <Field name='Họ tên người yêu cầu' value={claimant} confidence={claimant_confidence} />
      <Field name='Số điện thoại người yêu cầu' value={claimant_phone} confidence={claimant_phone_confidence} />
      <Field name='Địa chỉ người yêu cầu' value={claimant_address} confidence={claimant_address_confidence} />
      <Field name='Email người yêu cầu' value={claimant_email} confidence={claimant_email_confidence} />
    </>
  )
}

function BVCard({ data }) {
  const {
    name,
    name_confidence,
    plan,
    plan_confidence,
    company,
    company_confidence,
    valid,
    valid_confidence,
    policy_no,
    policy_no_confidence,
  } = data || {}

  return (
    <>
      <Field name='Họ tên' value={name} confidence={name_confidence} />
      <Field name='Số thẻ' value={policy_no} confidence={policy_no_confidence} />
      <Field name='Công ty' value={company} confidence={company_confidence} />
      <Field name='Hiệu lực từ' value={valid} confidence={valid_confidence} />
      <Field name='Chương trình' value={plan} confidence={plan_confidence} />
    </>
  )
}


function IdCard12Back({ data }) {
  const { issue_date, issue_date_confidence, issued_at, issued_at_confidence } = data || {}

  return (
    <>
      <Field name='Ngày cấp' value={issue_date} confidence={issue_date_confidence} />
      <Field name='Nơi cấp' value={issued_at} confidence={issued_at_confidence} />
    </>
  )
}

function IdCard9Back({ data }) {
  const { issue_date, issue_date_confidence, issued_at, issued_at_confidence, ethnicity, ethnicity_confidence, religious, religious_confidence } = data || {}

  return (
    <>
      <Field name='Dân tộc' value={ethnicity} confidence={ethnicity_confidence} />
      <Field name='Tôn giáo' value={religious} confidence={religious_confidence} />
      <Field name='Ngày cấp' value={issue_date} confidence={issue_date_confidence} />
      <Field name='Nơi cấp' value={issued_at} confidence={issued_at_confidence} />
    </>
  )
}


function IdCard12Front({ data }) {
  const { id, id_confidence, name, name_confidence, dob, dob_confidence, gender, gender_confidence, nationality, nationality_confidence, ethnicity, ethnicity_confidence,
    hometown, hometown_town_code, hometown_town, hometown_confidence, hometown_district_code, hometown_district, hometown_ward_code, hometown_ward,
    address, address_confidence, address_town_code, address_town, address_district_code, address_district, address_ward_code, address_ward, due_date, due_date_confidence } = data || {}

  return (
    <>
      <Field name='Số thẻ' value={id} confidence={id_confidence} />
      <Field name='Họ tên' value={name} confidence={name_confidence} />
      <Field name='Ngày sinh' value={dob} confidence={dob_confidence} />
      <Field name='Giới tính' value={gender} confidence={gender_confidence} />
      <Field name='Quốc tịch' value={nationality} confidence={nationality_confidence} />
      <Field name='Dân tộc' value={ethnicity} confidence={ethnicity_confidence} />
      <div className='field'>
        <div className='field-name'>Quê quán:</div>
        <div className='field-value'>
          {hometown} {hometown_confidence && <> <span className='confidence-label'>- Độ tin cậy: </span>{getConfidence(hometown_confidence)}</>}<br />
          Tỉnh/TP: {hometown_town_code >= 0 && <>{hometown_town_code} - {hometown_town}</>}<br />
          Quận/Huyện: {hometown_district_code >= 0 && <>{hometown_district_code} - {hometown_district}</>}<br />
          Phường/Xã: {hometown_ward_code >= 0 && <>{hometown_ward_code} - {hometown_ward}</>}
        </div>
      </div>
      <div className='field'>
        <div className='field-name'>Thường trú:</div>
        <div className='field-value'>
          {address} {address_confidence && <><span className='confidence-label'>- Độ tin cậy: </span>{getConfidence(address_confidence)}</>} <br />
          Tỉnh/TP: {address_town_code >= 0 && <>{address_town_code} - {address_town}</>}<br />
          Quận/Huyện: {address_district_code >= 0 && <>{address_district_code} - {address_district}</>}<br />
          Phường/Xã: {address_ward_code >= 0 && <>{address_ward_code} - {address_ward}</>}
        </div>
      </div>
      <Field name='Giá trị đến ngày' value={due_date} confidence={due_date_confidence} />
    </>
  )
}


function IdCard9Front({ data }) {
  const { id, id_confidence, name, name_confidence, dob, dob_confidence,
    hometown, hometown_town_code, hometown_town, hometown_confidence, hometown_district_code, hometown_district, hometown_ward_code, hometown_ward,
    address, address_confidence, address_town_code, address_town, address_district_code, address_district, address_ward_code, address_ward } = data || {}

  return (
    <>
      <Field name='Số thẻ' value={id} confidence={id_confidence} />
      <Field name='Họ tên' value={name} confidence={name_confidence} />
      <Field name='Ngày sinh' value={dob} confidence={dob_confidence} />
      <div className='field'>
        <div className='field-name'>Quê quán:</div>
        <div className='field-value'>
          {hometown} {hometown_confidence && <> <span className='confidence-label'>- Độ tin cậy: </span>{getConfidence(hometown_confidence)}</>}<br />
          Tỉnh/TP: {hometown_town_code >= 0 && <>{hometown_town_code} - {hometown_town}</>}<br />
          Quận/Huyện: {hometown_district_code >= 0 && <>{hometown_district_code} - {hometown_district}</>}<br />
          Phường/Xã: {hometown_ward_code >= 0 && <>{hometown_ward_code} - {hometown_ward}</>}
        </div>
      </div>
      <div className='field'>
        <div className='field-name'>Thường trú:</div>
        <div className='field-value'>
          {address} {address_confidence && <><span className='confidence-label'>- Độ tin cậy: </span>{getConfidence(address_confidence)}</>} <br />
          Tỉnh/TP: {address_town_code >= 0 && <>{address_town_code} - {address_town}</>}<br />
          Quận/Huyện: {address_district_code >= 0 && <>{address_district_code} - {address_district}</>}<br />
          Phường/Xã: {address_ward_code >= 0 && <>{address_ward_code} - {address_ward}</>}
        </div>
      </div>
    </>
  )
}


export function Passport({ data }) {
  const { id, id_checksum, id_checksum_validate, person_number, surname, given_name, sex, born, nationality, dob_checksum, dob_checksum_validate,
    country, due_date, due_date_checksum, due_date_checksum_validate, confidence } = data || {}

  return (
    <>
      <Field name='ID' value={id} />
      <Field name='ID checksum' value={id_checksum} />
      <Field name='ID checksum validate' value={id_checksum_validate} />
      <Field name='ID card' value={person_number} />
      <Field name='Surname' value={surname} />
      <Field name='Given name' value={given_name} />
      <Field name='Gender' value={sex} />
      <Field name='Dob' value={born} />
      <Field name='Dob checksum' value={dob_checksum} />
      <Field name='Dob checksum validate' value={dob_checksum_validate} />
      <Field name='Country' value={country} />
      <Field name='Due date' value={due_date} />
      <Field name='Due date checksum' value={due_date_checksum} />
      <Field name='Due date checksum validate' value={due_date_checksum_validate} />
      <Field name='Nationality' value={nationality} />
      <Field name='Confidence' value={`${(confidence * 100).toFixed(2)}%`} />
    </>
  )
}


function BVCare({ data, type }) {
  return (
    <>
      {type === 'chip_id_card_front' && <ChipIdCardFront data={data} />}
      {type === 'chip_id_card_back' && <ChipIdCardBack data={data} />}
      {type === '12_id_card_back' && <IdCard12Back data={data} />}
      {type === '9_id_card_back' && <IdCard9Back data={data} />}
      {type === '12_id_card_front' && <IdCard12Front data={data} />}
      {type === '9_id_card_front' && <IdCard9Front data={data} />}
      {type === 'passport' && <Passport data={data} />}

      {type === 'claim_form' && <BoiThuongBH data={data} />}
      {type === 'bvcard' && <BVCard data={data} />}
      {type === 'hospital_discharge_paper' && <GiayRaVien data={data} />}
      {type === 'invoice' && <HoaDon data={data} />}
      {type === 'list_expense' && <BangKe data={data} />}
      {type === 'id_doc' && <IdDoc data={data} />}
      {type === 'prescription' && <DonThuoc data={data} />}
      {type === 'guarantee_confirmation' && <GiayXacNhanBaoLanh data={data} />}
      {type === 'surgical_certificate' && <GiayChungNhanPhauThuat data={data} />}
      {type === 'discharge_report' && <BaoCaoRaVien data={data} />}
      {type === 'medical_report' && <BaoCaoYTe data={data} />}
      {type === 'specify_vote' && <PhieuChiDinh data={data} />}
      {type === 'test_results' && <KetQuaXetNghiem data={data} />}
      {type === 'accident_report' && <TuongTrinhTaiNan data={data} />}
      {type === 'bill' && <BienLai data={data} />}
      {type === 'receipts' && <PhieuThu data={data} />}
      {type === 'health_records' && <SoKhamBenh data={data} />}
      {type === 'medical_examination' && <PhieuKham data={data} />}
      {!type && null}
    </>
  )
}

function A4({ data, type, }) {
  return (
    <>
      {type === 'tcc' && <TCC data={data} />}
      {type === 'cmt' && <CMT data={data} />}
      {type === 'matsautcc' && <MatSauTCC data={data} />}
      {type === 'matsaucmt' && <MatSauCMT data={data} />}
      {type === 'tcc_chip' && <ChipIdCardFrontOld data={data} />}
      {type === 'matsautcc_chip' && <ChipIdCardBackOld data={data} />}
      {type === 'blx' && <DrivingLicenseOld data={data} />}
      {type === 'passport' && <PassportOld data={data} />}
      {type === 'bvcard' && <BVCard data={data} />}
      {!type && null}
    </>
  )
}

function DrivingLicenseOld({ data }) {
  const { id, id_confidence, name, name_confidence, born, born_confidence, class: class_license, class_confidence, nation, nation_confidence,
    dateissue,
    dateissue_confidence, duedate, duedate_confidence, address, address_confidence } = data || {}

  return (
    <>
      <Field name='Số thẻ' value={id} confidence={id_confidence} />
      <Field name='Họ tên' value={name} confidence={name_confidence} />
      <Field name='Ngày sinh' value={born} confidence={born_confidence} />
      <Field name='Hạng' value={class_license} confidence={class_confidence} />
      <Field name='Quốc tịch' value={nation} confidence={nation_confidence} />
      <Field name='Ngày phát hành' value={dateissue} confidence={dateissue_confidence} />
      <Field name='Giá trị đến ngày' value={duedate} confidence={duedate_confidence} />
      <Field name='Nơi cư trú' value={address} confidence={address_confidence} />
    </>
  )
}

function ChipIdCardFrontOld({ data }) {
  const { id, id_confidence, name, name_confidence, born, born_confidence, sex, sex_confidence, quoctich, quoctich_confidence,
    country, country_confidence,
    address, address_confidence, diachi_tinh, diachi_tinh_name, diachi_huyen, diachi_huyen_name, diachi_phuong, diachi_phuong_name, duedate, duedate_confidence,
    quequan_tinh, quequan_tinh_name, quequan_huyen, quequan_huyen_name, quequan_phuong, quequan_phuong_name
  } = data || {}

  return (
    <>
      <Field name='Số thẻ' value={id} confidence={id_confidence} />
      <Field name='Họ tên' value={name} confidence={name_confidence} />
      <Field name='Ngày sinh' value={born} confidence={born_confidence} />
      <Field name='Giới tính' value={sex} confidence={sex_confidence} />
      <Field name='Quốc tịch' value={quoctich} confidence={quoctich_confidence} />
      <div className='field'>
        <div className='field-name'>Quê quán:</div>
        <div className='field-value'>
          {country} <br />
          Tỉnh/TP: {quequan_tinh} - {quequan_tinh_name}<br />
          Quận/Huyện: {quequan_huyen} - {quequan_huyen_name}<br />
          Phường/Xã: {quequan_phuong} - {quequan_phuong_name}
        </div>
      </div>
      <div className='field'>
        <div className='field-name'>Thường trú:</div>
        <div className='field-value'>
          {address} <br />
          Tỉnh/TP: {diachi_tinh} - {diachi_tinh_name}<br />
          Quận/Huyện: {diachi_huyen} - {diachi_huyen_name}<br />
          Phường/Xã: {diachi_phuong} - {diachi_phuong_name}
        </div>
      </div>
      <Field name='Giá trị đến ngày' value={duedate} confidence={duedate_confidence} />
    </>
  )
}

function ChipIdCardBackOld({ data }) {
  const { nationality,
    checksum_final, checksum_final_validate, country, dob, dob_checksum, dob_checksum_validate, document_number, document_number_checksum, document_number_checksum_validate,
    due_date, due_date_checksum, due_date_checksum_validate, gender, given_name, date, issue_date_confidence, noicap, issued_at_confidence, person_number, sur_name, mrz_confidence
  } = data || {}

  return (
    <>
      <Field name='Checksum final' value={checksum_final} />
      <Field name='Checksum final validate' value={checksum_final_validate} />
      <Field name='Country' value={country} />
      <Field name='Dob' value={dob} />
      <Field name='Dob checksum' value={dob_checksum} />
      <Field name='Dob checksum validate' value={dob_checksum_validate} />
      <Field name='Document number' value={document_number} />
      <Field name='Document number checksum' value={document_number_checksum} />
      <Field name='Document number checksum validate' value={document_number_checksum_validate} />
      <Field name='Due date' value={due_date} />
      <Field name='Due date checksum' value={due_date_checksum} />
      <Field name='Due date checksum validate' value={due_date_checksum_validate} />
      <Field name='Gender' value={gender} />
      <Field name='Given name' value={given_name} />
      <Field name='Issue date' value={date} en />
      <Field name='Issued at' value={noicap} en />
      <Field name='Nationality' value={nationality} />
      <Field name='Person number' value={person_number} />
      <Field name='Sur name' value={sur_name} />
      {/* <Field name='Mrz confidence' value={`${(mrz_confidence * 100).toFixed(2)}%`} /> */}
    </>
  )
}

function MatSauCMT({ data }) {
  const { date, issue_date_confidence, noicap, issued_at_confidence, dantoc, ethnicity_confidence, tongiao, religious_confidence } = data || {}

  return (
    <>
      <Field name='Dân tộc' value={dantoc} confidence={ethnicity_confidence} />
      <Field name='Tôn giáo' value={tongiao} confidence={religious_confidence} />
      <Field name='Ngày cấp' value={date} confidence={issue_date_confidence} />
      <Field name='Nơi cấp' value={noicap} confidence={issued_at_confidence} />
    </>
  )
}

function MatSauTCC({ data }) {
  const { date, issue_date_confidence, noicap, issued_at_confidence } = data || {}

  return (
    <>
      <Field name='Ngày cấp' value={date} confidence={issue_date_confidence} />
      <Field name='Nơi cấp' value={noicap} confidence={issued_at_confidence} />
    </>
  )
}

function CMT({ data }) {
  const { id, id_confidence, name, name_confidence, born, dob_confidence,
    country, quequan_tinh, quequan_tinh_name, hometown_confidence, quequan_huyen, quequan_huyen_name, quequan_phuong, quequan_phuong_name,
    address, address_confidence, diachi_tinh, diachi_tinh_name, diachi_huyen, diachi_huyen_name, diachi_phuong, diachi_phuong_name, } = data || {}

  return (
    <>
      <Field name='Số thẻ' value={id} confidence={id_confidence} />
      <Field name='Họ tên' value={name} confidence={name_confidence} />
      <Field name='Ngày sinh' value={born} confidence={dob_confidence} />
      <div className='field'>
        <div className='field-name'>Quê quán:</div>
        <div className='field-value'>
          {country} <br />
          Tỉnh/TP: {quequan_tinh} - {quequan_tinh_name}<br />
          Quận/Huyện: {quequan_huyen} - {quequan_huyen_name}<br />
          Phường/Xã: {quequan_phuong} - {quequan_phuong_name}
        </div>
      </div>
      <div className='field'>
        <div className='field-name'>Thường trú:</div>
        <div className='field-value'>
          {address} <br />
          Tỉnh/TP: {diachi_tinh} - {diachi_tinh_name}<br />
          Quận/Huyện: {diachi_huyen} - {diachi_huyen_name}<br />
          Phường/Xã: {diachi_phuong} - {diachi_phuong_name}
        </div>
      </div>
    </>
  )
}

function TCC({ data }) {
  const { id, id_confidence, name, name_confidence, born, dob_confidence, sex, gender_confidence, quoctich, nationality_confidence, dantoc, ethnicity_confidence,
    country, quequan_tinh, quequan_tinh_name, hometown_confidence, quequan_huyen, quequan_huyen_name, quequan_phuong, quequan_phuong_name,
    address, address_confidence, diachi_tinh, diachi_tinh_name, diachi_huyen, diachi_huyen_name, diachi_phuong, diachi_phuong_name, duedate, due_date_confidence } = data || {}

  return (
    <>
      <Field name='Số thẻ' value={id} confidence={id_confidence} />
      <Field name='Họ tên' value={name} confidence={name_confidence} />
      <Field name='Ngày sinh' value={born} confidence={dob_confidence} />
      <Field name='Giới tính' value={sex} confidence={gender_confidence} />
      <Field name='Quốc tịch' value={quoctich} confidence={nationality_confidence} />
      <Field name='Dân tộc' value={dantoc} confidence={ethnicity_confidence} />
      <div className='field'>
        <div className='field-name'>Quê quán:</div>
        <div className='field-value'>
          {country} <br />
          Tỉnh/TP: {quequan_tinh} - {quequan_tinh_name}<br />
          Quận/Huyện: {quequan_huyen} - {quequan_huyen_name}<br />
          Phường/Xã: {quequan_phuong} - {quequan_phuong_name}
        </div>
      </div>
      <div className='field'>
        <div className='field-name'>Thường trú:</div>
        <div className='field-value'>
          {address} <br />
          Tỉnh/TP: {diachi_tinh} - {diachi_tinh_name}<br />
          Quận/Huyện: {diachi_huyen} - {diachi_huyen_name}<br />
          Phường/Xã: {diachi_phuong} - {diachi_phuong_name}
        </div>
      </div>
      <Field name='Giá trị đến ngày' value={duedate} confidence={due_date_confidence} />
    </>
  )
}

function PassportOld({ data }) {
  const { id, id_checksum, id_checksum_validate, person_number, surname, given_name, sex, born, nationality, dob_checksum, dob_checksum_validate,
    country, duedate, duedate_checksum, duedate_checksum_validate, confidence } = data || {}

  return (
    <>
      <Field name='ID' value={id} />
      <Field name='ID card' value={person_number} />
      <Field name='Surname' value={surname} />
      <Field name='Given name' value={given_name} />
      <Field name='Gender' value={sex} />
      <Field name='Dob' value={born} />
      <Field name='Country' value={country} />
      <Field name='Due date' value={duedate} />
      <Field name='Nationality' value={nationality} />
    </>
  )
}


function IdDoc({ data }) {
  const { address, address_confidence, dob, dob_confidence, gender, gender_confidence,
    name, name_confidence, nationality, nationality_confidence
  } = data || {}

  return (
    <>
      <Field name='Họ tên' value={name} confidence={name_confidence} />
      <Field name='Ngày sinh' value={dob} confidence={dob_confidence} />
      <Field name='Giới tính' value={gender} confidence={gender_confidence} />
      <Field name='Quốc tịch' value={nationality} confidence={nationality_confidence} />
      <Field name='Địa chỉ' value={address} confidence={address_confidence} />

    </>
  )
}

function DonThuoc({ data }) {
  const { medical_facility,
    medical_facility_confidence,
    patient_name,
    patient_name_confidence,
    year_of_birth,
    year_of_birth_confidence,
    gender,
    gender_confidence,
    address,
    address_confidence,
    pid,
    pid_confidence,
    prescription_date,
    prescription_date_confidence,
    diagnose,
    diagnose_confidence,
  } = data || {}

  return (
    <>
      <Field name='Cơ sở y tế' value={medical_facility} confidence={medical_facility_confidence} />
      <Field name='Họ tên bệnh nhân' value={patient_name} confidence={patient_name_confidence} />
      <Field name='Năm sinh/Tuổi' value={year_of_birth} confidence={year_of_birth_confidence} />
      <Field name='Giới tính' value={gender} confidence={gender_confidence} />
      <Field name='Địa chỉ' value={address} confidence={address_confidence} />
      <Field name='Mã y tế' value={pid} confidence={pid_confidence} />
      <Field name='Ngày kê đơn' value={prescription_date} confidence={prescription_date_confidence} />
      <Field name='Chẩn đoán' value={diagnose} confidence={diagnose_confidence} />
    </>
  )
}

function GiayXacNhanBaoLanh({ data }) {
  const {
    claim_form_no, claim_form_no_confidence,
    created_date, created_date_confidence,
    insured, insured_confidence,
    dob, dob_confidence,
    id_no, id_no_confidence,
    policy_no, policy_no_confidence,
    policy_holder, policy_holder_confidence,
    period_of_insurance, period_of_insurance_confidence,
    date_of_consultation, date_of_consultation_confidence,
    medical_facility, medical_facility_confidence,
    rehabilitation_type, rehabilitation_type_confidence,
    from_date, from_date_confidence,
    to_date, to_date_confidence,
    condition, condition_confidence,
    conclusion, conclusion_confidence,
    medical_expenses, medical_expenses_confidence,
    guaranteed_expenses, guaranteed_expenses_confidence,
    paid_by_insured, paid_by_insured_confidence,
    warranty_notes, warranty_notes_confidence,
    insured_confirmation, insured_confirmation_confidence,
  } = data || {}

  return (
    <>
      <Field name='Số yêu cầu BT' value={claim_form_no} confidence={claim_form_no_confidence} />
      <Field name='Ngày lập' value={created_date} confidence={created_date_confidence} />
      <Field name='Người được BH' value={insured} confidence={insured_confidence} />
      <Field name='Ngày sinh' value={dob} confidence={dob_confidence} />
      <Field name='Số CMT' value={id_no} confidence={id_no_confidence} />
      <Field name='Số thẻ bảo hiểm' value={policy_no} confidence={policy_no_confidence} />
      <Field name='Đơn vị tham gia bảo hiểm' value={policy_holder} confidence={policy_holder_confidence} />
      <Field name='Hiệu lực bảo hiểm' value={period_of_insurance} confidence={period_of_insurance_confidence} />
      <Field name='Ngày khám' value={date_of_consultation} confidence={date_of_consultation_confidence} />
      <Field name='Tên cơ sở y tế' value={medical_facility} confidence={medical_facility_confidence} />
      <Field name='Nội trú/Ngoại trú' value={rehabilitation_type} confidence={rehabilitation_type_confidence} />
      <Field name='Từ ngày' value={from_date} confidence={from_date_confidence} />
      <Field name='Đến ngày' value={to_date} confidence={to_date_confidence} />
      <Field name='Tình trạng bệnh/tai nạn' value={condition} confidence={condition_confidence} />
      <Field name='Kết luận của bác sỹ sau xuất viện' value={conclusion} confidence={conclusion_confidence} />
      <Field name='Chi phí phát sinh' value={medical_expenses} confidence={medical_expenses_confidence} />
      <Field name='Chi phí bảo lãnh' value={guaranteed_expenses} confidence={guaranteed_expenses_confidence} />
      <Field name='Chi phí NĐBH tự trả' value={paid_by_insured} confidence={paid_by_insured_confidence} />
      <Field name='GHI CHÚ VÀ XÁC NHẬN BẢO LÃNH' value={warranty_notes} confidence={warranty_notes_confidence} />
      <Field name='XÁC NHẬN VÀ CAM KẾT CỦA NGƯỜI ĐƯỢC BẢO HIỂM' value={insured_confirmation} confidence={insured_confirmation_confidence} />
    </>
  )
}

function GiayChungNhanPhauThuat({ data }) {
  const {
    medical_facility,
    medical_facility_confidence,
    department,
    department_confidence,
    patient_name,
    patient_name_confidence,
    dob,
    dob_confidence,
    gender,
    gender_confidence,
    address,
    address_confidence,
    pid,
    pid_confidence,
    hospitalization_date,
    hospitalization_date_confidence,
    hospital_discharge_date,
    hospital_discharge_date_confidence,
    surgical_day,
    surgical_day_confidence,
    diagnose,
    diagnose_confidence,
    anesthetic_method,
    anesthetic_method_confidence,
    surgical_doctor,
    surgical_doctor_confidence,
    anesthesiologist,
    anesthesiologist_confidence,
  } = data || {}

  return (
    <>
      <Field name='Tên cơ sở y tế' value={medical_facility} confidence={medical_facility_confidence} />
      <Field name='Khoa' value={department} confidence={department_confidence} />
      <Field name='Họ tên bệnh nhân' value={patient_name} confidence={patient_name_confidence} />
      <Field name='Năm sinh/Tuổi' value={dob} confidence={dob_confidence} />
      <Field name='Giới tính' value={gender} confidence={gender_confidence} />
      <Field name='Địa chỉ' value={address} confidence={address_confidence} />
      <Field name='Mã y tế/PID' value={pid} confidence={pid_confidence} />
      <Field name='Ngày vào viện' value={hospitalization_date} confidence={hospitalization_date_confidence} />
      <Field name='Ngày ra viện' value={hospital_discharge_date} confidence={hospital_discharge_date_confidence} />
      <Field name='Ngày phẫu thuật' value={surgical_day} confidence={surgical_day_confidence} />
      <Field name='Chẩn đoán' value={diagnose} confidence={diagnose_confidence} />
      <Field name='Phương pháp vô cảm' value={anesthetic_method} confidence={anesthetic_method_confidence} />
      <Field name='Bác sỹ phẫu thuật' value={surgical_doctor} confidence={surgical_doctor_confidence} />
      <Field name='Bác sỹ gây mê' value={anesthesiologist} confidence={anesthesiologist_confidence} />
    </>
  )
}

function BaoCaoRaVien({ data }) {
  const {
    department,
    department_confidence,
    patient_name,
    patient_name_confidence,
    dob,
    dob_confidence,
    gender,
    gender_confidence,
    address,
    address_confidence,
    pid,
    pid_confidence,
    hospitalization_date,
    hospitalization_date_confidence,
    discharge_date,
    discharge_date_confidence,
    hospitalization_reason,
    hospitalization_reason_confidence,
    pathological_process,
    pathological_process_confidence,
    preliminary_diagnosis,
    preliminary_diagnosis_confidence,
    definitive_diagnosis,
    definitive_diagnosis_confidence,
    treatment_method,
    treatment_method_confidence,
    prescribed_medicines,
    prescribed_medicines_confidence,
    hospital_discharge_status,
    hospital_discharge_status_confidence,
    followup_treatment_plan,
    followup_treatment_plan_confidence,
  } = data || {}

  return (
    <>
      <Field name='Khoa' value={department} confidence={department_confidence} />
      <Field name='Họ tên bệnh nhân' value={patient_name} confidence={patient_name_confidence} />
      <Field name='Năm sinh/Tuổi' value={dob} confidence={dob_confidence} />
      <Field name='Giới tính' value={gender} confidence={gender_confidence} />
      <Field name='Địa chỉ' value={address} confidence={address_confidence} />
      <Field name='Mã y tế/PID' value={pid} confidence={pid_confidence} />
      <Field name='Ngày vào viện' value={hospitalization_date} confidence={hospitalization_date_confidence} />
      <Field name='Ngày ra viện' value={discharge_date} confidence={discharge_date_confidence} />
      <Field name='Lý do vào viện' value={hospitalization_reason} confidence={hospitalization_reason_confidence} />
      <Field name='Quá trình bệnh lý/Bệnh sử' value={pathological_process} confidence={pathological_process_confidence} />
      <Field name='Kết quả cận lâm sàng' value={preliminary_diagnosis} confidence={preliminary_diagnosis_confidence} />
      <Field name='Chẩn đoán xác định' value={definitive_diagnosis} confidence={definitive_diagnosis_confidence} />
      <Field name='Phương pháp điều trị' value={treatment_method} confidence={treatment_method_confidence} />
      <Field name='Các thuốc chính đã dùng' value={prescribed_medicines} confidence={prescribed_medicines_confidence} />
      <Field name='Tình trạng ra viện' value={hospital_discharge_status} confidence={hospital_discharge_status_confidence} />
      <Field name='Kế hoạch điều trị tiếp theo' value={followup_treatment_plan} confidence={followup_treatment_plan_confidence} />
    </>
  )
}

function BaoCaoYTe({ data }) {
  const {
    patient_name,
    patient_name_confidence,
    dob,
    dob_confidence,
    gender,
    gender_confidence,
    address,
    address_confidence,
    pid,
    pid_confidence,
    date_of_examination,
    date_of_examination_confidence,
    symptom,
    symptom_confidence,
    pathological_process,
    pathological_process_confidence,
    medical_history,
    medical_history_confidence,
    clinical_examination,
    clinical_examination_confidence,
    medical_tests,
    medical_tests_confidence,
    preliminary_diagnosis,
    preliminary_diagnosis_confidence,
    treatment_method,
    treatment_method_confidence,
    date_of_reexamination,
    date_of_reexamination_confidence,
    icd,
    icd_confidence,
  } = data || {}

  return (
    <>
      <Field name='Họ tên bệnh nhân' value={patient_name} confidence={patient_name_confidence} />
      <Field name='Năm sinh/Tuổi' value={dob} confidence={dob_confidence} />
      <Field name='Giới tính' value={gender} confidence={gender_confidence} />
      <Field name='Địa chỉ' value={address} confidence={address_confidence} />
      <Field name='Mã y tế/PID' value={pid} confidence={pid_confidence} />
      <Field name='Ngày khám' value={date_of_examination} confidence={date_of_examination_confidence} />
      <Field name='Lý do đến khám/Triệu chứng' value={symptom} confidence={symptom_confidence} />
      <Field name='Quá trình bệnh lý/Bệnh sử' value={pathological_process} confidence={pathological_process_confidence} />
      <Field name='Tiền sử' value={medical_history} confidence={medical_history_confidence} />
      <Field name='Khám lâm sàng' value={clinical_examination} confidence={clinical_examination_confidence} />
      <Field name='Các xét nghiệm, thăm dò chính' value={medical_tests} confidence={medical_tests_confidence} />
      <Field name='Chẩn đoán sơ bộ' value={preliminary_diagnosis} confidence={preliminary_diagnosis_confidence} />
      <Field name='Hướng điều trị' value={treatment_method} confidence={treatment_method_confidence} />
      <Field name='Hẹn ngày tái khám' value={date_of_reexamination} confidence={date_of_reexamination_confidence} />
      <Field name='Mã icd' value={icd} confidence={icd_confidence} />
    </>
  )
}

function PhieuChiDinh({ data }) {
  const {
    medical_facility,
    medical_facility_confidence,
    patient_name,
    patient_name_confidence,
    gender,
    gender_confidence,
    address,
    address_confidence,
    pid,
    pid_confidence,
    dob,
    dob_confidence,
    designated_date,
    designated_date_confidence,
    preliminary_diagnosis,
    preliminary_diagnosis_confidence,
    designated_place,
    designated_place_confidence,
    test_place,
    test_place_confidence,
    designated_doctor,
    designated_doctor_confidence,
  } = data || {}

  return (
    <>
      <Field name='Tên cơ sở y tế' value={medical_facility} confidence={medical_facility_confidence} />
      <Field name='Họ tên bệnh nhân' value={patient_name} confidence={patient_name_confidence} />
      <Field name='Năm sinh/Tuổi' value={dob} confidence={dob_confidence} />
      <Field name='Giới tính' value={gender} confidence={gender_confidence} />
      <Field name='Địa chỉ' value={address} confidence={address_confidence} />
      <Field name='Mã y tế/PID' value={pid} confidence={pid_confidence} />
      <Field name='Ngày chỉ định' value={designated_date} confidence={designated_date_confidence} />
      <Field name='Chẩn đoán sơ bộ' value={preliminary_diagnosis} confidence={preliminary_diagnosis_confidence} />
      <Field name='Nơi chỉ định' value={designated_place} confidence={designated_place_confidence} />
      <Field name='Nơi thực hiện' value={test_place} confidence={test_place_confidence} />
      <Field name='Bác sỹ chỉ định' value={designated_doctor} confidence={designated_doctor_confidence} />
    </>
  )
}

function KetQuaXetNghiem({ data }) {
  const {
    medical_facility,
    medical_facility_confidence,
    patient_name,
    patient_name_confidence,
    gender,
    gender_confidence,
    address,
    address_confidence,
    pid,
    pid_confidence,
    dob,
    dob_confidence,
    designated_date,
    designated_date_confidence,
    preliminary_diagnosis,
    preliminary_diagnosis_confidence,
    test_date,
    test_date_confidence,
    designated_doctor,
    designated_doctor_confidence,
  } = data || {}

  return (
    <>
      <Field name='Tên cơ sở y tế' value={medical_facility} confidence={medical_facility_confidence} />
      <Field name='Họ tên bệnh nhân' value={patient_name} confidence={patient_name_confidence} />
      <Field name='Năm sinh/Tuổi' value={dob} confidence={dob_confidence} />
      <Field name='Giới tính' value={gender} confidence={gender_confidence} />
      <Field name='Địa chỉ' value={address} confidence={address_confidence} />
      <Field name='Mã y tế/PID' value={pid} confidence={pid_confidence} />
      <Field name='Chẩn đoán sơ bộ' value={preliminary_diagnosis} confidence={preliminary_diagnosis_confidence} />
      <Field name='Bác sỹ chỉ định' value={designated_doctor} confidence={designated_doctor_confidence} />
      <Field name='Ngày chỉ định' value={designated_date} confidence={designated_date_confidence} />
      <Field name='Ngày thực hiện' value={test_date} confidence={test_date_confidence} />
    </>
  )
}

function TuongTrinhTaiNan({ data }) {
  const {
    name,
    name_confidence,
    date_of_accident,
    date_of_accident_confidence,
    location,
    location_confidence,
    address,
    address_confidence,
  } = data || {}

  return (
    <>
      <Field name='Họ tên' value={name} confidence={name_confidence} />
      <Field name='Địa chỉ' value={address} confidence={address_confidence} />
      <Field name='Thời gian' value={date_of_accident} confidence={date_of_accident_confidence} />
      <Field name='Địa điểm' value={location} confidence={location_confidence} />
    </>
  )
}

function BienLai({ data }) {
  const {
    medical_facility,
    medical_facility_confidence,
    insure_name,
    insure_name_confidence,
    dob,
    dob_confidence,
    gender,
    gender_confidence,
    address,
    address_confidence,
    total_amount,
    total_amount_confidence,
    date,
    date_confidence,
  } = data || {}

  return (
    <>
      <Field name='Tên cơ sở y tế' value={medical_facility} confidence={medical_facility_confidence} />
      <Field name='Tên người được bảo hiểm' value={insure_name} confidence={insure_name_confidence} />
      <Field name='Năm sinh/tuổi' value={dob} confidence={dob_confidence} />
      <Field name='Giới tính' value={gender} confidence={gender_confidence} />
      <Field name='Địa chỉ' value={address} confidence={address_confidence} />
      <Field name='Tổng tiền' value={total_amount} confidence={total_amount_confidence} />
      <Field name='Ngày biên lai' value={date} confidence={date_confidence} />
    </>
  )
}

function PhieuThu({ data }) {
  const {
    medical_facility,
    medical_facility_confidence,
    insure_name,
    insure_name_confidence,
    dob,
    dob_confidence,
    gender,
    gender_confidence,
    address,
    address_confidence,
    total_amount,
    total_amount_confidence,
    date,
    date_confidence,
  } = data || {}

  return (
    <>
      <Field name='Tên cơ sở y tế' value={medical_facility} confidence={medical_facility_confidence} />
      <Field name='Tên người được bảo hiểm' value={insure_name} confidence={insure_name_confidence} />
      <Field name='Năm sinh/tuổi' value={dob} confidence={dob_confidence} />
      <Field name='Giới tính' value={gender} confidence={gender_confidence} />
      <Field name='Địa chỉ' value={address} confidence={address_confidence} />
      <Field name='Tổng tiền' value={total_amount} confidence={total_amount_confidence} />
      <Field name='Ngày phiếu thu' value={date} confidence={date_confidence} />
    </>
  )
}

function SoKhamBenh({ data }) {
  const {
    medical_facility,
    medical_facility_confidence,
    insure_name,
    insure_name_confidence,
    dob,
    dob_confidence,
    gender,
    gender_confidence,
  } = data || {}

  return (
    <>
      <Field name='Tên cơ sở y tế' value={medical_facility} confidence={medical_facility_confidence} />
      <Field name='Tên người được bảo hiểm' value={insure_name} confidence={insure_name_confidence} />
      <Field name='Năm sinh/tuổi' value={dob} confidence={dob_confidence} />
      <Field name='Giới tính' value={gender} confidence={gender_confidence} />
    </>
  )
}

function PhieuKham({ data }) {
  const {
    medical_facility,
    medical_facility_confidence,
    patient_name,
    patient_name_confidence,
    dob,
    dob_confidence,
    gender,
    gender_confidence,
    address,
    address_confidence,
    pid,
    pid_confidence,
    date_of_examination,
    date_of_examination_confidence,
    symptom,
    symptom_confidence,
    pathological_process,
    pathological_process_confidence,
    preliminary_diagnosis,
    preliminary_diagnosis_confidence,
    medical_history,
    medical_history_confidence,

  } = data || {}

  return (
    <>
      <Field name='Tên cơ sở y tế' value={medical_facility} confidence={medical_facility_confidence} />
      <Field name='Họ tên bệnh nhân' value={patient_name} confidence={patient_name_confidence} />
      <Field name='Năm sinh/Tuổi' value={dob} confidence={dob_confidence} />
      <Field name='Giới tính' value={gender} confidence={gender_confidence} />
      <Field name='Địa chỉ' value={address} confidence={address_confidence} />
      <Field name='Mã y tế/PID' value={pid} confidence={pid_confidence} />
      <Field name='Ngày khám' value={date_of_examination} confidence={date_of_examination_confidence} />
      <Field name='Lý do đến khám/Triệu chứng' value={symptom} confidence={symptom_confidence} />
      <Field name='Quá trình bệnh lý/Bệnh sử' value={pathological_process} confidence={pathological_process_confidence} />
      <Field name='Chẩn đoán sơ bộ' value={preliminary_diagnosis} confidence={preliminary_diagnosis_confidence} />
      <Field name='Tiền sử' value={medical_history} confidence={medical_history_confidence} />
    </>
  )
}

function SoKhaiSinh({ data }) {
  const { date, dob, ethnicity, father_address, father_dob, father_ethnicity, father_name, father_nationality, gender, id,
    mother_name, mother_dob, mother_address, name, nationality, number, place_of_birth, registrant_id, registrant_name, sign_name,
    mother_ethnicity, mother_nationality
  } = data || {}

  return (
    <>
      <Field name='Số' value={number} />
      <Field name='Người được đăng ký khai sinh' value={name} />
      <Field name='Ngày đăng ký' value={date} />
      <Field name='Ngày sinh' value={dob} />
      <Field name='Giới tính' value={gender} />
      <Field name='Dân tộc' value={ethnicity} />
      <Field name='Quốc tịch' value={nationality} />
      <Field name='Nơi sinh' value={place_of_birth} />
      <Field name='Số định danh cá nhân' value={id} />
      <Field name='Họ tên mẹ' value={mother_name} />
      <Field name='Năm sinh mẹ' value={mother_dob} />
      <Field name='Dân tộc mẹ' value={mother_ethnicity} />
      <Field name='Quốc tịch mẹ' value={mother_nationality} />
      <Field name='Nơi cu trú mẹ' value={mother_address} />
      <Field name='Họ tên cha' value={father_name} />
      <Field name='Năm sinh cha' value={father_dob} />
      <Field name='Dân tộc cha' value={father_ethnicity} />
      <Field name='Quốc tịch cha' value={father_nationality} />
      <Field name='Nơi cu trú cha' value={father_address} />
      <Field name='Người đi khai sinh' value={registrant_name} />
      <Field name='Giấy tờ tùy thân' value={registrant_id} />
      <Field name='Người ký giấy khai sinh' value={sign_name} />
    </>
  )
}

function DeNghiThanhToan({ data }) {
  const {
    chu_dau_tu, de_nghi_so, de_nghi_so_ngay, hop_dong_so, hop_dong_so_ngay,
    kinh_gui, luy_ke, ma_du_an, ma_so_dvsdns, nh_ngoai_nuoc, nh_trong_nuoc,
    phu_luc_so, phu_luc_so_ngay, so, so_du_tam_ung, stk_ngoai_nuoc,
    stk_trong_nuoc, ten_du_an, thuoc_ke_hoach_von, thuoc_nguon_von,
    tong_tien_de_nghi, von_trong_nuoc_tt, von_ngoai_nuoc_tt,
    thue, chuyen_tien_bao_hanh, so_tra_dvth,
    von_trong_nuoc_dvth, von_ngoai_nuoc_dvth, ten_dvth, stk_dvth
  } = data || {}

  return (
    <>
      <Field name='Chủ đầu tư' value={chu_dau_tu} />
      <Field name='Đề nghị số' value={de_nghi_so} />
      <Field name='Đề nghị số ngày' value={de_nghi_so_ngay} />
      <Field name='Hợp đồng số' value={hop_dong_so} />
      <Field name='Hợp đồng số ngày' value={hop_dong_so_ngay} />
      <Field name='Kính gửi' value={kinh_gui} />
      <Field name='Lũy kế' value={luy_ke} />
      <Field name='Mã dự án' value={ma_du_an} />
      <Field name='Mã số ĐVSDNS' value={ma_so_dvsdns} />
      <Field name='Vốn ngoài nước tại' value={nh_ngoai_nuoc} />
      <Field name='Vốn trong nước tại' value={nh_trong_nuoc} />
      <Field name='Phụ lục số' value={phu_luc_so} />
      <Field name='Phụ lục số ngày' value={phu_luc_so_ngay} />
      <Field name='Số' value={so} />
      <Field name='Số dư tạm ứng' value={so_du_tam_ung} />
      <Field name='Số tài khoản ngoài nước' value={stk_ngoai_nuoc} />
      <Field name='Số tài khoản trong nước' value={stk_trong_nuoc} />
      <Field name='Tên dự án' value={ten_du_an} />
      <Field name='Thuộc kế hoạch vốn' value={thuoc_ke_hoach_von} />
      <Field name='Thuộc nguồn vốn' value={thuoc_nguon_von} />
      <Field name='Tổng tiền đề nghị' value={tong_tien_de_nghi} />
      <Field name='Vốn trong nước thanh toán' value={von_trong_nuoc_tt} />
      <Field name='Vốn ngoài nước thanh toán' value={von_ngoai_nuoc_tt} />
      <Field name='Thuế giá trị gia tăng' value={thue} />
      <Field name='Chuyển tiền bảo hiểm' value={chuyen_tien_bao_hanh} />
      <Field name='Số trả đơn vị thụ hưởng' value={so_tra_dvth} />
      <Field name='Vốn trong nước đơn vị thụ hưởng' value={von_trong_nuoc_dvth} />
      <Field name='Vốn ngoài nước đơn vị thụ hưởng' value={von_ngoai_nuoc_dvth} />
      <Field name='Tên đơn vị thụ hưởng' value={ten_dvth} />
      <Field name='Số tài khoản đơn bị thụ hưởng' value={stk_dvth} />
    </>
  )
}

function DangKyDuTuyen({ data }) {
  const { da_tot_nghiep, dan_toc, dia_chi, gioi_tinh, ho_khau_tt, ho_ten, nganh, nganh_tot_nghiep, ngay_sinh, noi_sinh, sdt, socmnd } = data || {}

  return (
    <>
      <Field name="Tốt nghiệp" value={da_tot_nghiep} />
      <Field name="Dân tộc" value={dan_toc} />
      <Field name="Địa chỉ" value={dia_chi} />
      <Field name="Giới tính" value={gioi_tinh} />
      <Field name="Hộ khẩu thường trú" value={ho_khau_tt} />
      <Field name="Họ tên" value={ho_ten} />
      <Field name="Ngành" value={nganh} />
      <Field name="Ngành tốt nghiệp" value={nganh_tot_nghiep} />
      <Field name="Ngày sinh" value={ngay_sinh} />
      <Field name="Nơi sinh" value={noi_sinh} />
      <Field name="Số điện thoại" value={sdt} />
      <Field name="Số CMND" value={socmnd} />
    </>
  )
}

function BangTotNghiep({ data }) {
  const {
    noi_cap_bang, ho_va_ten, ngay_sinh, nam_tot_nghiep
  } = data || {}

  return (
    <>
      <Field name='Nơi cấp bằng' value={noi_cap_bang} />
      <Field name='Họ và tên' value={ho_va_ten} />
      <Field name='Ngày sinh' value={ngay_sinh} />
      <Field name='Năm tốt nghiệp' value={nam_tot_nghiep} />
    </>
  )
}

const TableWrapper = styled.div`
    margin-bottom: 12px;
    .ant-table {
        background: #1d1e22 !important;
        color: #fff;
    }
    .ant-table-thead > tr > th {
        background: #1d1e22;
        color: #ffffff57;
        border: 1px solid #f0f0f0;

        &:first-child {
            border-right: 0;
        }
    }
    .ant-table-tbody > tr.ant-table-row:hover > td {
        background: #1d1e22
    }
    .ant-table-tbody > tr > td {
        border: 1px solid #f0f0f0;
        border-top: 0;

        &:first-child {
            border-right: 0;
        }
    }
`