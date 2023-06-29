import React, { useEffect, useState } from "react";
import { HeaderContainer, HeaderButton, HeaderLeft, HeaderRight,BodyContainer,Image, BodyWrapper, BodyCard,  CardLeft, CardRight } from "./Styling";
import Tutorimg from "../Images/Profiling.svg"

import Female from "../Images/female.png"
import { Link } from "react-router-dom";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import axios from "../../utils/axios";

function Tutor(){
    const [tutor, setTutor] = useState([{
        Fullname: "",
        Gender: "",
        Occupation: "",
        Phone_Number: "",
        Email: "",
        Region: "",
        City: "",
        Course: [],
    }])
    useEffect(()=>{
        async function get(){
        await axios.get('/tutor')
        .then((response)=>{
            setTutor(response.data)
            console.log(response.data);
        })}
        get()
    },[])

    return(
        <>
        <Navbar />
        <HeaderContainer>
            <HeaderLeft>
                <h1>Hello there, you can sign up to be a tutor</h1>
                <Link to="/tutorform">
                    <HeaderButton>
                        Sign Up
                    </HeaderButton>
                </Link>
                
                
            </HeaderLeft>

            <HeaderRight>
                
            </HeaderRight>
            

        </HeaderContainer>

         <BodyContainer>

            <BodyWrapper>

                {
                    tutor.map((tutor, index) => {
                        return(
                        <BodyCard>
                        <CardLeft>

                                
                                    <Image>
                                       
                                         {/* <img src={Female} />  */}
                                    </Image>
                                
    
                                
                        </CardLeft>
    
                        <CardRight>
                                 
                                    <h2>{tutor.Fullname}</h2>
                                    <h3>{tutor.Gender}</h3>
                                
                            <h3><span>Occupation:</span> {tutor.Occupation}</h3>
                            <h3><span>Email: </span>{tutor.Email}</h3>
                            <h3><span>Phone:</span> {tutor.Phone_Number}</h3>
                            <h3>Courses:{ tutor.Course
                                        // tutor.Course.map((courses, index ) => {
                                        //     return(
                                        //     <span>{courses}</span>
                                        //     )
                                        // })
                                    }
                            </h3>
                        </CardRight>
                    </BodyCard>
                        )

                    })
                }
            </BodyWrapper>
        </BodyContainer>
        <Footer />
        </>
    )
}

export default Tutor;