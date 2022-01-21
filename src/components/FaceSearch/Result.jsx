import React from 'react'
import styled from 'styled-components'



export default function Result({ result }) {

    const { data, errorCode, errorMessage } = result || {}

    return (
        <>
            {data ? (
                <>
                    <div className='result-wrapper'>

                    </div>
                </>
            ) :
                <div className='error'>
                    Không tìm thấy nội dung. Vui lòng thử lại!
                </div>}
        </>
    )
}


