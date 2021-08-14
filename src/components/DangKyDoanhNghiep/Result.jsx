import React, { useState } from 'react'
import { Menu, Space, Button } from 'antd';

const getConfidence = confidence => {
    return (confidence * 100).toFixed(2) + '%'
}

export default function Result({ result }) {

    const { data, errorCode, errorMessage } = result || {}
    // const { info, type } = data || {}
    const [current, setCurrent] = useState('1')
    const [currentPage, setCurrentPage] = useState(0)


    return (
        <>
            {data ? (
                <>
                    <div className='result-wrapper' style={{ padding: current === '2' && 0 }}>
                        <div className='menu'>
                            <Menu mode="horizontal" onClick={(e) => setCurrent(e.key)} selectedKeys={[current]}>
                                <Menu.Item key="1" >
                                    Thông tin
                                </Menu.Item>
                                <Menu.Item key="2">
                                    Hình ảnh
                                </Menu.Item>
                            </Menu>
                        </div>
                        {current === '1' ?
                            <>
                                <DangKyDoanhNghiep data={data[currentPage].info} />
                            </> :
                            <img alt='img' src={`data:image/png;base64,${data[currentPage].info.image}`} width='100%' />
                        }
                    </div>
                    {data?.length > 1 && <div style={{ textAlign: 'center', marginTop: 6 }}>
                        <Space>
                            <Button type='text' onClick={() => setCurrentPage(page => page - 1)} disabled={currentPage === 0} >Trước</Button>
                            <Button type='text' onClick={() => setCurrentPage(page => page + 1)} disabled={currentPage === data.length - 1} >Tiếp</Button>
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


function DangKyDoanhNghiep({ data }) {
    const { company_name, representative_name, representative_address, dob_representative, business_address, business_code, representative_id_card
    } = data || {}

    return (
        <>
            <Field name='Tên công ty' value={company_name} />
            <Field name='Người đại diện' value={representative_name} />
            <Field name='Ngày sinh người đại diện' value={dob_representative} />
            <Field name='Địa chỉ người đại diện' value={representative_address} />
            <Field name='Địa chỉ công ty' value={business_address} />
            <Field name='Mã số công ty' value={business_code} />
            <Field name='Số giấy chứng thực cá nhân' value={representative_id_card} />

        </>
    )
}
