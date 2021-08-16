import { DeleteFilled, LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { Col, Row, Upload, Button, Input, Space } from 'antd'
import React, { useState } from 'react'
import axios from 'axios';
import { AuthKey } from '../AuthKey';
import { isURL, trackTrialEvent } from '../utils';
import Result from './Result';
import PreviewPDF from './PreviewPDF';
import ViewApiButton from '../ViewApiButton';

const urlOptions = {
  'bang-diem': 'https://demo.computervision.com.vn/api/v2/ocr/document/transcript?get_thumb=false',
  'sao-ke-ngan-hang': 'https://demo.computervision.com.vn/api/v2/ocr/document/bank_statement?get_thumb=false',
  'bang-ke-vien-phi': 'https://demo.computervision.com.vn/api/v2/ocr/document/hospital_fee?get_thumb=false',
  'bao-cao-tai-chinh': 'https://demo.computervision.com.vn/api/v2/ocr/document/financial_report?get_thumb=false',
  'bang-tong-quat': 'https://demo.computervision.com.vn/api/v2/ocr/document/table_excel?get_thumb=false',
}

export default function DemoTable({ currentType, result, setResult }) {

  const [loading, setLoading] = useState(false)
  const [file, setFile] = useState(null)
  const isPDF = file?.type.includes('pdf')
  const [numPages, setNumPages] = useState(null);
  const isLargePDF = numPages > 3

  const hasData = file && result?.data

  const onChangeFile = ({ file }) => {
    setFile(file)
  };

  const onSubmit = () => {
    if (!file) return;
    trackTrialEvent(window.location.pathname)

    let formData = new FormData()
    formData.append('img', file)
    const url = urlOptions[currentType]
    setLoading(true)
    axios({
      method: "post",
      url: `${url}&format_type=file`,
      auth: {
        username: AuthKey.username,
        password: AuthKey.password
      },
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then(res => {
        setResult(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })
  }

  const onReset = () => {
    setFile(null)
    setResult(null)
    setNumPages(null)
  }

  const onDelete = e => {
    e.stopPropagation()
    onReset()
  }

  return (
    <Row gutter={[30, 60]}>
      <Col md={12} xs={24}>
        <Upload
          multiple={false}
          accept='image/*, application/pdf'
          beforeUpload={() => false}
          showUploadList={false}
          onChange={onChangeFile}
          disabled={loading || hasData}
          className='image-uploader'
        >
          {file ?
            <div style={{ position: 'relative' }}>
              <>
                {isPDF ?
                  <PreviewPDF file={file} numPages={numPages} setNumPages={setNumPages} /> :
                  <img src={URL.createObjectURL(file)} alt="avatar" style={{ width: '100%' }} />}
                <Button icon={<DeleteFilled />} style={{ position: 'absolute', top: 0, right: 0 }} type='primary' onClick={onDelete} />
              </>
            </div>
            : <div className='upload-area' style={{ height: 454 }} >
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>}
        </Upload>
        <div style={{ marginTop: isPDF ? 60 : 24, textAlign: 'center' }}
        >
          {isLargePDF && <div style={{ color: '#EC1C2A' }} >Chỉ có thể tải lên tối đa 3 trang PDF</div>}
          <Button
            onClick={(hasData || isLargePDF) ? onReset : onSubmit}
            loading={loading}
            type='primary'
            block
            style={{ height: 48, }}
          >
            {(hasData || isLargePDF) ? 'Thử lại' : 'XỬ LÝ'}
          </Button>
        </div>
      </Col>
      <Col md={12} xs={24}>
        {/* <div className='flex-vertical' > */}
        <div className='demo-result' style={{ height: 'calc(100% - 114px)' }}>
          {result ?
            <Result result={result} />
            : <div className='note' >
              {loading ? <LoadingOutlined style={{ fontSize: 40 }} /> : 'Vui lòng thêm ảnh và nhấn "Xử lý" để trải nghiệm dịch vụ'}
            </div>
          }
        </div>
        {/* <ViewApiButton /> */}
        {/* </div> */}
      </Col>
    </Row>
  )
}
