import { DeleteFilled, LeftOutlined, LoadingOutlined, PlusOutlined, RightOutlined } from '@ant-design/icons'
import { Col, Row, Upload, Button, Input, Space, Menu } from 'antd'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { isURL, trackTrialEvent } from '../utils';
import Result from './Result';
import ViewApiButton from '../ViewApiButton';
import PreviewPDF from '../DuLieuDangBang/PreviewPDF';
import HoSoNhanSuDemo from './HoSoNhanSuDemo';
import ReCAPTCHA from "react-google-recaptcha"

const urlOptions = {
  'van-ban-tong-quat': 'https://demo.computervision.com.vn/api/v2/ocr/document/general?get_thumb=true',
  'hoa-don-xe': 'https://demo.computervision.com.vn/api/v2/ocr/document/invoice_vehicle?get_thumb=true',
  'pvi-hoa-don': 'https://demo.computervision.com.vn/api/v2/ocr/document/pvi_invoice?get_thumb=false',
  'hoa-don-vat': 'https://demo.computervision.com.vn/api/v2/ocr/document/pvi_invoice?get_thumb=false',
  'bang-ke': 'https://demo.computervision.com.vn/api/v2/ocr/document/list_expense?get_thumb=false',
  'phieu-kham-benh': 'https://demo.computervision.com.vn/api/v2/ocr/document/examination_form?get_thumb=false',
  'boi-thuong-bao-hiem': 'https://demo.computervision.com.vn/api/v2/ocr/document/claim_form?get_thumb=false',
  'e-claim': 'https://demo.computervision.com.vn/api/v2/ocr/bvcareclaim?get_thumb=true',
  'hoa-don-full': 'https://demo.computervision.com.vn/api/v2/ocr/document/invoice_full?get_thumb=true',
  'giay-ra-vien': 'https://demo.computervision.com.vn/api/v2/ocr/document/hospital_discharge_paper?get_thumb=true',
  'bao-gia-xe': 'https://demo.computervision.com.vn/api/v2/ocr/document/price_quotation?get_thumb=true',
  'so-khai-sinh': 'https://demo.computervision.com.vn/api/v2/nlpextract/civil_registration?get_thumb=true',
  'de-nghi-thanh-toan': 'https://demo.computervision.com.vn/api/v2/nlpextract/denghithanhtoan?get_thumb=true',
  'dang-ky-du-tuyen': 'https://demo.computervision.com.vn/api/v2/nlpextract/dangkydutuyen?get_thumb=true',
  'a4': 'https://demo.computervision.com.vn/backend/api/v1/request/ocr/v1/get_infor?get_thumb=true',
  'bang-tot-nghiep': 'https://demo.computervision.com.vn/api/v2/nlpextract/bangtotnghiep?get_thumb=true',
  'giay-khai-tu': 'https://demo.computervision.com.vn/api/v2/nlpextract/khaitu?get_thumb=true',
  'dang-ky-thue': 'https://demo.computervision.com.vn/api/v2/nlpextract/dangkythue?get_thumb=true',
  // 'so-ho-khau': 'https://demo.computervision.com.vn/api/v2/ocr/shk?get_thumb=true',
  'ly-lich-tu-phap': 'https://demo.computervision.com.vn/api/v2/nlpextract/lylichtuphap?get_thumb=true',
  'dcttcn': 'https://demo.computervision.com.vn/api/v2/nlpextract/dcttcn?get_thumb=true',
  'uy-nhiem-chi': 'https://demo.computervision.com.vn/api/v2/nlpextract/giay_uynhiemchi?get_thumb=true',
  'ho-so-nhan-su': 'https://demo.computervision.com.vn/api/v2/ocr/employee_profile?get_thumb=true',
  'dang-ky-bao-hiem': 'https://demo.computervision.com.vn/api/v2/ocr/ycbh?get_thumb=true',
  'the-tong-quat': 'https://demo.computervision.com.vn/api/v2/ocr/card_general?get_thumb=true',
  'cv': 'https://demo.computervision.com.vn/api/v2/cv_parser/cv_file_parser?get_thumb=true',
  'giay-nop-tien': 'https://demo.computervision.com.vn/api/v2/nlpextract/giaynoptien?get_thumb=true',
}

const showMenuTypes = [
  'van-ban-tong-quat', 'e-claim', 'pvi-hoa-don', 'hoa-don-xe', 'so-khai-sinh', 'hoa-don-full',
  'bao-gia-xe', 'giay-ra-vien', 'de-nghi-thanh-toan', 'dang-ky-du-tuyen', 'a4', 'bang-tot-nghiep', 'giay-khai-tu',
  'dang-ky-thue', 'so-ho-khau', 'ly-lich-tu-phap', 'dcttcn', 'uy-nhiem-chi', 'dang-ky-bao-hiem', 'the-tong-quat', 'giay-nop-tien'
]

