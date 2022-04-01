import React, { useState, Fragment, useEffect } from 'react'
import { Button, Space, Menu, Table } from 'antd';
import styled from 'styled-components';
import { ChipIdCardBack, ChipIdCardFront } from '../OCR/Result';

const getConfidence = confidence => {
  return (confidence * 100).toFixed(2) + '%'
}

function Field({ name, value, confidence, en }) {
  return (
    <div className='field'>
      <div className='field-name' style={{ color: 'rgba(255,255,255,0.44)' }} >{name}:</div>
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

export default function HoSoNhanSuResult({ result }) {

  const { data } = result || {}
  const [current, setCurrent] = useState('id_card')
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    const { id_card, curriculum_vitae, registration_book, academic_degree } = data
    const initCurrent = id_card.length ? 'id_card' :
      curriculum_vitae.length ? 'curriculum_vitae' :
        registration_book.length ? 'registration_book' :
          academic_degree.length ? 'academic_degree' : 'birth_certificate'
    setCurrent(initCurrent)
  }, [data])

  const resultOptions = {
    'id_card': <GiayToTuyThan data={data[current]} />,
    'curriculum_vitae': <SoYeuLyLich data={data[current]?.[0]?.info} />,
    'registration_book': <SoHoKhau data={data[current]?.[0]?.info} />,
    'academic_degree': <BangDaiHoc data={data[current]} />,
    'birth_certificate': <GiayKhaiSinh data={data[current]} />,
  }

  return (
    <>
      {(data) ? (
        <>
          <div className='result-wrapper' style={{ overflowX: 'inherit', }}>
            <div className='menu'>
              <Menu mode="horizontal" onClick={(e) => setCurrent(e.key)} selectedKeys={[current]}>
                {/* <Menu.Item key="id_card" >
                  Giấy tờ tùy thân
                </Menu.Item> */}
                {data['id_card'].length > 0 && <Menu.Item key="id_card">
                  Giấy tờ tùy thân
                </Menu.Item>}
                {data['curriculum_vitae'].length > 0 && <Menu.Item key="curriculum_vitae">
                  Sơ yếu lý lịch
                </Menu.Item>}
                {data['registration_book'].length > 0 && <Menu.Item key="registration_book">
                  Sổ hộ khẩu
                </Menu.Item>}
                {data['academic_degree'].length > 0 && <Menu.Item key="academic_degree">
                  Bằng đại học
                </Menu.Item>}
              </Menu>
            </div>
            {resultOptions[current]}
          </div>
          {data?.length > 1 && <div style={{ textAlign: 'center', marginTop: 6 }}>
            <Space>
              <Button type='text' onClick={() => setCurrentPage(page => page - 1)} disabled={currentPage === 0} >Trước</Button>
              <span>{currentPage + 1}/{data.length}</span>
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

function GiayToTuyThan({ data = [] }) {

  const [page, setPage] = useState(0)
  const {
    name, name_confidence,
    dob, dob_confidence,
    gender, gender_confidence,
    address, address_confidence,
    hometown, hometown_confidence,
    id, id_confidence,
    issue_date, issue_date_confidence,
    issued_at, issued_at_confidence,
  } = data[page]?.info || {}

  return (
    <>
      <Field name='Họ tên' value={name} confidence={name_confidence} />
      <Field name='Ngày sinh' value={dob} confidence={dob_confidence} />
      <Field name='Giới tính' value={gender} confidence={gender_confidence} />
      <Field name='Địa chỉ' value={address} confidence={address_confidence} />
      <Field name='Quê quán' value={hometown} confidence={hometown_confidence} />
      <Field name='Số thẻ' value={id} confidence={id_confidence} />
      <Field name='Ngày cấp' value={issue_date} confidence={issue_date_confidence} />
      <Field name='Nơi cấp' value={issued_at} confidence={issued_at_confidence} />
      {data.length > 1 && <div style={{ textAlign: 'center', marginTop: 12 }}>
        <Space>
          <Button type='text' style={{ color: '#fff' }} onClick={() => setPage(page => page - 1)} disabled={page === 0} >Trước</Button>
          <span>{page + 1}/{data.length}</span>
          <Button type='text' style={{ color: '#fff' }} onClick={() => setPage(page => page + 1)} disabled={page === data.length - 1} >Tiếp</Button>
        </Space>
      </div>
      }
    </>
  )
}

function SoYeuLyLich({ data }) {
  const {
    name, name_confidence,
    dob, dob_confidence,
    work_experience, work_experience_confidence,
    father_name, father_name_confidence,
    mother_name, mother_name_confidence,
    academic_level, academic_level_confidence,
    name_id, name_id_confidence,
    dob_id, dob_id_confidence,
  } = data || {}

  return (
    <>
      <Field name='Họ tên' value={name} confidence={name_confidence} />
      <Field name='Trang đi kèm với họ tên được trích xuất' value={name_id} confidence={name_id_confidence} />
      <Field name='Ngày sinh' value={dob} confidence={dob_confidence} />
      <Field name='Trang đi kèm với ngày sinh được trích xuất' value={dob_id} confidence={dob_id_confidence} />
      <Field name='Kinh nghiệm làm việc' value={work_experience} confidence={work_experience_confidence} />
      <Field name='Họ tên bố' value={father_name} confidence={father_name_confidence} />
      <Field name='Họ tên mẹ' value={mother_name} confidence={mother_name_confidence} />
      <Field name='Trình độ học vấn' value={academic_level} confidence={academic_level_confidence} />
    </>
  )
}

function SoHoKhau({ data }) {
  const {
    book_number, book_number_confidence,
    address, address_confidence,
    head_name, head_name_confidence,
    image,
    member = []
  } = data || {}

  const renderConfidence = (con) => con ? <><span style={{ opacity: 0.34 }} >{` - `}</span><span>{getConfidence(con)}</span></> : null

  const columns = [
    {
      title: 'Mối quan hệ với chủ hộ',
      dataIndex: 'relationship_to_head',
      key: 'relationship_to_head',
      // render: (relationship, record) => <span>{relationship}{renderConfidence(record.relationship_to_head_confidence)}</span>
    },
    {
      title: 'Họ tên',
      dataIndex: 'name',
      key: 'name',
      // render: (name, record) => <span>{name}{renderConfidence(record.name_confidence)}</span>
    },
    {
      title: 'Ngày sinh',
      dataIndex: 'dob',
      key: 'dob',
      // render: (dob, record) => <span>{dob}{renderConfidence(record.dob_confidence)}</span>
    },
    {
      title: 'Giới tính',
      dataIndex: 'gender',
      key: 'gender',
      // render: (dob, record) => <span>{dob}{renderConfidence(record.dob_confidence)}</span>
    },
    {
      title: 'CMT/Hộ chiếu',
      dataIndex: 'id_card',
      key: 'id_card',
      // render: (id_card, record) => <span>{id_card}{renderConfidence(record.id_card_confidence)}</span>
    },
  ];

  return (
    <>
      <Field name='Số sổ hộ khẩu' value={book_number} confidence={book_number_confidence} />
      <Field name='Địa chỉ' value={address} confidence={address_confidence} />
      <Field name='Họ tên chủ hộ' value={head_name} confidence={head_name_confidence} />
      {member?.length ? <TableWrapper>
        <Table dataSource={member} columns={columns} pagination={false}
          scroll={{ x: 513 }}
        />
      </TableWrapper> : null}
    </>
  )
}


function BangDaiHoc({ data = [] }) {

  const [page, setPage] = useState(0)
  const {
    name, name_confidence,
    dob, dob_confidence,
    school, school_confidence,
    major, major_confidence,
    graduation_year, graduation_year_confidence,
    award_classification, award_classification_confidence,
    academic_level, academic_level_confidence,
    image
  } = data[page]?.info || {}

  return (
    <>
      <Field name='Họ tên' value={name} confidence={name_confidence} />
      <Field name='Ngày sinh' value={dob} confidence={dob_confidence} />
      <Field name='Trường học' value={school} confidence={school_confidence} />
      <Field name='Ngành học' value={major} confidence={major_confidence} />
      <Field name='Năm tốt nghiệp' value={graduation_year} confidence={graduation_year_confidence} />
      <Field name='Xếp loại' value={award_classification} confidence={award_classification_confidence} />
      <Field name='Trình độ' value={academic_level} confidence={academic_level_confidence} />
      {data.length > 1 && <div style={{ textAlign: 'center', marginTop: 12 }}>
        <Space>
          <Button type='text' style={{ color: '#fff' }} onClick={() => setPage(page => page - 1)} disabled={page === 0} >Trước</Button>
          <span>{page + 1}/{data.length}</span>
          <Button type='text' style={{ color: '#fff' }} onClick={() => setPage(page => page + 1)} disabled={page === data.length - 1} >Tiếp</Button>
        </Space>
      </div>
      }
    </>
  )
}


function GiayKhaiSinh({ data = [] }) {

  const [page, setPage] = useState(0)
  const {
    name, name_confidence,
    dob, dob_confidence,
    regis_place, regis_place_confidence,
    number, number_confidence,
    number_book, number_book_confidence,
    father_name, father_name_confidence,
    father_dob, father_dob_confidence,
    father_address, father_address_confidence,
    mother_name, mother_name_confidence,
    mother_dob, mother_dob_confidence,
    mother_address, mother_address_confidence,
    place_of_birth, place_of_birth_confidence,
    image
  } = data[page]?.info || {}

  return (
    <>
      <Field name='Họ tên' value={name} confidence={name_confidence} />
      <Field name='Ngày sinh' value={dob} confidence={dob_confidence} />
      <Field name='Nơi sinh' value={place_of_birth} confidence={place_of_birth_confidence} />
      <Field name='Nơi Đăng ký' value={regis_place} confidence={regis_place_confidence} />
      <Field name='Số' value={number} confidence={number_confidence} />
      <Field name='Số quyển' value={number_book} confidence={number_book_confidence} />
      <Field name='Họ và Tên Bố' value={father_name} confidence={father_name_confidence} />
      <Field name='Ngày sinh Bố' value={father_dob} confidence={father_dob_confidence} />
      <Field name='Nơi cư trú của Bố' value={father_address} confidence={father_address_confidence} />
      <Field name='Họ và Tên Mẹ' value={mother_name} confidence={mother_name_confidence} />
      <Field name='Ngày sinh Mẹ' value={mother_dob} confidence={mother_dob_confidence} />
      <Field name='Nơi cư trú của Mẹ' value={mother_address} confidence={mother_address_confidence} />
      {data.length > 1 && <div style={{ textAlign: 'center', marginTop: 12 }}>
        <Space>
          <Button type='text' style={{ color: '#fff' }} onClick={() => setPage(page => page - 1)} disabled={page === 0} >Trước</Button>
          <span>{page + 1}/{data.length}</span>
          <Button type='text' style={{ color: '#fff' }} onClick={() => setPage(page => page + 1)} disabled={page === data.length - 1} >Tiếp</Button>
        </Space>
      </div>
      }
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