import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import '../Components/Video.css';
import Thumbnail from '../Components/Thumbnail/Thumbnail';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import axios from './utils/axios';

export default function Videos() {

    const [sample, setSample] = useState("zpOULjyy-n8")
    axios.get("/videos")
        .then((response) => {
            setSample(response.data)
        })

    return (
        <>
            <Navbar />

            {<Container>
                <div className='Contain'>
                    <div className="ratio ratio-16x9">
                        <iframe src={`https://www.youtube.com/embed/${sample}?rel=0`} title="YouTube video" allowFullScreen></iframe>
                    </div>
                </div>
                <div>
                    <h1 className='names'><b>Recommended</b></h1>
                </div>

                <Thumbnail />

            </Container>}

            <Footer />
        </>

    )
}