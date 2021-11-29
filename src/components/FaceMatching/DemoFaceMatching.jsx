import { DeleteFilled, LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { Col, Row, Upload, Button, Input } from 'antd'
import React, { useState } from 'react'
import axios from 'axios';
import { AuthKey } from '../AuthKey';
import { isURL, trackTrialEvent } from '../utils';
import Result from './Result';
import ExamImage from './ExamImage';

const url = 'https://demo.computervision.com.vn/api/v2/ekyc/face_matching'

export default function DemoFaceMatching({ result, setResult }) {


    const [loading, setLoading] = useState(false)
    const [file1, setFile1] = useState(null)
    const [imageUrl1, setImageUrl1] = useState(null)
    const [input1, setInput1] = useState('')
    const [error1, setError1] = useState('')
    const [file2, setFile2] = useState(null)
    const [imageUrl2, setImageUrl2] = useState(null)
    const [input2, setInput2] = useState('')
    const [error2, setError2] = useState('')

    const hasData = result?.data
    const hasData1 = file1 && result?.data
    const hasData2 = file2 && result?.data


    const onChangeFile1 = ({ file }) => {
        setFile1(file)
    };
    const onChangeFile2 = ({ file }) => {
        setFile2(file)
    };

    const onChangeLink1 = (e) => {
        const { value } = e.target
        setFile1(null)
        setInput1(value)
        if (value) {
            if (isURL(value)) {
                setImageUrl1(value)
                setError1(null)
            } else {
                setError1('Link ảnh không hợp lệ')
            }
        } else {
            setError1(null)
        }
    }

    const onChangeLink2 = (e) => {
        const { value } = e.target
        setFile2(null)
        setInput2(value)
        if (value) {
            if (isURL(value)) {
                setImageUrl2(value)
                setError2(null)
            } else {
                setError2('Link ảnh không hợp lệ')
            }
        } else {
            setError2(null)
        }
    }

    const onSubmit = () => {
        if ((file1 && file2) || (imageUrl1 && imageUrl2)) {
            trackTrialEvent(window.location.pathname)


            if (file1) {
                let formData = new FormData()
                formData.append('img1', file1)
                formData.append('img2', file2)
                setLoading(true)
                axios({
                    method: "post",
                    url: `${url}?format_type=file&type1=card`,
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
                    url: `${url}?format_type=url&type1=card&img1=${imageUrl1}&img2=${imageUrl2}`,
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

    }

    const onReset = () => {
        setResult(null)
        onReset1()
        onReset2()
    }

    const onReset1 = () => {
        setFile1(null)
        setImageUrl1(null)
        setInput1('')
        setResult(null)
    }

    const onReset2 = () => {
        setFile2(null)
        setImageUrl2(null)
        setInput2('')
        setResult(null)
    }

    const onDelete1 = e => {
        e.stopPropagation()
        onReset1()
    }

    const onDelete2 = e => {
        e.stopPropagation()
        onReset2()
    }


    return (
        <>
            <ExamImage onChangeFile1={onChangeFile1} onChangeFile2={onChangeFile2} file1={file1} file2={file2} />
            <Row gutter={[30, 60]}>
                <Col md={12} xs={24}>
                    <Upload
                        multiple={false}
                        accept='image/*'
                        beforeUpload={() => false}
                        showUploadList={false}
                        onChange={onChangeFile1}
                        disabled={loading || hasData1 || imageUrl2}
                        className='image-uploader'
                    >
                        {(file1 || input1) ?
                            <div style={{ position: 'relative' }}>
                                {error1 ? <div className='upload-area'>{error1}</div> :
                                    <>
                                        <img src={file1 ? URL.createObjectURL(file1) : imageUrl1} alt="avatar" style={{ width: '100%' }} />
                                        <Button icon={<DeleteFilled />} style={{ position: 'absolute', top: 0, right: 0 }} type='primary' onClick={onDelete1} />
                                    </>
                                }

                            </div>
                            : <div className='upload-area' style={{ cursor: imageUrl2 ? 'not-allowed' : 'pointer' }} >
                                <PlusOutlined />
                                <div style={{ marginTop: 8 }}>Upload</div>
                            </div>}
                    </Upload>
                    <Input value={input1} onChange={onChangeLink1} disabled={!!file2} placeholder='Hoặc nhập link ảnh' style={{ height: 46, marginTop: 8 }} />
                </Col>
                <Col md={12} xs={24}>
                    <Upload
                        multiple={false}
                        accept='image/*'
                        beforeUpload={() => false}
                        showUploadList={false}
                        onChange={onChangeFile2}
                        disabled={loading || hasData2 || imageUrl1}
                        className='image-uploader'
                    >
                        {(file2 || input2) ?
                            <div style={{ position: 'relative' }}>
                                {error2 ? <div className='upload-area'>{error2}</div> :
                                    <>
                                        <img src={file2 ? URL.createObjectURL(file2) : imageUrl2} alt="avatar" style={{ width: '100%' }} />
                                        <Button icon={<DeleteFilled />} style={{ position: 'absolute', top: 0, right: 0 }} type='primary' onClick={onDelete2} />
                                    </>
                                }

                            </div>
                            : <div className='upload-area' style={{ cursor: imageUrl1 ? 'not-allowed' : 'pointer' }} >
                                <PlusOutlined />
                                <div style={{ marginTop: 8 }}>Upload</div>
                            </div>}
                    </Upload>
                    <Input value={input2} onChange={onChangeLink2} disabled={!!file1} placeholder='Hoặc nhập link ảnh' style={{ height: 46, marginTop: 8 }} />
                </Col>
                <Col md={24}>
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
                {result ? <Col md={24} xs={24}>
                    <div className='demo-result'>
                        {result ?
                            <Result result={result} />
                            : <div className='note' >
                                {loading ? <LoadingOutlined style={{ fontSize: 40 }} /> : 'Vui lòng thêm ảnh và nhấn "Xử lý" để trải nghiệm dịch vụ'}
                            </div>
                        }
                    </div>
                    <Button danger block style={{ height: 48, marginTop: 24, background: 'transparent' }}>XEM TÀI LIỆU API DÀNH CHO LẬP TRÌNH VIÊN</Button>
                </Col> : null}
            </Row>
        </>
    )
}