export default function DemoVanBan({ currentType, result, setResult }) {

  const recaptchaSiteKey = process.env.GATSBY_RECAPTCHA_V3_SITE_KEY
  const recaptchaRef = React.useRef();

  const [loading, setLoading] = useState(false)
  const [file, setFile] = useState(null)
  const isPDF = file?.type.includes('pdf')
  const [numPages, setNumPages] = useState(null);
  const isLargePDF = numPages > 3

  useEffect(() => {
    setPageNumber(1)
  }, [file])

  const [imageUrl, setImageUrl] = useState(null)
  const [input, setInput] = useState('')
  const [error, setError] = useState('')

  const [current, setCurrent] = useState('1')
  const [pageNumber, setPageNumber] = useState(1)
  const [token, setToken] = useState('')

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

  const onSubmit = (recaptchaToken) => {
    if (!file && !imageUrl) return;
    trackTrialEvent(window.location.pathname)

    const url = urlOptions[currentType]
    if (file) {
      let formData = new FormData()
      if (currentType === 'a4' || currentType === 'cv') {
        formData.append('file', file)
      } else {
        formData.append('img', file)
      }
      formData.append('recaptchaToken', recaptchaToken)
      setLoading(true)
      axios({
        method: "post",
        url: `${window.location.origin}/api/ocr/v2?type=${currentType}`,
        data: formData,
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
        url: `${window.location.origin}/api/ocr/v2?type=${currentType}&img=${imageUrl}&recaptchaToken=${recaptchaToken}`,
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

  const newSubmit = () => {
    window.grecaptcha.ready(() => {
      window.grecaptcha.execute(recaptchaSiteKey, { action: 'submit' }).then(token => {
        onSubmit(token)
      })
    })
  }

  const onReset = () => {
    setCurrent('1')
    setFile(null)
    setResult(null)
    setImageUrl(null)
    setInput('')
    setPageNumber(1)
    setToken('')
    recaptchaRef.current.reset()
  }

  const onDelete = e => {
    e.stopPropagation()
    onReset()
  }

  const onChangeReCAPTCHA = token => {
    setToken(token)
  }

  const onSubmitWithReCAPTCHA = () => {
    const recaptchaValue = recaptchaRef.current.getValue();
    onSubmit(recaptchaValue)
  }

  return (
    <>
      {currentType === 'ho-so-nhan-su' ?
        <HoSoNhanSuDemo
          result={result}
          file={file}
          onChangeFile={onChangeFile}
          imageUrl={imageUrl}
          loading={loading}
          input={input}
          onReset={onReset}
          onSubmit={onSubmit}
          error={error}
          onChangeLink={onChangeLink}
        /> :
        <Row gutter={[30, 60]}>
          <Col md={12} xs={24} style={{ position: "relative" }}>
            {(file || imageUrl) && <>{(showMenuTypes.includes(currentType)) && <div className='menu'>
              <Menu mode="horizontal" onClick={(e) => setCurrent(e.key)} selectedKeys={[current]}>
                <Menu.Item key="1" >
                  Ảnh gốc
                </Menu.Item>
                {result?.data && <Menu.Item key="2">
                  Ảnh đã xử lý
                </Menu.Item>}
                {(result?.data?.[pageNumber - 1]?.info?.image_table || result?.data?.[pageNumber - 1]?.info?.image_drug) && <Menu.Item key="3">
                  Ảnh bảng
                </Menu.Item>}
              </Menu>
            </div>}
            </>}
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
                      {current === '3' && <img
                        src={`data:image/png;base64,${result.data[pageNumber - 1].info.image_table || result?.data?.[pageNumber - 1]?.info?.image_drug}`}
                        alt="avatar"
                        style={{ width: '100%' }}
                      />}
                      {current === '2' &&
                        <>
                          {currentType === 'a4' ? <img
                            src={`data:image/png;base64,${result.data[pageNumber - 1]?.data?.image}`}
                            alt="avatar"
                            style={{ width: '100%' }}
                          /> :
                            <img
                              src={`data:image/png;base64,${currentType === "van-ban-tong-quat" ? result.data[pageNumber - 1]?.image
                                : currentType === 'the-tong-quat' ? result.data.img
                                  : result.data[pageNumber - 1]?.info?.image}`}
                              alt="avatar"
                              style={{ width: '100%' }}
                            />}
                          {(isPDF || result?.data?.length > 1) && <div className='page-controls'>
                            <Button icon={<LeftOutlined />}
                              onClick={(e) => {
                                e.stopPropagation()
                                setPageNumber(page => page - 1)
                              }}
                              disabled={pageNumber === 1} />
                            <span onClick={e => e.stopPropagation()}>{pageNumber} of {numPages || result?.data?.length}</span>
                            <Button icon={<RightOutlined />}
                              onClick={e => {
                                e.stopPropagation()
                                setPageNumber(page => page + 1)
                              }}
                              disabled={pageNumber === numPages} />
                          </div>}
                        </>}
                      {current === '1' && (isPDF ?
                        <PreviewPDF file={file} numPages={numPages} setNumPages={setNumPages} pageNumber={pageNumber} setPageNumber={setPageNumber} /> :
                        <img
                          src={file ? URL.createObjectURL(file) : imageUrl}
                          alt="avatar"
                          style={{ width: '100%' }}
                        />)}
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

            <ReCAPTCHA
              sitekey={recaptchaSiteKey}
              onChange={onChangeReCAPTCHA}
              ref={recaptchaRef}
              style={{ marginTop: 24 }}
              fallback={true}
              hl='vi'
            />
            <Button
              onClick={hasData ? onReset : onSubmitWithReCAPTCHA}
              loading={loading}
              type='primary'
              block
              style={{ height: 48, marginTop: 24 }}
              disabled={hasData ? false : !token}
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
      }</>

  )
}
