import React from 'react';
import { StyledContainer,StyledFormArea, StyledFormButton, Avatar, StyledTitle, colors, 
  ButtonGroup, CopyrightText, StyledSubTitle, ExtraText, TextLink} from "../../Components/Style";

import Logo from './../../Assets/Klogo.png';
import { Form, Formik } from "formik";
import { TextInput } from "../../Components/Form";
import {FiLock} from 'react-icons/fi';
import  * as Yup from 'yup';
import { ThreeDots} from 'react-loader-spinner';
import { useLocation } from 'react-router';
import axios from '../utils/axios';
import { useState } from 'react';


const ResetPassword = () => {
  const [success, setSuccess] = useState(false)
  const {search} = useLocation();
  
  const handleSubmit = (inputs)=> {
    axios.post(`/reset${search}`,{
    password: inputs.password
  }).then((response)=>{
    setSuccess(true)
  }).catch((err)=>{
    setSuccess("Invalid token")
    console.log(err);
  })
}

  if (success === "Invalid token"){
    return(
      <StyledContainer>
        <div>
        <StyledFormArea>
        <div style={{display:'flex'}}>
        <Avatar image={Logo}/>
          <StyledTitle color='Light black' size={40}>
            <span style={{font: "normal 36px 'Poppins', cursive", margin: 0}}>Virtual</span>
            <span style={{color:'#e0ac1c',font: "normal 36px 'Poppins', cursive"}}>Library</span>
          </StyledTitle></div>
          <StyledSubTitle color='Black' size={35} style={{font: "normal 36px 'Poppins', cursive"}}>Reset Password</StyledSubTitle>
          <span>INVALID TOKEN !!!</span>
          <ExtraText>
            Click <TextLink to="/forgotpassword">ForgotPassword</TextLink> to get a valid token
          </ExtraText>
        </StyledFormArea>
          <CopyrightText>All rights reserved &copy;2022</CopyrightText>
        </div>
    </StyledContainer>
    
    )
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
          
          
          {!success?(
            <>
            <StyledSubTitle color='Black' size={35} style={{font: "normal 36px 'Poppins', cursive"}}>Reset Password</StyledSubTitle>
          <Formik
            initialValues={{
             password : "",
             repeatPassword: "",
              
            }}
            validationSchema={
              Yup.object({
                password: Yup.string()
                .required("Please enter a password")
                .min(5, "Should be in between 5 and 24 characters")
                .max(24, "Should be in between 5 and 24 characters")
                .required("Please enter a password")
                .matches( /^((?![@/*<>#$%^&]).)*$/, "Symbol not allowed for this field"),
                repeatPassword: Yup.string()
                .required("Confirm Password")
                .oneOf([Yup.ref("password")], "Password is not the same"),
              })
            }
            onSubmit={handleSubmit}
          
          >
            {({isSubmitting })=>(
              <Form>
                 <TextInput
                 name="password" 
                 type="password"
                 label="Password"
                 placeholder="Enter your new password" 
                 icon={<FiLock/>}
                />

                <TextInput
                 name="repeatPassword" 
                 type="password"
                 label="Confirm Password"
                 placeholder="Confirm your new password" 
                 icon={<FiLock/>}
                />

              

              <ButtonGroup>
                {!isSubmitting && (
                 <StyledFormButton type="submit">
                  Reset
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
          :(
            <>
            <span>Your password has been reset</span>
            <ExtraText>
             Click <TextLink to="/">Login</TextLink> to login with your new password
          </ExtraText>
            </>
          ) 
        }
          </StyledFormArea>
          <CopyrightText>Copyright © 2022 <strong>Team Hoff</strong> All rights reserved</CopyrightText>
        </div>
    </StyledContainer>
    
  )
}

export default ResetPassword 