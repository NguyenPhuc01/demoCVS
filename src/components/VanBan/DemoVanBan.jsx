import { DeleteFilled, LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { Col, Row, Upload, Button, Input, Space } from 'antd'
import React, { useState } from 'react'
import axios from 'axios';
import { AuthKey } from '../AuthKey';
import { isURL, trackTrialEvent } from '../utils';
import Result from './Result';
import ViewApiButton from '../ViewApiButton';
import PreviewPDF from '../DuLieuDangBang/PreviewPDF';

const urlOptions = {
  'van-ban-tong-quat': 'https://demo.computervision.com.vn/api/v2/ocr/document/general?get_thumb=false',
  'hoa-don-xe': 'https://demo.computervision.com.vn/api/v2/ocr/document/invoice_vehicle?get_thumb=false',
  'pvi-hoa-don': 'https://demo.computervision.com.vn/api/v2/ocr/document/pvi_invoice?get_thumb=false',
  'hoa-don-vat': 'https://demo.computervision.com.vn/api/v2/ocr/document/pvi_invoice?get_thumb=false',
  'bang-ke': 'https://demo.computervision.com.vn/api/v2/ocr/document/list_expense?get_thumb=false',
  'phieu-kham-benh': 'https://demo.computervision.com.vn/api/v2/ocr/document/examination_form?get_thumb=false',
  'boi-thuong-bao-hiem': 'https://demo.computervision.com.vn/api/v2/ocr/document/claim_form?get_thumb=false',
  'bvcare-claim': 'https://demo.computervision.com.vn/api/v2/ocr/bvcareclaim?get_thumb=true',
  'hoa-don-full': 'https://demo.computervision.com.vn/api/v2/ocr/document/invoice_full?get_thumb=true',
  'giay-ra-vien': 'https://demo.computervision.com.vn/api/v2/ocr/document/hospital_discharge_paper?get_thumb=true',
  'bao-gia-xe': 'https://demo.computervision.com.vn/api/v2/ocr/document/price_quotation?get_thumb=true',
}

export default function DemoVanBan({ currentType, result, setResult }) {

  const [loading, setLoading] = useState(false)
  const [file, setFile] = useState(null)
  const isPDF = file?.type.includes('pdf')
  const [numPages, setNumPages] = useState(null);
  const isLargePDF = numPages > 3

  const [imageUrl, setImageUrl] = useState(null)
  const [input, setInput] = useState('')
  const [error, setError] = useState('')

  const hasData = file && result?.data

  const onChangeFile = ({ file }) => {
    setFile(file)
  };

  const onChangeLink = (e) => {
    const { value } = e.target
    setFile(null)
    setInput(value)
    if (value) {
      if (isURL(value)) {
        setImageUrl(value)
        setError(null)
      } else {
        setError('Link ảnh không hợp lệ')
      }
    } else {
      setError(null)
    }
  }

  const onSubmit = () => {
    if (!file && !imageUrl) return;
    trackTrialEvent(window.location.pathname)

    const url = urlOptions[currentType]
    if (file) {
      let formData = new FormData()
      formData.append('img', file)
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
    } else {
      setLoading(true)
      axios({
        method: "get",
        url: `${url}&format_type=url&img=${imageUrl}`,
        auth: {
          username: AuthKey.username,
          password: AuthKey.password
        },
        headers: {
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
  }

  const onReset = () => {
    setFile(null)
    setResult(null)
    setImageUrl(null)
    setInput('')
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
          {(file || input) ?
            <div style={{ position: 'relative' }}>
              {error ? <div className='upload-area'>{error}</div> :
                <>
                  {isPDF ?
                    <PreviewPDF file={file} numPages={numPages} setNumPages={setNumPages} /> :
                    <img src={file ? URL.createObjectURL(file) : imageUrl} alt="avatar" style={{ width: '100%' }} />}
                  <Button icon={<DeleteFilled />} style={{ position: 'absolute', top: 0, right: 0 }} type='primary' onClick={onDelete} />
                </>
              }

            </div>
            : <div className='upload-area' >
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>}
        </Upload>
        <Input value={input} onChange={onChangeLink} placeholder='Hoặc nhập link ảnh' style={{ height: 46, marginTop: isPDF ? 56 : 8 }} />

        <Button
          onClick={hasData ? onReset : onSubmit}
          loading={loading}
          type='primary'
          block
          style={{ height: 48, marginTop: 24 }}
        >
          {hasData ? 'Thử lại' : 'XỬ LÝ'}
        </Button>
      </Col>
      <Col md={12} xs={24}>
        <div className='demo-result'>
          {result ?
            <Result result={result} type={currentType} />
            : <div className='note' >
              {loading ? <LoadingOutlined style={{ fontSize: 40 }} /> : 'Vui lòng thêm ảnh và nhấn "Xử lý" để trải nghiệm dịch vụ'}
            </div>
          }
        </div>
        <ViewApiButton />
      </Col>
    </Row>
  )
}
