import React from 'react';
import { data } from './PicData'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import {
    CCard,
    CCardBody,
    CCardImage,
    CCarousel,
    CCardTitle,
    CCardText,
    CButton,
    CCarouselItem,
    CCol,
    CContainer,
    CRow,
    CCarouselCaption,
} from '@coreui/react'


import ReactImg from '../../Assets/react.jpg'

export default function Thumbnail() {

    const slideLeft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500
    }

    return <>

        <div className='relative flex items-center'>
            <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />

            <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                {data.map((item) => (
                    // <>
                    // <img key={item.id} className='w-[320px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300' src={ReactImg} alt='/' />
                    // <CButton>Go somewhere</CButton>
                    // </>

                    <CCol className="w-[320px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
                        <CCard style={{ width: '18rem' }}>
                            <CCardImage orientation="top" src={ReactImg} />
                            <CCardBody>
                                <CCardTitle>Card title</CCardTitle>
                                <CButton href="#">Go somewhere</CButton>
                            </CCardBody>
                        </CCard>
                    </CCol>
                ))}
            </div>

            <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
        </div>
    </>
}