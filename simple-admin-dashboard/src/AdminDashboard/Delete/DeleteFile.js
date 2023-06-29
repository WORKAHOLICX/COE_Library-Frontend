import { Form, Formik } from 'formik';
import { GiHamburgerMenu } from "react-icons/gi";
import * as yup from 'yup';
import axios from '../../utils/axios';
import React, { useState, useEffect } from 'react';
import Sidebar1 from '../../AdminDashboard/Sidebar/Sidebar1';
import { Container, InputContainer, InputLabel, UploadButton, Wrapper, NavBar } from './DeleteStyled';
import { SettingsInput, SettingsSelect } from '../../Components/Form';
import { ButtonGroup } from '../../Components/Style';
import { ThreeDots } from 'react-loader-spinner';
import './Modal.css'


const Delete = () => {
    const [isopen, setIsopen] = useState(false);
    const [modal, setModal] = useState(false)
    const showSidebar = () => {
        setIsopen(!isopen)
    }

    const [course, setcourse] = useState([])

    useEffect(() => {
        function fetchData() {
            axios.get("/admin/course")
                .then(res => {
                    setcourse(res.data.map(o => o.name).flat());
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    const uploadHandler = async (input) => {
        const formData = new FormData();
        formData.append('filetoDelete', input.filetoDelete);
        formData.append('courseName', input.courseName)
        formData.append('programme', input.programmeName)
        formData.append('level', input.level)
        formData.append('semester', input.semester)

        await axios.post("/admin/delete", formData)
            .then((res) => {
                console.log(res)
                setModal(true)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const slides = [
        "Lecture One", "Lecture Two", "Lecture Three", "Lecture Four", "Lecture Five", "Lecture Six", "Lecture Seven", "Lecture Eight", "Lecture Nine", "Lecture Ten", "Lecture Eleven", "Lecture Twelve", "Lecture Thirteen", "Lecture Fourteen", "Lecture Fifteen", "Lecture Sixteen", "Lecture Seventeen", "Lecture Eighteen", "Lecture Nineteen", "Lecture Twenty"
    ]

    const toggleModal = () => {
        setModal(!modal)
    }

    if (modal) {
        document.body.classList.add('active-modall')
    }
    else {
        document.body.classList.remove('active-modall')
    }




    return (

        <Container>
            <div className='overlay'>



                <Sidebar1 isopen={isopen} />

                {/* <NavBar>
                    <GiHamburgerMenu className="hamburger" onClick={showSidebar} style={{ paddingLeft: '10px' }} />


                </NavBar> */}


                <Wrapper>

                    <>
                        {modal ? (

                            <div className="modall">
                                <div onClick={toggleModal} className="overlayss" ></div>
                                <div className="modall-content" >
                                    <div className="topic">
                                    </div>
                                    <hr />
                                    <h3>File has been deleted</h3>

                                    <br /><br />
                                    <button className="close-modall" onClick={toggleModal}>OK</button>
                                </div>
                            </div>

                        ) : (
                            <></>
                        )

                        }
                    </>

                    <h1 style={{ textAlign: 'center', fontSize: '3rem', color: '#FF652F' }}>
                        DELETE FILE
                    </h1>

                    <Formik
                        initialValues={{
                            courseName: "",
                            programmeName: "",
                            level: "",
                            semester: "",
                            filetoDelete: ""
                        }}
                        validationSchema={
                            yup.object().shape({
                                courseName: yup.string()
                                    .required("Enter the courseName")
                                    .oneOf(course, "Invalid course"),
                                programmeName: yup.string()
                                    .required("Select the Programme")
                                    .oneOf(["Agricultural Engineering", "Chemical Engineering", "Civil Engineering", "Geomatic Engineering", "Materials Engineering", "Mechanical Engineering", "Electrical Engineering", "Computer Engineering", "Aerospace Engineering", "Petroleum Engineering", "Telecom Engineering", "Geological Engineering", "Biomedical Engineering", "Petrochemical Engineering", "Metallurgical Engineering"], "Select the Programme"),
                                semester: yup.string()
                                    .required("Select the Semester")
                                    .oneOf(["First Semester", "Second Semester"], "Select the Semester"),
                                level: yup.string()
                                    .required("Select the Year")
                                    .oneOf(["First Year", "Second Year", "Third Year", "Fourth Year"], "Select the Year"),
                                filetoDelete: yup.mixed()
                                    .required("You need to enter the filename")
                                    .test("fileFormat", "Unsupported Format", (value) => {
                                        return value && (value.slice(-3) === "pdf" || value.slice(-3) === "ppt" || value.slice(-4) === "pptx")
                                    })
                                    .test("fileFormat", "Invalid document name", (value) => {
                                        return value && (slides.includes(value.slice(0, -4)) || slides.includes(value.slice(0, -5)))
                                    })

                            })
                        }
                        onSubmit={uploadHandler}
                    >

                        {({ isSubmitting }) => (
                            <Form>

                                <InputContainer>
                                    <InputLabel>CourseName</InputLabel>


                                    <SettingsInput
                                        className="input-text"
                                        name="courseName"
                                        placeholder="Enter the Course Name"
                                        type="text"
                                    />
                                </InputContainer>

                                <InputContainer>


                                    <InputLabel>Programme </InputLabel>
                                    <SettingsSelect className="input-text2" name='programmeName'>
                                        <option>-- Select Programme --</option>
                                        <option>Agricultural Engineering</option>
                                        <option>Chemical Engineering</option>
                                        <option>Civil Engineering</option>
                                        <option>Geomatic Engineering</option>
                                        <option>Materials Engineering</option>
                                        <option>Mechanical Engineering</option>
                                        <option>Electrical Engineering</option>
                                        <option>Computer Engineering</option>
                                        <option>Aerospace Engineering</option>
                                        <option>Petroleum Engineering</option>
                                        <option>Telecom Engineering</option>
                                        <option>Geological Engineering</option>
                                        <option>Biomedical Engineering</option>
                                        <option>Petrochemical Engineering</option>
                                        <option>Metallurgical Engineering</option>
                                    </SettingsSelect>
                                </InputContainer>

                                <InputContainer>

                                    <InputLabel>Level</InputLabel>

                                    <SettingsSelect className="input-text4" name='level'>
                                        <option>--Select Year--</option>
                                        <option>First Year</option>
                                        <option>Second Year</option>
                                        <option>Third Year</option>
                                        <option>Fourth Year</option>
                                    </SettingsSelect>
                                </InputContainer>

                                <InputContainer>

                                    <InputLabel>Semester</InputLabel>

                                    <SettingsSelect className="input-text3" name='semester'>
                                        <option>--Select Semester--</option>
                                        <option>First Semester</option>
                                        <option>Second Semester</option>
                                    </SettingsSelect>

                                </InputContainer>


                                <InputContainer>

                                    <InputLabel>File</InputLabel>
                                    <div className="input-dropdown">

                                        <SettingsInput className="input-text" name="filetoDelete" type="text" placeholder="Enter the filename" />

                                    </div>

                                </InputContainer>
                                <ButtonGroup>
                                    {!isSubmitting && (
                                        <div style={{ textAlign: 'center' }}>
                                            <UploadButton type="submit" className="action">Delete</UploadButton>
                                        </div>
                                    )}
                                    {isSubmitting && (
                                        <ThreeDots
                                            color='#FF652F'
                                            height={49}
                                            width={100}
                                        />
                                    )}
                                </ButtonGroup>


                            </Form>
                        )}



                    </Formik>


                </Wrapper>

            </div>

        </Container >
    )


}
export default Delete