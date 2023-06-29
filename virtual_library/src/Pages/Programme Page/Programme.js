/* eslint-disable eqeqeq */
import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';
import '../../Components/program.css';
import { ProgramData } from '../../Components/Data/programData';
import { Link, useParams, Navigate } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import GoBack from '../../Components/GoBack/GoBack';
import '../../Components/loading.css'
import { useAuth } from '../hooks/useAuth';
import { VideoContainer, VideoBg, Video1, VideoContent, VideoHeader, InfoContainer, InfoWrapper, InfoRow, Column1, Column2, ImgWrapper, Img, ProgrammeInfo, CourseCardContainer, CourseCardWrapper, CourseCards, CourseCardIcon, CourseHeader } from "./styledComponents";
import Classroom from "./Images/Classroom-rafiki.svg";
import { Card, Button } from 'react-bootstrap';


function Programme() {
    const { logout } = useAuth();
    const data = window.localStorage.getItem('Program');
    const [courseQuery, setcourseQuery] = useState(Number(data));
    const [course, setcourse] = useState([]);
    const [apro, setapro] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams()
    const prog = ProgramData.filter((pro) => pro.id === id)

    useEffect(() => {
        setapro(prog)

        return () => {
            setapro('')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    useEffect(() => {
        axios.get(`/course/${id}`)
            .then(res => {
                setcourse(res.data)
                setLoading(false)

            })
            .catch((err) => {
                const error = err.response.status;
                if (error === 401) {
                    logout()
                }
                setLoading(false)
                window.location.href = '/home'
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const cour = course.filter((cor) => cor.IDM === id)

    useEffect(() => {

        if (data !== null) {
            setcourseQuery(JSON.parse(data))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        window.localStorage.setItem('Program', JSON.stringify(courseQuery))


    }, [courseQuery])

    if (loading) {
        return (
            <div>
                <div className="loader-container">
                    <div className="spinner"></div>
                </div>
            </div>
        )
    }


    return (prog != "") ? (
        <>

            <Navbar />

            <VideoContainer>

                <VideoBg>
                    <Video1 autoPlay loop muted src={apro.length !== 0 ? apro[0].vid : ""} type="video/mp4" />
                </VideoBg>
                <VideoContent>
                    {
                        apro.length !== 0 ? <VideoHeader>
                            {apro[0].name.toUpperCase()}
                        </VideoHeader> : ""
                    }
                </VideoContent>
            </VideoContainer>

            <InfoContainer>
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            {
                                apro.length !== 0 ? <h1> <ProgrammeInfo>
                                    {apro[0].paragraph}
                                </ProgrammeInfo></h1> : ""
                            }
                        </Column1>

                        <Column2>
                            <ImgWrapper>
                                <Img src={Classroom} alt="classroom" />
                            </ImgWrapper>

                        </Column2>

                    </InfoRow>

                </InfoWrapper>
            </InfoContainer>

            <div className='Everything' style={{ display: 'flex' }}>
                <div style={{ marginTop: '25px', width: '60px' }}><GoBack /></div>

                <div className="container" style={{ overflowY: 'hidden' }}>

                    <div className="d-sm-flex align-items-center 
        justify-content-between " style={{ paddingTop: '30px' }}>
                        <div>

                            <h2>{
                                Number(courseQuery) === 1 ? "LEVEL 100" : Number(courseQuery) === 2 ? "LEVEL 200" : Number(courseQuery) === 3 ? "LEVEL 300" : Number(courseQuery) === 4 ? "LEVEL 400" : ""
                            }</h2> </div>

                        <div>
                            <select className='sel' defaultValue={courseQuery}
                                onChange={(event) => setcourseQuery(event.target.value)}>
                                <option value={1}>
                                    LEVEL 100
                                </option>
                                <option value={2}>
                                    LEVEL 200
                                </option>
                                <option value={3} >
                                    LEVEL 300
                                </option>
                                <option value={4} >
                                    LEVEL 400
                                </option>
                            </select>
                        </div>

                    </div>

                    <div className="d-sm-flex align-items-center 
                        justify-content-between">
                        <h3 style={{ fontWeight: 600 }}>FIRST SEMESTER</h3>
                    </div>
                    <CourseCardContainer>
                        <CourseCardWrapper>

                            {
                                cour.filter((course) => {
                                    if (Number(course.year) === Number(courseQuery) && (Number(course.semester === 1))) return course
                                    return ''
                                }).map((course) => (
                                    // <div key={course.id} style={{ marginBottom: '20px' }}>
                                    //     <Link to={`/home/${id}/${course.id}`} style={{ textDecoration: 'none' }}>
                                    //         <CourseCards>
                                    //             <CourseCardIcon src={course.img} />
                                    //             <CourseHeader>{course.name}</CourseHeader>
                                    //         </CourseCards>
                                    //     </Link>
                                    // </div>
                                    <Card className="progcards" key={course.id} style={{ marginBottom: '20px', marginLeft: 0 }}>
                                        <Card.Img className="progcardsimg" variant="top" src={course.img} />
                                        <Card.Body className="cardbody">
                                            <Link to={`/home/${id}/${course.id}`} style={{ color: 'white', textDecoration: 'none' }}><Button variant="primary" style={{ background: 'grey', borderColor: 'grey' }} className="cardsbutton">{course.name}</Button></Link>
                                        </Card.Body>
                                    </Card>
                                )
                                )
                            }

                        </CourseCardWrapper>
                    </CourseCardContainer>
                    <hr />
                    <div className="d-sm-flex align-items-center 
                        justify-content-between">
                        <h3 style={{ fontWeight: 600 }}>SECOND SEMESTER</h3>
                    </div>

                    <CourseCardContainer>
                        <CourseCardWrapper>

                            {
                                cour.filter((course) => {
                                    if (Number(course.year) === Number(courseQuery) && (Number(course.semester === 2))) return course
                                    return ''
                                }).map((course) => (
                                    // <div key={course.id} style={{ marginBottom: '20px' }}>
                                    //     <Link to={`/home/${id}/${course.id}`} style={{ textDecoration: 'none' }}>
                                    //         <CourseCards>
                                    //             <CourseCardIcon src={course.img} />
                                    //             <CourseHeader >{course.name}</CourseHeader>
                                    //         </CourseCards>
                                    //     </Link>
                                    // </div>
                                    <Card className="progcards" key={course.id} style={{ marginBottom: '20px', marginLeft: 0 }}>
                                        <Card.Img className="progcardsimg" variant="top" src={course.img} />
                                        <Card.Body className="cardbody">
                                            <Link to={`/home/${id}/${course.id}`} style={{ color: 'white', textDecoration: 'none' }}><Button variant="primary" style={{ background: 'grey', borderColor: 'grey' }} className="cardsbutton">{course.name}</Button></Link>
                                        </Card.Body>
                                    </Card>
                                )
                                )
                            }

                        </CourseCardWrapper>
                    </CourseCardContainer>

                </div>

            </div>

            <Footer />
        </>
    )
        : (
            <Navigate replace to="/404" />

        )
}

export default Programme;