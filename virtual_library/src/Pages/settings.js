import React from "react";
import "../Components/settings.css";
import { useAuth } from "./hooks/useAuth";
import { useState } from "react";
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import GoBack from "../Components/GoBack/GoBack";
import axios from "./utils/axios";
import { Form, Formik } from "formik";
import * as Yup from 'yup';
import { ThreeDots} from 'react-loader-spinner';
import { SettingsInput, SettingsSelect } from "../Components/Form";
import Modal from '../Components/Modal';
import { Erromsg } from "../Components/Style";



export default function Settings(){

    const {user, login, logout} = useAuth();
    const [loading, setLoading] = useState(false);
    const {fullname, username, email, programme, year} = user;
    const [color, setcolor] = useState("gray");
    const [colour, setcolour] = useState("gray");
    const Programmes = [{id: 1,name: "Agricultural Engineering"},
                        {id: 2,name:"Chemical Engineering"},
                        {id: 3,name:"Civil Engineering"},
                        {id: 4,name:"Geomatic Engineering"},
                        {id: 5,name:"Materials Engineering"},
                        {id: 6,name:"Mechanical Engineering"},
                        {id: 7,name:"Electrical Engineering"},
                        {id: 8,name:"Computer Engineering"},
                        {id: 9,name:"Aerospace Engineering"},
                        {id: 10,name:"Petroleum Engineering"},
                        {id: 11,name:"Telecom Engineering"},
                        {id: 12,name:"Geological Engineering"},
                        {id: 13,name:"Biomedical Engineering"},
                        {id: 14,name:"Petrochemical Engineering"},
                        {id: 15,name:"Metallurgical Engineering"}
                    ]
    const Level = [{id: 1, level: "Level 100"},
                    {id: 2, level: "Level 200"},
                    {id: 3, level: "Level 300"},
                    {id: 4, level: "Level 400"}
                  ]
     const [changePassword, setChangePassword] = useState(false);
     const [err1, seterr1] = useState("");
     const [err2, seterr2] = useState("");
     const [visibile, setvisibile] = useState(false);
     const [currentprog, setcurrentprog] = useState(programme);
     const [currentyear, setcurrentyear] = useState(year)


     function newPassword(){
        setChangePassword(prevState => !prevState)
    } 

    function setNewyear(event){
        const p = event.target.value
        if (p === year){
            setcolour("gray")
        }
        else{
            setcolour("black")
        }
        setcurrentyear(event.target.value)
    }

    
    function setNewprog(event){
        const p = event.target.value
        if (p === programme){
            setcolor("gray")
        }
        else{
            setcolor("black")
        }
        setcurrentprog(event.target.value)
    }
     
    const setNewUserDetails = async (field, new_value, old_value)=>{
       await axios.post("/settings",
       {
        field: field,
        new_value: new_value,
        old_value: old_value
       })
         .then(async(res)=>{
            console.log(res)
            const response = res.data.msg;
            if(response === "password changed"){
                seterr2(response)
            }
            await login();
            window.location.href = window.location
            setLoading(false);
         })
         .catch((err)=> {
            const error = err.response.data.msg;
            if(error === "User is not Logged In"){
                logout()
              }
            if(error === "password incorrect"){
                seterr2(error)
              }
            if (error === "username is already taken"){
                seterr1(error)
            }
            if(err.response.status === 401){
                    logout()
                  }
            setLoading(false)
         })
     }

     const handleClick = () =>{
        setvisibile(true);
        
        
        setTimeout(()=>{
          setvisibile(false);
          seterr1("");
          seterr2("")
        },3000);
      }

     if(loading ){
        return (
        <div>
            <div className="loader-container">
                <div className="spinner"></div>
            </div>
        </div>
        )
    }
     
     
    return(
     <div>   
    <Navbar/>
 
    <div className="settingss-body">
    <div style={{marginTop:'25px', width:'50px'}}><GoBack/></div> 
        <div className="settings-container">
       {
         user.length !== 0 ?(
            <div className="rightbox">
                <div className="setting">

                    <h1 className="h11">MY PROFILE</h1>

                    <h2 className="h12">Email</h2>
                    <div className="answer" style={{paddingLeft: "10px", color: "rgba(0, 0, 0, 0.5)"}}>{email}</div>
                    
                    <Formik
                        initialValues={{
                            fullnames:""
                        }}
                        validationSchema={
                            Yup.object({
                                fullnames: Yup.string()
                                .required("Enter new name to update")
                                .min(7, "Should be in between 7 and 29 characters")
                                .max(29, "Should be in between 7 and 29 characters")
                                .notOneOf([(fullname)],"Name is the same as old name")
                                .matches(/^[A-Za-z0-9\s]+$/, "Only alphanumeric are allowed")
                                .matches(/^(?![0-9]*$)/, "Only numbers are not allowed")
                            })
                        }
                        
                        onSubmit={(values,actions)=>{setNewUserDetails(
                                'fullname', values.fullnames.trim()
                            )
                            setTimeout(() => {
                                actions.setSubmitting(false);
                              }, 2000);
                                            
                    }}
                    >
                    {({isSubmitting})=>(
                    <Form>
                    <h2 className="h12">Full Name</h2>
                    <div className="answer">
                    <SettingsInput name="fullnames" type="text" placeholder={fullname} maxLength="29"/>
                    
                    {!isSubmitting && (
                    <button type="submit" className="btns">update</button>
                    )}

                    {isSubmitting && (
                        <div style={{paddingLeft:'10px'}}>
                        <ThreeDots
                        color= "blue"
                        height = {20}
                        width = {20}
                        />
                        </div>
                    )}


                    </div>
                    </Form>
                    )}
                    </Formik>

                    <Formik
                        initialValues={{
                            usernames:""
                        }}
                        validationSchema={
                            Yup.object({
                                usernames: Yup.string()
                                .required("Enter new username to update")
                                .min(2, "Should be in between 2 and 29 characters")
                                .max(29, "Should be in between 2 and 29 characters")
                                .notOneOf([(username)],"Username is the same as old username")
                                .matches(/^[A-Za-z0-9\s]+$/, "Only alphanumeric are allowed")
                                .matches(/^(?![0-9]*$)/, "Only numbers are not allowed")
                            })
                        }
                        
                        onSubmit={(values,actions)=> {setNewUserDetails(
                                'username', values.usernames.trim()
                            )
                            
                            setTimeout(() => {
                                actions.setSubmitting(false);
                              }, 2000);
                            
                                            
                    }}
                    >
                    {({ isSubmitting})=>(
                    <Form>
                    <h2 className="h12">Username</h2>
                    <div className="answer">
                    <SettingsInput name="usernames" type="text" placeholder={username} maxLength="29"/>
                    <Erromsg style={{paddingLeft:'10px', textTransform:'capitalize'}}>{visibile && err1}</Erromsg>

                    {!isSubmitting && (
                    <button type="submit" className="btns"  onClick={handleClick}>update</button>
                    )}

                    {isSubmitting && (
                        <div style={{paddingLeft:'10px'}}>
                        <ThreeDots
                        color= "blue"
                        height = {20}
                        width = {20}
                        />
                        </div>
                    )}
                   
                   
                    </div>
                    </Form>
                    )}
                    </Formik>

                    <Formik
                        initialValues={{
                            programmeselect:""
                        }}
                        validationSchema={
                            Yup.object({
                                programmeselect: Yup.string()
                                .oneOf(["Agricultural Engineering", "Chemical Engineering", "Civil Engineering", "Geomatic Engineering", "Materials Engineering", "Mechanical Engineering", "Electrical Engineering", "Computer Engineering", "Aerospace Engineering", "Petroleum Engineering", "Telecom Engineering", "Geological Engineering", "Biomedical Engineering", "Petrochemical Engineering", "Metallurgical Engineering"], "Select new programme")
                                .notOneOf([(programme)],"Select new programme")
                                .required("Select new programme")
                            })
                        }
                        
                        onSubmit={(values,actions)=>{setNewUserDetails(
                                'programme', values.programmeselect.trim()
                            )
                            setTimeout(() => {
                                actions.setSubmitting(false);
                              }, 2000);
                            
                                            
                    }}
                    >
                    {({isSubmitting})=>(
                    <Form onChange={setNewprog}>
                    <h2 className="h12">Programmme</h2>
                    <div className="answer">
                    <SettingsSelect value={currentprog} name="programmeselect" className="sele" type="dropdown" style={{color:color}}>
                    {
                        
                        Programmes.map((prog,index)=>(
                            <>
                            
                            <option key={prog.id} style={{color:'black'}}>{prog.name}</option>
                            </>

                        ))
                    }
                    </SettingsSelect>

                    {!isSubmitting && (
                    <button type="submit" className="btns">update</button>
                    )}

                    {isSubmitting && (
                        <div style={{paddingLeft:'10px'}}>
                        <ThreeDots
                        color= "blue"
                        height = {20}
                        width = {20}
                        />
                        </div>
                    )}
                    
                    </div>
                    </Form>
                    )}
                    </Formik>

                    <Formik
                        initialValues={{
                            yearselect:""
                        }}
                        validationSchema={
                            Yup.object({
                                yearselect: Yup.string()
                                .oneOf(["Level 100", "Level 200", "Level 300", "Level 400"], "Select new year")
                                .required("Select new year")
                                .notOneOf([(year)],"Select new year")
                            })
                        }
                        
                        onSubmit={(values,actions)=>{setNewUserDetails(
                                'year', values.yearselect.trim()
                            )
                            setTimeout(() => {
                                actions.setSubmitting(false);
                              }, 2000);
                                            
                    }}
                    >
                    {({isSubmitting})=>(
                    <Form onChange={setNewyear}>
                    <h2 className="h12">Year</h2>
                    <div className="answer">
                        
                    <SettingsSelect value={currentyear} name="yearselect" className="sele" type="dropdown" style={{color:colour}}>
                        {
                        
                        Level.map((level)=>(   
                            <>
                            
                            <option key={level.id} style={{color:'black'}}>{level.level}</option>
                            </>
                        ))
                    }
                    </SettingsSelect>
                     
                    {!isSubmitting && (
                    <button type="submit" className="btns">update</button>
                    )}

                    {isSubmitting && (
                        <div style={{paddingLeft:'10px'}}>
                        <ThreeDots
                        color= "blue"
                        height = {20}
                        width = {20}
                        />
                        </div>
                    )}

                   
                    </div>

                    </Form>
                    )}
                    </Formik>

                    <hr style={{marginBottom:'20px', marginTop:'20px'}}/>

                    <Formik
                        initialValues={{
                            oldpassword:"",
                            newpassword:"",
                            confirmpassword:"",
                        }}
                        validationSchema={
                            Yup.object({
                                oldpassword: Yup.string()
                                .required("Please enter your old password"),
                                newpassword: Yup.string()
                                .required("Please enter your new password")
                                .min(5, "Should be in between 5 and 24 characters")
                                .max(24, "Should be in between 5 and 24 characters")
                                .notOneOf([Yup.ref("oldpassword")],"Password is the same as old password")
                                .matches( /^((?![@/*<>#$%^&]).)*$/, "Symbol not allowed for this field"),
                                confirmpassword: Yup.string()
                                .required("Confirm your new password")
                                .oneOf([Yup.ref("newpassword")], "Password is not the same")
                            })
                        }
                        
                        onSubmit={(values,actions)=>{setNewUserDetails(
                                'password', values.newpassword.trim(), values.oldpassword.trim()
                            )
                            setTimeout(() => {
                                actions.setSubmitting(false);
                              }, 2000);
                                            
                    }}
                    >
                    {({isSubmitting})=>(
                    <Form>

                    <h2 className="h12">Password Change</h2>
                    <div className="answer">
                    <SettingsInput name="oldpassword" maxLength="24" type="password" placeholder="Enter your old password"/>
                    <Erromsg style={{paddingLeft:'10px', textTransform:'capitalize'}}>{visibile && err2}</Erromsg>
                    {
                        changePassword ? "" : <><button onClick={newPassword} className="btns">CLICK TO UPDATE PASSWORD</button> </>                
                     }
                    
                    </div>

                    {
                        changePassword? 
                        <div>
                            <h2 className="h12">New Password</h2>
                              <div className="answer">
                                <SettingsInput name="newpassword" maxLength="24" type="password"  placeholder="Enter your new password"/>
                               
                    </div>

                    <h2 className="h12">Confirm New Password</h2>       
                    <div className="answer">
                        <SettingsInput name="confirmpassword" maxLength="24" type="password"  placeholder="Confirm your new password"/>
                                       
                    </div>  
                    
                    
                    {!isSubmitting && (
                    <button type="submit" className="btns"  onClick={handleClick}>update</button>
                    )}
            
                    {isSubmitting && (
                        <div style={{paddingLeft:'15px'}}>
                        <ThreeDots
                        color= "blue"
                        height = {20}
                        width = {20}
                        />
                        </div>
                    )}

                    </div>
                        
                        :""
                    }
                    </Form>
                    )}
                    </Formik>

                    <Modal/>
                </div>
            </div>
         ): ""
        } 
        </div> 
    </div>
    <Footer/>
    </div>
    )
}