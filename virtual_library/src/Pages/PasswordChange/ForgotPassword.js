import React, { useState } from 'react';
import {Erromsg,StyledContainer,StyledFormArea, StyledFormButton, Avatar, StyledTitle, colors, ButtonGroup, CopyrightText, StyledSubTitle} from "../../Components/Style";
import Logo from './../../Assets/Klogo.png';
import { Form, Formik } from "formik";
import { TextInput } from "../../Components/Form";
import {FiMail} from 'react-icons/fi';
import  * as Yup from 'yup';
import { ThreeDots} from 'react-loader-spinner';
import axios from '../utils/axios';


const ForgotPassword = () => {
  const [emailSent, setEmailSent] = useState(false)
  const [Error, setError] = useState("");
  const [visibile, setvisibile] = useState(false);

  const handleSubmit = (inputs)=>{
    axios.post("/forgot",
    {
      email:inputs.email
    })
    .then(()=>{
      setEmailSent(true)
    })
    .catch((err)=>{
      err.message = "Email does not exist"
      setError(err) 
    })
  }

  const handleClick = () =>{
    setvisibile(true);

    setTimeout(()=>{
      setvisibile(false);
      setError("");
    },3000);
  }

  return (
    
    <StyledContainer>
        <div>
        <StyledFormArea>
        <div style={{display:'flex'}}>
        <Avatar image={Logo}/>
          <StyledTitle color='Light black' size={40}>
            <span style={{font: "normal 36px 'Poppins', cursive", margin: 0}}>Virtual</span><span style={{color:'#e0ac1c',font: "normal 36px 'Poppins', cursive"}}>Library</span>
          </StyledTitle></div>
          
          {!emailSent?(
          <>
          <StyledSubTitle color='Black' size={35} style={{font: "normal 36px 'Poppins', cursive"}}>Forgot Password</StyledSubTitle>
          <span>Enter your email address to reset your password</span>
          <Formik
            initialValues={{
              email : "",
            }}
            validationSchema={
              Yup.object({
                email: Yup.string()
                .required("Please enter your email address")
                .email("Invalid email address")
                .matches( /^((?![/*<>#$%^&]).)*$/, "Symbol not allowed for this field"),
              })
            }
            
            onSubmit={handleSubmit}
          >
            {({isSubmitting })=>(
              <Form>
                <TextInput
                 name="email" 
                 type="text"
                 label=""
                 placeholder="Enter your email" 
                 icon={<FiMail style={{position:'relative', top:'-35px', left:'-5px'}}/>}
                />

                <Erromsg>{visibile && Error}</Erromsg>
              

              <ButtonGroup>
                {!isSubmitting && (
                 <StyledFormButton type="submit" onClick={handleClick}>
                  Submit
              </StyledFormButton>
              )}

              {isSubmitting && (
                <ThreeDots
                  color= {colors.theme}
                  height = {49}
                  width = {100}
                />
              )}
              </ButtonGroup>
              </Form>
            )}
          </Formik>
          </>)
          :(<>
            <span>Email has been sent, Please check your mail</span>
          </>)}
          </StyledFormArea>
          <CopyrightText>Copyright © 2023 <strong>WORKAHOLICS</strong> All rights reserved</CopyrightText>
        </div>
    </StyledContainer>
    
  )
}

export default ForgotPassword