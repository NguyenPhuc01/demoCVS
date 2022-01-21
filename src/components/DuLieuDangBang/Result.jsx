import { Button } from 'antd';
import React, { useState } from 'react'
import styled from 'styled-components';

export default function Result({ result }) {

    const { data, errorCode, errorMessage } = result || {}
    const [currentRecordId, setCurrentRecordId] = useState(0)


    const onPrev = () => {
        // disableScroll.on()
        setCurrentRecordId(id => id - 1)
    }

    const onNext = () => {
        // disableScroll.on()
        setCurrentRecordId(id => id + 1)
    }

    return (
        <>
            {data ? (
                <>
                    {data.map((item, key) => {
                        if (key !== currentRecordId) return null
                        return <iframe
                            key={item.excel}
                            src={`https://docs.google.com/spreadsheets/d/${item.excel}/edit?widget=true&headers=true&embedded=true`}
                            // onLoad={onLoadIframe}
                            title={item.excel}
                            width='100%'
                            height='100%'
                        ></iframe>
                    })}
                    {data.length > 1 && (
                        <PrevNextButtonWrapper>
                            <Button onClick={onPrev} type='text' disabled={currentRecordId === 0}>Trước</Button>
                            <Button onClick={onNext} type='text' disabled={currentRecordId === data.length - 1} >Kế tiếp</Button>
                        </PrevNextButtonWrapper>
                    )}
                    {data.length === 0 && (
                        <div className='error'>
                            Không tìm thấy nội dung. Vui lòng thử lại!
                        </div>
                    )}
                </>
            ) :
                <div className='error'>
                    Không tìm thấy nội dung. Vui lòng thử lại!
                </div>}
        </>
    )
}

const PrevNextButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: -40px;
    width: 200px;
    left: 50%;
    transform: translateX(-100px);
`