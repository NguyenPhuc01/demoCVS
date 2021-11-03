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
        'van-ban-tong-quat': <VanBanScan data={data || data2[currentPage]} />,
        'hoa-don-xe': <HoaDonXe data={data2[currentPage].info} />,
        'pvi-hoa-don': <HoaDonXe data={data2[currentPage].info} />,
        'hoa-don-vat': <HoaDonVAT data={data2[currentPage].info} />,
        'bang-ke': <BangKe data={data2[currentPage].info} />,
        'phieu-kham-benh': <PhieuKhamBenh data={data2[currentPage].info} />,
        'boi-thuong-bao-hiem': <BoiThuongBH data={data2[currentPage].info} />,
        'bvcare-claim': <BVCare data={data2[currentPage].info} type={data2[currentPage].type} />,
        'giay-ra-vien': <GiayRaVien data={data2[currentPage]?.info} />,
        'bao-gia-xe': <BaoGiaXe data={data2[currentPage]?.info} />,
        'hoa-don-full': <HoaDonFull data={data2[currentPage]?.info} />
    }

    return (
        <>
            {(data || data2) ? (
                <>
                    <div className='result-wrapper' style={{ overflowX: type === 'van-ban-tong-quat' ? 'auto' : 'inherit', padding: current === '2' && 0 }}>
                        {type === 'bvcare-claim' && <div className='menu'>
                            <Menu mode="horizontal" onClick={(e) => setCurrent(e.key)} selectedKeys={[current]}>
                                <Menu.Item key="1" >
                                    Thông tin
                                </Menu.Item>
                                <Menu.Item key="2">
                                    Hình ảnh
                                </Menu.Item>
                            </Menu>
                        </div>}
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
    const { form, health_record, hospital, patient_address, patient_dob, patient_name, patient_no, info_goods,
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
            <Field name='Mẫu số' value={form} />
            <Field name='Số khám bệnh' value={health_record} />
            <Field name='Nơi khám bệnh' value={hospital} />
            <Field name='Tên bệnh nhân' value={patient_name} />
            <Field name='Mã số bệnh nhân' value={patient_no} />
            <Field name='Địa chỉ bệnh nhân' value={patient_address} />
            <Field name='Ngày sinh bệnh nhân' value={patient_dob} />
            {info_goods?.length ? <TableWrapper>
                <Table dataSource={info_goods} columns={columns} pagination={false} />
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

    const columns = table?.[0].map((item, index) => {
        const { value, box } = item
        return { title: value, key: index, dataIndex: index }
    })

    const dataSource = table?.slice(1).map(row => {
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
    const { cellphone_no, certificate_no, dob, email, family_member,
        cellphone_no_confidence, certificate_no_confidence, dob_confidence, email_confidence, family_member_confidence,
        cellphone_no_box, certificate_no_box, dob_box, email_box, family_member_box,
        gender, gender_box, gender_confidence,
        id_card_no, id_card_no_box, id_card_no_confidence,
        insure_name, insure_name_box, insure_name_confidence,
        policy_holder, policy_holder_box, policy_holder_confidence,
    } = data || {}

    return (
        <>
            <Field name='Tên người được bảo hiểm' value={insure_name} confidence={insure_name_confidence} />
            <Field name='Ngày sinh' value={dob} confidence={dob_confidence} />
            <Field name='Giới tính' value={gender} confidence={gender_confidence} />
            <Field name='Số thẻ bảo hiểm' value={certificate_no} confidence={certificate_no_confidence} />
            <Field name='Số CMND' value={id_card_no} confidence={id_card_no_confidence} />
            <Field name='Người thân của' value={family_member} confidence={family_member_confidence} />
            <Field name='Tên bên mua bảo hiểm' value={policy_holder} confidence={policy_holder_confidence} />
            <Field name='Số điện thoại' value={cellphone_no} confidence={cellphone_no_confidence} />
            <Field name='Email' value={email} confidence={email_confidence} />
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
            {!type && null}
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